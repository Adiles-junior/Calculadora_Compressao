import React, { useState } from 'react';
import { AppStep, ProductModel, MeasurementValues, SizingResult } from './types';
import Stepper from './components/Stepper';
import ModelSelector from './components/ModelSelector';
import MeasurementForm from './components/MeasurementForm';
import ResultDisplay from './components/ResultDisplay';
import { findSizeForModel } from './data';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.MODEL_SELECTION);
  const [selectedModel, setSelectedModel] = useState<ProductModel | null>(null);
  const [measurements, setMeasurements] = useState<MeasurementValues | null>(null);
  const [results, setResults] = useState<SizingResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectModel = (model: ProductModel) => {
    setSelectedModel(model);
    setStep(AppStep.MEASUREMENT_INPUT);
  };

  const handleBackToSelection = () => {
    setSelectedModel(null);
    setMeasurements(null);
    setResults([]);
    setStep(AppStep.MODEL_SELECTION);
  };

  const handleSubmitMeasurements = (values: MeasurementValues) => {
    if (!selectedModel) return;

    setIsLoading(true);
    setMeasurements(values);

    // Simulate calculation time
    setTimeout(() => {
        const calculatedResults = findSizeForModel(selectedModel.id, values);
        setResults(calculatedResults);
        setStep(AppStep.RESULT_DISPLAY);
        setIsLoading(false);
    }, 500);
  };

  const renderContent = () => {
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center text-center h-96">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600"></div>
                <p className="mt-6 text-lg font-semibold text-gray-700">Calculando seu tamanho ideal...</p>
            </div>
        );
    }

    switch (step) {
      case AppStep.MODEL_SELECTION:
        return <ModelSelector onSelectModel={handleSelectModel} />;
      case AppStep.MEASUREMENT_INPUT:
        if (selectedModel) {
          return <MeasurementForm model={selectedModel} onBack={handleBackToSelection} onSubmit={handleSubmitMeasurements} />;
        }
        return null; // Should not happen
      case AppStep.RESULT_DISPLAY:
        if (selectedModel && measurements) {
          return <ResultDisplay model={selectedModel} results={results} measurements={measurements} onStartOver={handleBackToSelection} />;
        }
        return null; // Should not happen
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="min-h-screen text-gray-800 bg-gray-100" style={{ backgroundImage: "url('/img/IMAGEM DE TELA DE FUNDO.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <div className="container mx-auto px-4">
        <header className="py-6 flex justify-center items-center bg-white/80 rounded-b-xl shadow-md">
            <img src="/img/LOGOTIPO.png" alt="Logotipo" className="h-16 sm:h-20 object-contain" />
        </header>
        <main className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl mb-16">
            <Stepper currentStep={step} />
            <div className="pb-12 pt-4 px-4 sm:px-8">
                {renderContent()}
            </div>
        </main>
      </div>
      <footer className="text-center py-4 text-gray-600 text-sm bg-white/80 mt-8">
        © {new Date().getFullYear()} Venosan Brasil LTDA 2025
      </footer>
    </div>
  );
};

export default App;
