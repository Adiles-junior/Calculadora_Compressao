<<<<<<< HEAD
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ProductModel, SizingResult, MeasurementValues } from '../types';
import { MEASUREMENTS } from '../data';

// URL da imagem de fallback
const FALLBACK_IMAGE = 'https://via.placeholder.com/300x400?text=Imagem+n%C3%A3o+dispon%C3%ADvel';

// Função para obter o caminho da imagem da caixa com base no nome do produto
const getBoxImagePath = (productLine: string, side: 'left' | 'right') => {
  // Mapeia os nomes dos produtos para URLs diretas das imagens
  const productImageMap: Record<string, string> = {
    // Meias de Compressão - Lado Esquerdo
    'LEGLINE_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/LEGLINE%2015-23%20-%20ESQUERDA.png',
    'ULTRALINE 4000_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/ULTRALINE%20ESQUERDA.png',
    'VENOSAN 6000_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/6000%20ESQUERDA.png',
    'COMFORTLINE_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/COMFORTLINE%20ESQUERDA.png',
    'COMFORTLINE COTTON_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/COMFORTLINE%20COTTON%20ESQUERDA.png',
    'SUPPORTLINE SOFT_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/SUPPORTLINE%20SOFT%20ESQUERDA.png',
    'SPORTACTIVE_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/SPORTACTIVE%20-%20ESQUERDA.png',
    'FLAT SOFT_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/FLAT%20SOFT%20NOVA%20COR%20ESQUERDA.png',
    'FLAT STRONG_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/FLAT%20STRONG%20ESQUERDA.png',
    'ULCERAID_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/ULCERAID%20ESQUERDA.png',
    'ULCERCOMFORT_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/ULCERCOMFORT%20COM%20ZIPER%20ESQUERDA.png',
    'AES_left': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/AES%20ESQUERDA.png',
    
    // Meias de Compressão - Lado Direito
    'LEGLINE_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/LEGLINE%2015-23%20-%20DIREITA.png',
    'ULTRALINE 4000_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/ULTRALINE%20DIREITA.png',
    'VENOSAN 6000_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/6000%20DIREITA.png',
    'COMFORTLINE_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/COMFORTLINE%20DIREITA.png',
    'COMFORTLINE COTTON_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/COMFORTLINE%20COTTON%20DIREITA.png',
    'SUPPORTLINE SOFT_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/SUPPORTLINE%20SOFT%20DIREITA.png',
    'SPORTACTIVE_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/SPORTACTIVE%20DIREITA.png',
    'FLAT SOFT_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/FLAT%20SOFT%20NOVA%20COR%20DIREITA.png',
    'FLAT STRONG_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/FLAT%20STRONG%20DIREITA.png',
    'ULCERAID_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/ULCERAID%20DIREITA.png',
    'ULCERCOMFORT_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/ULCERCOMFORT%20COM%20ZIPER%20DIREITA.png',
    'AES_right': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20CAIXAS/AES%20DIREITA.png',
    
    // ReadyWrap - Mesma imagem para ambos os lados
    'BRAÇO': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/BRA%C3%87O%20-%20READYWRAP%C2%AE.png',
    'ReadyWrap BRACO': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/BRA%C3%87O%20-%20READYWRAP%C2%AE.png',
    'COXA': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/COXA%20-%20READYWRAP%C2%AE.png',
    'ReadyWrap COXA': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/COXA%20-%20READYWRAP%C2%AE.png',
    'LUVA': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/LUVA%20-%20READYWRAP%C2%AE.png',
    'ReadyWrap LUVA': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/LUVA%20-%20READYWRAP%C2%AE.png',
    'JOELHO': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/JOELHO%20-%20READYWRAP%C2%AE.png',
    'ReadyWrap JOELHOS': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/JOELHO%20-%20READYWRAP%C2%AE.png',
    'DEDOS DO PÉ': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/READYWRAP%C2%AE%20-%20DEDOS%20DO%20P%C3%89.png',
    'ReadyWrap DEDOS DO PE': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/READYWRAP%C2%AE%20-%20DEDOS%20DO%20P%C3%89.png',
    'DEDOS_DO_PE': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/READYWRAP%C2%AE%20-%20DEDOS%20DO%20P%C3%89.png',
    'ReadyWrap DEDOS_DO_PE': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/READYWRAP%C2%AE%20-%20DEDOS%20DO%20P%C3%89.png',
    'DEDOS DO PE': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/READYWRAP%C2%AE%20-%20DEDOS%20DO%20P%C3%89.png',
    'PANTURRILHA': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/PANTURRILHA%20-%20READYWRAP%C2%AE.png',
    'ReadyWrap PANTURRILHA': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/PANTURRILHA%20-%20READYWRAP%C2%AE.png',
    'PÉ CT': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/P%C3%89%20CT%20-%20READYWRAP%C2%AE.png',
    'ReadyWrap PE_CT': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/READYWRAP%C2%AE%20-%20P%C3%89%20CT.png',
    'PÉ SL': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/READYWRAP%C2%AE%20-%20P%C3%89%20SL.png',
    'ReadyWrap PE_SL': 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/READYWRAP%C2%AE%20-%20P%C3%89%20SL.png',
  };

  // Log para depuração
  console.log('Product Line:', productLine);
  console.log('Side:', side);
  
  // Para produtos que têm imagens diferentes para cada lado
  const sideSpecificKey = `${productLine}_${side}`;
  if (sideSpecificKey in productImageMap) {
    return productImageMap[sideSpecificKey];
  }
  
  // Para produtos ReadyWrap que têm a mesma imagem para ambos os lados
  if (productLine in productImageMap) {
    return productImageMap[productLine];
  }
  
  // Se não encontrar a imagem, retorna uma imagem padrão
  console.warn(`Imagem não encontrada para o produto: ${productLine} (${side})`);
  return FALLBACK_IMAGE;
=======
import React from 'react';
import { ProductModel, SizingResult, MeasurementValues } from '../types';
import { MEASUREMENTS } from '../data';

// Função para obter o caminho da imagem da caixa com base no nome do produto
const getBoxImagePath = (productLine: string, side: 'left' | 'right') => {
  // Mapeia os nomes dos produtos para os nomes dos arquivos
  const productMap: { [key: string]: { folder: string; prefix: string } } = {
    // Meias de Compressão
    'LEGLINE': { folder: 'MEIAS CAIXAS', prefix: 'LEGLINE 15-23' },
    'ULTRALINE 4000': { folder: 'MEIAS CAIXAS', prefix: 'ULTRALINE' },
    'VENOSAN 6000': { folder: 'MEIAS CAIXAS', prefix: '6000' },
    'COMFORTLINE': { folder: 'MEIAS CAIXAS', prefix: 'COMFORTLINE' },
    'COMFORTLINE COTTON': { folder: 'MEIAS CAIXAS', prefix: 'COMFORTLINE COTTON' },
    'SUPPORTLINE SOFT': { folder: 'MEIAS CAIXAS', prefix: 'SUPPORTLINE SOFT' },
    'SPORTACTIVE': { folder: 'MEIAS CAIXAS', prefix: 'SPORTACTIVE' },
    'FLAT SOFT': { folder: 'MEIAS CAIXAS', prefix: 'FLAT SOFT (NOVA COR)' },
    'FLAT STRONG': { folder: 'MEIAS CAIXAS', prefix: 'FLAT STRONG' },
    'ULCERAID': { folder: 'MEIAS CAIXAS', prefix: 'ULCERAID' },
    'ULCERCOMFORT': { folder: 'MEIAS CAIXAS', prefix: 'ULCERCOMFORT COM ZIPER' },
    'AES': { folder: 'MEIAS CAIXAS', prefix: 'AES' },
    
    // ReadyWrap - Mapeando tanto os nomes formatados quanto os IDs originais
    'BRAÇO': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - BRAÇO' },
    'ReadyWrap BRACO': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - BRAÇO' },
    'COXA': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - COXA' },
    'ReadyWrap COXA': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - COXA' },
    'LUVA': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - LUVA' },
    'ReadyWrap LUVA': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - LUVA' },
    'JOELHO': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - JOELHO' },
    'ReadyWrap JOELHOS': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - JOELHO' },
    'DEDOS DO PÉ': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - DEDOS DO PÉ' },
    'ReadyWrap DEDOS_DO_PE': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - DEDOS DO PÉ' },
    'PANTURRILHA': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - PANTURRILHA' },
    'ReadyWrap PANTURRILHA': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - PANTURRILHA' },
    'PÉ CT': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - PÉ CT' },
    'ReadyWrap PE_CT': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - PÉ CT' },
    'PÉ SL': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - PÉ SL' },
    'ReadyWrap PE_SL': { folder: 'READYWRAP CAIXAS', prefix: 'READYWRAP® - PÉ SL' }
  };

  const productInfo = productMap[productLine] || { folder: 'MEIAS CAIXAS', prefix: productLine };
  
  // Log para depuração
  console.log('Product Line:', productLine);
  console.log('Product Info:', productInfo);
  
  if (productInfo.folder === 'READYWRAP CAIXAS') {
    // Para READYWRAP, usamos a mesma imagem para ambos os lados
    const imagePath = `/img/${productInfo.folder}/${productInfo.prefix}.png`;
    console.log('Image Path:', imagePath);
    return imagePath;
  } else {
    // Para outros produtos, usamos imagens diferentes para frente e verso
    const sideText = side === 'left' ? 'ESQUERDA' : 'DIREITA';
    const imagePath = `/img/${productInfo.folder}/${productInfo.prefix} - ${sideText}.png`;
    console.log('Image Path:', imagePath);
    return imagePath;
  }
>>>>>>> 396693ef3a99c3257dccf6570209bb4e58d46792
};

interface ResultDisplayProps {
  model: ProductModel;
  results: SizingResult[];
  measurements: MeasurementValues;
  onStartOver: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ model, results, measurements, onStartOver }) => {
<<<<<<< HEAD
  const [imageLoaders, setImageLoaders] = useState<Record<string, { loading: boolean; error: boolean }>>({});
  const isMounted = useRef(true);

  // Inicializa o estado de carregamento para cada resultado
  useEffect(() => {
    isMounted.current = true;
    
    const initialLoaders = results.reduce((acc, result) => {
      acc[result.productLine] = { loading: true, error: false };
      return acc;
    }, {} as Record<string, { loading: boolean; error: boolean }>);
    
    if (isMounted.current) {
      setImageLoaders(initialLoaders);
    }

    // Limpeza ao desmontar
    return () => {
      isMounted.current = false;
    };
  }, [results]);

  // Função para lidar com o carregamento das imagens
  const handleImageLoad = useCallback((productLine: string) => {
    if (!isMounted.current) return;
    
    setImageLoaders(prev => ({
      ...prev,
      [productLine]: { loading: false, error: false }
    }));
  }, []);

  // Função para lidar com erros no carregamento das imagens
  const handleImageError = useCallback((productLine: string, e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!isMounted.current) return;
    
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    console.error('Erro ao carregar a imagem:', productLine);
    
    setImageLoaders(prev => ({
      ...prev,
      [productLine]: { loading: false, error: true }
    }));
  }, []);

=======
>>>>>>> 396693ef3a99c3257dccf6570209bb4e58d46792
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
                  <span className="font-semibold text-gray-600">{MEASUREMENTS[key]?.description || key}:</span>{' '}
                  <span className="text-gray-800">{value} {key === 'SHOE_SIZE' ? '' : 'cm'}</span>
                </div>
              )
            ))}
          </div>
        </div>

        {results.length > 0 ? (
          <div className="space-y-6">
            {results.map((result, index) => (
              <div key={index} className="bg-white border-l-4 border-green-500 p-4 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Imagens das caixas */}
                  <div className={`flex-1 flex items-center justify-center bg-gray-100 rounded-lg ${
                    result.productLine.includes('Meias de Compressão') 
                      ? 'min-h-[250px] h-[250px]' 
                      : 'min-h-[455px] h-[455px]'
                  } border border-gray-200 overflow-visible p-0 m-0 relative`}>
                    <div className="w-full h-full flex items-center justify-center p-0 m-0 relative">
                      <img 
                        src={getBoxImagePath(result.productLine, 'left')} 
                        alt={result.productLine}
                        className={result.productLine.includes('Meias de Compressão') 
                          ? 'w-auto h-auto max-w-[90%] max-h-[90%] object-contain m-0 p-0' 
                          : 'w-auto h-auto max-w-full max-h-full object-contain m-0 p-0'}
<<<<<<< HEAD
                        onLoad={() => handleImageLoad(result.productLine)}
                        onError={(e) => handleImageError(result.productLine, e)}
                        style={{
                          display: imageLoaders[result.productLine]?.loading ? 'none' : 'block',
=======
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          console.error('Erro ao carregar a imagem:', result.productLine);
                        }}
                        style={{ 
>>>>>>> 396693ef3a99c3257dccf6570209bb4e58d46792
                          width: 'auto',
                          height: 'auto',
                          objectFit: 'contain',
                          margin: 0,
                          padding: 0,
<<<<<<< HEAD
                          visibility: imageLoaders[result.productLine]?.error ? 'hidden' : 'visible'
                        }}
                      />
                      {imageLoaders[result.productLine]?.loading && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                          </div>
                        )}
=======
                          display: 'block'
                        }}/>
>>>>>>> 396693ef3a99c3257dccf6570209bb4e58d46792
                    </div>
                  </div>
                  
                  {/* Informações do produto */}
                  <div className="flex-1">
<<<<<<< HEAD
                    <p className="text-sm font-semibold text-green-700">{result.productLine.replace(/_/g, ' ')}</p>
=======
                    <p className="text-sm font-semibold text-green-700">{result.productLine}</p>
>>>>>>> 396693ef3a99c3257dccf6570209bb4e58d46792
                    <p className="text-2xl font-bold text-gray-800 mt-2">
                      Tamanho: {result.size}
                      {result.length && <span className="block sm:inline">, Comprimento: {result.length}</span>}
                    </p>
                    {result.notes && <p className="text-sm text-gray-600 mt-2">{result.notes}</p>}
                    
                    <button className="mt-4 text-sm text-green-600 hover:text-green-800 font-medium">
                      Ver detalhes do produto →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-red-500">Não foi possível determinar o tamanho com as medidas fornecidas.</p>
            <p className="text-gray-600 mt-2">Por favor, verifique as medidas e tente novamente.</p>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <button
            onClick={onStartOver}
            className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
          >
            Voltar ao Início
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
