
import React from 'react';
import { ProductModel, SizingResult, MeasurementValues } from '../types';
import { MEASUREMENTS } from '../data';

interface ResultDisplayProps {
  model: ProductModel;
  results: SizingResult[];
  measurements: MeasurementValues;
  onStartOver: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ model, results, measurements, onStartOver }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Seu Tamanho Ideal</h1>
        <p className="text-gray-600 mb-6">Com base nas medidas fornecidas, encontramos as seguintes recomendações para o modelo <span className="font-bold">{model.name}</span>:</p>

        <div className="mb-8 p-4 bg-gray-50 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">Suas Medidas:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {Object.entries(measurements).map(([key, value]) => (
                    <div key={key}>
                        <span className="font-semibold text-gray-600">{MEASUREMENTS[key]?.description || key}:</span>{' '}
                        <span className="text-gray-800">{value} {key === 'SHOE_SIZE' ? '' : 'cm'}</span>
                    </div>
                ))}
            </div>
        </div>

        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <p className="text-sm font-semibold text-green-700">{result.productLine}</p>
                <p className="text-2xl font-bold text-gray-800">
                  Tamanho: {result.size}
                  {result.length && `, ${result.length}`}
                </p>
                {result.notes && <p className="text-sm text-gray-600 mt-2">{result.notes}</p>}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg text-center">
            <h2 className="text-xl font-bold text-yellow-800">Nenhum tamanho correspondente encontrado</h2>
            <p className="text-yellow-700 mt-2">
              Não foi possível encontrar um tamanho padrão com as medidas fornecidas. Por favor, verifique suas medidas e tente novamente, ou consulte um profissional para produtos sob medida.
            </p>
          </div>
        )}

        <div className="mt-10 text-center">
          <button
            onClick={onStartOver}
            className="bg-green-600 text-white font-bold py-3 px-8 rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            FAZER NOVA CONSULTA
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
      