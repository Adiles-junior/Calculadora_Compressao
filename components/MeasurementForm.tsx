import React, { useState } from 'react';
import { ProductModel, MeasurementValues } from '../types';
import { MEASUREMENTS } from '../data';

interface MeasurementFormProps {
  model: ProductModel;
  onBack: () => void;
  onSubmit: (measurements: MeasurementValues) => void;
}

interface InputFieldProps {
  id: string;
  value: number | string;
  onChange: (id: string, value: string) => void;
}

// Componente InputField movido para fora do MeasurementForm para evitar recriação
// e corrigir problemas de tipagem. Agora é um componente controlado com value e onChange.
const InputField: React.FC<InputFieldProps> = ({ id, value, onChange }) => {
  const measurement = MEASUREMENTS[id];
  if (!measurement) return null;

  return (
    <div className="mb-4">
      <div className="flex items-center mb-1">
        <div className="bg-gray-200 text-gray-700 font-bold text-sm rounded-md px-3 py-1 mr-3">
          {id}
        </div>
        <div>
          <label htmlFor={id} className="block text-sm font-bold text-gray-700">
            {measurement.name}
          </label>
          <span className="text-xs text-gray-500">{measurement.description}</span>
        </div>
      </div>
      <input
        type="number"
        id={id}
        value={value}
        onChange={e => onChange(id, e.target.value)}
        placeholder={measurement.type === 'shoe_size' ? 'Número do pé' : 'Em cm'}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        step="0.1"
        min="0"
      />
    </div>
  );
};

const MeasurementForm: React.FC<MeasurementFormProps> = ({ model, onBack, onSubmit }) => {
  const [values, setValues] = useState<Partial<MeasurementValues>>({});
  const [error, setError] = useState('');

  const handleInputChange = (id: string, value: string) => {
    const numValue = value === '' ? undefined : parseFloat(value);
    setValues(prev => ({ ...prev, [id]: numValue }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFilled = model.requiredMeasurements.every(
      id => values[id] !== undefined && values[id]! > 0
    );

    if (!requiredFilled) {
      setError('Por favor, preencha todos os campos de medidas obrigatórias com valores válidos.');
      return;
    }
    setError('');
    onSubmit(values as MeasurementValues);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-lg font-semibold text-green-700 mb-1">Modelo selecionado</h2>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {model.name} - {model.description}
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit}>
          {model.requiredMeasurements.map(id => (
            <InputField
              key={id}
              id={id}
              value={values[id] || ''}
              onChange={handleInputChange}
            />
          ))}
          {model.specialInputs?.map(id => (
            <InputField
              key={id}
              id={id}
              value={values[id] || ''}
              onChange={handleInputChange}
            />
          ))}

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          
          <div className="mt-8 space-y-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              CONSULTAR
            </button>
            <button
              type="button"
              onClick={onBack}
              className="w-full bg-yellow-600 bg-opacity-70 text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-100 transition-all duration-300"
            >
              VOLTAR
            </button>
          </div>
        </form>

        <div className="hidden md:block">
          {model.notes && (
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Observações</h3>
              <div className="text-sm text-gray-600 space-y-2" dangerouslySetInnerHTML={{ __html: model.notes }} />
            </div>
          )}
         
          <div className="flex justify-center items-center">
            <img 
              src={model.diagram} 
              alt="Diagrama de medição" 
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeasurementForm;
