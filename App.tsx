
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
    }, 1000);
  };

  const renderContent = () => {
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center text-center h-64">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600"></div>
                <p className="mt-4 text-lg font-semibold text-gray-700">Calculando seu tamanho ideal...</p>
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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <main className="container mx-auto">
        <Stepper currentStep={step} />
        <div className="pb-16">
            {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
      