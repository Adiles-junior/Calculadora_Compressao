import { ProductCategory, ProductModel, Measurement, MeasurementValues, SizingResult } from './types';

// Função para gerar URLs de imagens do GitHub
const getAssetPath = (path: string) => {
  if (path.startsWith('http')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/main/${cleanPath}`;
};

export const MEASUREMENTS: { [key: string]: Measurement } = {
    // Circumferences
    cA: { id: 'cA', type: 'circumference', name: 'Circunferência', description: 'PARTE DA FRENTE DO PÉ' },
    cA1: { id: 'cA1', type: 'circumference', name: 'Circunferência', description: 'PARTE DO MEIO DO PÉ' },
    cB: { id: 'cB', type: 'circumference', name: 'Circunferência', description: 'TORNOZELO' },
    cC: { id: 'cC', type: 'circumference', name: 'Circunferência', description: 'PANTURRILHA' },
    cD: { id: 'cD', type: 'circumference', name: 'Circunferência', description: 'ABAIXO DO JOELHO' },
    cE: { id: 'cE', type: 'circumference', name: 'Circunferência', description: 'ACIMA DO JOELHO' },
    cF: { id: 'cF', type: 'circumference', name: 'Circunferência', description: 'BRAÇO' },
    cG: { id: 'cG', type: 'circumference', name: 'Circunferência', description: 'COXA' },
    cH: { id: 'cH', type: 'circumference', name: 'Circunferência', description: 'QUADRIL' },

    // Lengths
    AD: { id: 'AD', type: 'length', name: 'Comprimento', description: 'SOLA DO PÉ ATÉ ABAIXO DO JOELHO' },
    AG: { id: 'AG', type: 'length', name: 'Comprimento', description: 'SOLA DO PÉ ATÉ A COXA' },
    AY: { id: 'AY', type: 'length', name: 'Comprimento', description: 'SOLA DO PÉ' },
    BD: { id: 'BD', type: 'length', name: 'Comprimento', description: 'TORNOZELO ATÉ ABAIXO DO JOELHO' },
    BG: { id: 'BG', type: 'length', name: 'Comprimento', description: 'BRAÇO ATÉ O PUNHO' },
    BH: { id: 'BH', type: 'length', name: 'Comprimento', description: 'BRAÇADEIRA ATÉ O PUNHO' },
    ZH: { id: 'ZH', type: 'length', name: 'Comprimento', description: 'BRAÇADEIRA ATÉ O METACARPO COM O POLEGAR' },
    AB: { id: 'AB', type: 'length', name: 'Comprimento', description: 'PUNHO ATÉ O METACARPO' },
    EG: { id: 'EG', type: 'length', name: 'Comprimento', description: 'COXA ATÉ ACIMA DO JOELHO' },

    // Special
    SHOE_SIZE: { id: 'SHOE_SIZE', type: 'shoe_size', name: 'Tamanho do calçado', description: 'APENAS PARA CONSULTA DA MEIA SUPPORTLINE' },
};

export const PRODUCTS: ProductModel[] = [
    // Meias de Compressão
    { 
        id: 'BD', 
        name: 'BD', 
        description: 'Polaina', 
        category: ProductCategory.COMPRESSION_STOCKINGS, 
        image: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/BD.png'), 
        diagram: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['AD', 'cD', 'cC', 'cB'] 
    },
    { 
        id: 'AD', 
        name: 'AD', 
        description: 'Panturrilha', 
        category: ProductCategory.COMPRESSION_STOCKINGS, 
        image: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/AD.png'), 
        diagram: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['AD', 'cD', 'cC', 'cB'] 
    },
    { 
        id: 'AGH', 
        name: 'AGH', 
        description: 'Meia-Coxa com silicone', 
        category: ProductCategory.COMPRESSION_STOCKINGS, 
        image: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/AGH.png'), 
        diagram: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] 
    },
    { 
        id: 'AT', 
        name: 'AT', 
        description: 'Meia-Calça', 
        category: ProductCategory.COMPRESSION_STOCKINGS, 
        image: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/AT.png'), 
        diagram: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] 
    },
    { 
        id: 'ATQ', 
        name: 'ATQ', 
        description: 'Meia-Calça Queen', 
        category: ProductCategory.COMPRESSION_STOCKINGS, 
        image: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/ATQ.png'), 
        diagram: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['AG', 'cH', 'cG', 'cC', 'cB'] 
    },
    { 
        id: 'ATM', 
        name: 'ATM', 
        description: 'Meia-Calça gestante', 
        category: ProductCategory.COMPRESSION_STOCKINGS, 
        image: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/ATM.png'), 
        diagram: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['AG', 'cH', 'cG', 'cD', 'cC', 'cB'] 
    },
    { 
        id: 'AGG', 
        name: 'AGG', 
        description: 'Meia-Calça com cinta', 
        category: ProductCategory.COMPRESSION_STOCKINGS, 
        image: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/AGG.png'), 
        diagram: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] 
    },
    { 
        id: 'BH', 
        name: 'BH', 
        description: 'Braçadeira até o punho', 
        category: ProductCategory.COMPRESSION_STOCKINGS, 
        image: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/BH.png'), 
        diagram: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - SUPERIOR.png'), 
        requiredMeasurements: ['BH', 'cF', 'cD', 'cB'] 
    },
    { 
        id: 'ZH', 
        name: 'ZH', 
        description: 'Braçadeira até o metacarpo com polegar', 
        category: ProductCategory.COMPRESSION_STOCKINGS, 
        image: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/ZH.png'), 
        diagram: getAssetPath('/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - SUPERIOR.png'), 
        requiredMeasurements: ['ZH', 'cF', 'cD', 'cB'] 
    },
    
    // ReadyWrap
    { 
        id: 'BRACO', 
        name: 'BRAÇO', 
        description: '', 
        category: ProductCategory.READY_WRAP, 
        image: getAssetPath('/img/READYWRAP/INDIVIDUAL/BRAÇO - READYWRAP®.png'), 
        diagram: getAssetPath('/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - SUPERIOR.png'), 
        requiredMeasurements: ['BG', 'cG', 'cE', 'cB'] 
    },
    { 
        id: 'COXA', 
        name: 'COXA', 
        description: '', 
        category: ProductCategory.READY_WRAP, 
        image: getAssetPath('/img/READYWRAP/INDIVIDUAL/COXA FRENTE - READYWRAP®.png'), 
        diagram: getAssetPath('/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['EG', 'cG', 'cE'] 
    },
    { 
        id: 'LUVA', 
        name: 'LUVA', 
        description: '', 
        category: ProductCategory.READY_WRAP, 
        image: getAssetPath('/img/READYWRAP/INDIVIDUAL/LUVA - READYWRAP®.png'), 
        diagram: getAssetPath('/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - SUPERIOR.png'), 
        requiredMeasurements: ['AB', 'cB', 'cA'] 
    },
    { 
        id: 'JOELHOS', 
        name: 'JOELHO', 
        description: '', 
        category: ProductCategory.READY_WRAP, 
        image: getAssetPath('/img/READYWRAP/INDIVIDUAL/JOELHO - READYWRAP®.png'), 
        diagram: getAssetPath('/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['cE', 'cD'] 
    },
    { 
        id: 'DEDOS_DO_PE', 
        name: 'DEDOS DO PÉ', 
        description: '', 
        category: ProductCategory.READY_WRAP, 
        image: getAssetPath('/img/READYWRAP/INDIVIDUAL/DEDOS DO PÉ - READYWRAP®.png'), 
        diagram: getAssetPath('/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['cA'] 
    },
    { 
        id: 'PANTURRILHA_RW', 
        name: 'PANTURRILHA', 
        description: '', 
        category: ProductCategory.READY_WRAP, 
        image: getAssetPath('/img/READYWRAP/INDIVIDUAL/PANTURRILHA - READYWRAP®.png'), 
        diagram: getAssetPath('/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['BD', 'cC', 'cB'] 
    },
    { 
        id: 'PE_CT', 
        name: 'PÉ CT', 
        description: '', 
        category: ProductCategory.READY_WRAP, 
        image: getAssetPath('/img/READYWRAP/INDIVIDUAL/PÉ CT - READYWRAP®.png'), 
        diagram: getAssetPath('/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['AY', 'cA', 'cA1', 'cB'] 
    },
    { 
        id: 'PE_SL', 
        name: 'PÉ SL', 
        description: '', 
        category: ProductCategory.READY_WRAP, 
        image: getAssetPath('/img/READYWRAP/INDIVIDUAL/PÉ SL - READYWRAP®.png'), 
        diagram: getAssetPath('/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), 
        requiredMeasurements: ['AY', 'cA1', 'cB'] 
    },
];

const findSize = (sizes: string[], measurements: { value?: number; ranges: (number[] | null)[] }[]): string | null => {
    if (measurements.every(m => m.value === undefined || m.value === null || isNaN(m.value))) {
        return null;
    }
    for (let i = 0; i < sizes.length; i++) {
        const isMatch = measurements.every(m => {
            if (m.value === undefined || m.value === null || isNaN(m.value)) {
                return true;
            }
            const range = m.ranges[i];
            if (!range) {
                return true;
            }
            return m.value >= range[0] && m.value <= range[1];
        });
        if (isMatch) {
            return sizes[i];
        }
    }
    return null;
};

const checkRange = (value: number | undefined, min: number, max: number): boolean => {
    return value !== undefined && value >= min && value <= max;
};

// Funções de tamanho para cada linha de produto
const findLeglineSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const cB = { value: m.cB, ranges: [[18, 21], [21, 25], [25, 29], [29, 33], [33, 38]] };
    const cC = { value: m.cC, ranges: [[28, 38], [30, 42], [32, 46], [34, 50], [43, 55]] };
    const cG_Normal = { value: m.cG, ranges: [[40, 62], [46, 70], [54, 78], [60, 81], [66, 84]] };
    const cG_Queen = { value: m.cG, ranges: [[44, 64], [50, 72], [58, 80], [63, 83], [70, 86]] };
    const cH_Queen = { value: m.cH, ranges: [[80, 110], [90, 120], [95, 125], [115, 145], [130, 155]] };

    const isQueenModel = m.cH !== undefined;
    const size = isQueenModel
        ? findSize(SIZES, [cB, cC, cG_Queen, cH_Queen])
        : findSize(SIZES, [cB, cC, cG_Normal]);

    if (!size) return null;

    let length;
    if (m.AD && checkRange(m.AD, 37, 43)) length = "NORMAL";
    if (m.AG && checkRange(m.AG, 68, 80)) length = "NORMAL";
    
    return { productLine: 'LEGLINE', size, length };
};

// Mapeamento de funções de tamanho para cada modelo
const sizingFunctionMap: { [key: string]: (m: MeasurementValues) => SizingResult | SizingResult[] | null } = {
    // Meias de Compressão
    'BD': findLeglineSize,
    'AD': findLeglineSize,
    'AGH': findLeglineSize,
    'AT': findLeglineSize,
    'ATQ': findLeglineSize,
    'ATM': findLeglineSize,
    'AGG': findLeglineSize,
    'BH': (m) => {
        const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
        const size = findSize(SIZES, [
            { value: m.cB, ranges: [[16, 19], [19, 22], [22, 26], [26, 30]] },
            { value: m.cF, ranges: [[18, 25], [23, 30], [28, 35], [33, 40]] },
        ]);
        return size ? { productLine: 'ARMLINE', size } : null;
    },
    'ZH': (m) => {
        const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
        const size = findSize(SIZES, [
            { value: m.cB, ranges: [[16, 19], [19, 22], [22, 26], [26, 30]] },
            { value: m.cF, ranges: [[18, 25], [23, 30], [28, 35], [33, 40]] },
        ]);
        return size ? { productLine: 'ARMLINE', size } : null;
    },
    // ReadyWrap
    'BRACO': (m) => {
        const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
        const size = findSize(SIZES, [
            { value: m.cB, ranges: [[16, 19], [19, 22], [22, 26], [26, 30]] },
            { value: m.cF, ranges: [[18, 25], [23, 30], [28, 35], [33, 40]] },
        ]);
        return size ? { productLine: 'READYWRAP BRAÇO', size } : null;
    },
    'COXA': (m) => {
        const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
        const size = findSize(SIZES, [
            { value: m.cE, ranges: [[30, 40], [38, 48], [46, 56], [54, 64]] },
            { value: m.cG, ranges: [[40, 50], [48, 58], [56, 66], [64, 74]] },
        ]);
        return size ? { productLine: 'READYWRAP COXA', size } : null;
    },
    'LUVA': (m) => {
        const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE'];
        const size = findSize(SIZES, [
            { value: m.cB, ranges: [[16, 19], [19, 22], [22, 26]] },
            { value: m.cA, ranges: [[18, 21], [20, 23], [22, 25]] },
        ]);
        return size ? { productLine: 'READYWRAP LUVA', size } : null;
    },
    'JOELHOS': (m) => {
        const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
        const size = findSize(SIZES, [
            { value: m.cD, ranges: [[30, 36], [35, 41], [40, 46], [45, 51]] },
            { value: m.cE, ranges: [[35, 41], [40, 46], [45, 51], [50, 56]] },
        ]);
        return size ? { productLine: 'READYWRAP JOELHO', size } : null;
    },
    'DEDOS_DO_PE': (m) => {
        const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE'];
        const size = findSize(SIZES, [
            { value: m.cA, ranges: [[18, 21], [20, 23], [22, 25]] },
        ]);
        return size ? { productLine: 'READYWRAP DEDOS DO PÉ', size } : null;
    },
    'PANTURRILHA_RW': (m) => {
        const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
        const size = findSize(SIZES, [
            { value: m.cB, ranges: [[18, 22], [21, 25], [24, 28], [27, 32]] },
            { value: m.cC, ranges: [[28, 34], [33, 39], [38, 44], [43, 50]] },
        ]);
        return size ? { productLine: 'READYWRAP PANTURRILHA', size } : null;
    },
    'PE_CT': (m) => {
        const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
        const size = findSize(SIZES, [
            { value: m.cA, ranges: [[18, 21], [20, 23], [22, 25], [24, 28]] },
            { value: m.cA1, ranges: [[20, 23], [22, 25], [24, 27], [26, 30]] },
            { value: m.cB, ranges: [[18, 22], [21, 25], [24, 28], [27, 32]] },
        ]);
        return size ? { productLine: 'READYWRAP PÉ CT', size } : null;
    },
    'PE_SL': (m) => {
        const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
        const size = findSize(SIZES, [
            { value: m.cA1, ranges: [[20, 23], [22, 25], [24, 27], [26, 30]] },
            { value: m.cB, ranges: [[18, 22], [21, 25], [24, 28], [27, 32]] },
        ]);
        return size ? { productLine: 'READYWRAP PÉ SL', size } : null;
    },
};

// Função principal para encontrar o tamanho de um modelo específico
export const findSizeForModel = (modelId: string, measurements: MeasurementValues): SizingResult[] => {
    const sizingFunction = sizingFunctionMap[modelId];
    if (!sizingFunction) return [];

    const result = sizingFunction(measurements);
    if (!result) return [];

    return Array.isArray(result) ? result : [result];
};
