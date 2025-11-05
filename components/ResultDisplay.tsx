import React from 'react';
import { ProductModel, SizingResult, MeasurementValues } from '../types';
import { MEASUREMENTS } from '../data';

// Função para obter o caminho da imagem do produto
const getProductImagePath = (productLine: string) => {
  // URL base para as imagens no GitHub
  const GITHUB_BASE_URL = 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img';
  
  // Mapeia os nomes dos produtos para os nomes dos arquivos
  const productImageMap: { [key: string]: string } = {
    // Meias de Compressão
    'LEGLINE': 'MEIAS_CAIXAS/LEGLINE_15-23_ESQUERDA.png',
    'LEGLINE QUEEN': 'MEIAS_CAIXAS/LEGLINE_15-23_ESQUERDA.png',
    'ULTRALINE 4000': 'MEIAS_CAIXAS/ULTRALINE_ESQUERDA.png',
    'VENOSAN 6000': 'MEIAS_CAIXAS/6000_ESQUERDA.png',
    'COMFORTLINE': 'MEIAS_CAIXAS/COMFORTLINE_ESQUERDA.png',
    'COMFORTLINE COTTON': 'MEIAS_CAIXAS/COMFORTLINE_COTTON_ESQUERDA.png',
    'SUPPORTLINE SOFT': 'MEIAS_CAIXAS/SUPPORTLINE_SOFT_ESQUERDA.png',
    'SPORTACTIVE': 'MEIAS_CAIXAS/SPORTACTIVE_ESQUERDA.png',
    'FLAT SOFT': 'MEIAS_CAIXAS/FLAT_SOFT_ESQUERDA.png',
    'FLAT STRONG': 'MEIAS_CAIXAS/FLAT_STRONG_ESQUERDA.png',
    'ULCERAID': 'MEIAS_CAIXAS/ULCERAID_ESQUERDA.png',
    'ULCERCOMFORT': 'MEIAS_CAIXAS/ULCERCOMFORT_ESQUERDA.png',
    'AES': 'MEIAS_CAIXAS/AES_ESQUERDA.png',
    'BD': 'MEIAS_CAIXAS/SPORTACTIVE_ESQUERDA.png',
    'ZH': 'MEIAS_CAIXAS/ZH_ESQUERDA.png',
    
    // ReadyWrap
    'ReadyWrap BRAÇO': 'READYWRAP_CAIXAS/READYWRAP_BRACO.png',
    'ReadyWrap COXA': 'READYWRAP_CAIXAS/READYWRAP_COXA.png',
    'ReadyWrap LUVA': 'READYWRAP_CAIXAS/READYWRAP_LUVA.png',
    'ReadyWrap JOELHO': 'READYWRAP_CAIXAS/READYWRAP_JOELHO.png',
    'ReadyWrap DEDOS DO PÉ': 'READYWRAP_CAIXAS/READYWRAP_DEDOS_DO_PE.png',
    'ReadyWrap PANTURRILHA': 'READYWRAP_CAIXAS/READYWRAP_PANTURRILHA.png',
    'ReadyWrap PÉ CT': 'READYWRAP_CAIXAS/READYWRAP_PE_CT.png',
    'ReadyWrap PÉ SL': 'READYWRAP_CAIXAS/READYWRAP_PE_SL.png'
  };

  const imagePath = productImageMap[productLine] || '';
  return imagePath ? `${GITHUB_BASE_URL}/${imagePath}` : '';
};


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
              value && (
                <div key={key}>
                  <span className="font-semibold text-gray-600">{MEASUREMENTS[key]?.name || key}:</span>{' '}
                  <span className="text-gray-800">{value} {MEASUREMENTS[key]?.type === 'circumference' || MEASUREMENTS[key]?.type === 'length' ? 'cm' : ''}</span>
                </div>
              )
            ))}
          </div>
        </div>

        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="bg-white border-l-4 border-green-500 p-4 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  {/* Imagem do produto */}
                  <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center p-2">
                    <img 
                        src={getProductImagePath(result.productLine)} 
                        alt={result.productLine}
                        className="max-w-full max-h-48 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const errorText = document.createElement('p');
                            errorText.textContent = 'Imagem não encontrada';
                            errorText.className = 'text-xs text-red-500';
                            parent.appendChild(errorText);
                          }
                          console.error('Erro ao carregar a imagem do produto:', result.productLine);
                        }}
                      />
                  </div>
                  
                  {/* Informações do produto */}
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-green-700">{result.productLine}</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">
                      Tamanho: {result.size}
                    </p>
                    {result.length && <p className="text-lg text-gray-700">Comprimento: {result.length}</p>}
                    {result.notes && <p className="text-sm text-gray-600 mt-2">{result.notes}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-yellow-50 rounded-lg">
            <p className="text-lg font-semibold text-yellow-800">Nenhum produto compatível encontrado.</p>
            <p className="text-gray-600 mt-2">Suas medidas não se encaixam em nenhum de nossos tamanhos padrão para os produtos aplicáveis. Por favor, verifique os valores inseridos ou entre em contato com um especialista.</p>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <button
            onClick={onStartOver}
            className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
          >
            Fazer Nova Consulta
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;