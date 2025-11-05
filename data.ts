import { ProductCategory, ProductModel, Measurement, MeasurementValues, SizingResult } from './types';

// Função para gerar URLs de imagens do GitHub
const getAssetPath = (path: string) => {
  // Se já for uma URL completa, retorna direto
  if (path.startsWith('http')) {
    return path;
  }
  // Remove a barra inicial se existir
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  // Converte o caminho para o formato do GitHub
  const encodedPath = cleanPath
    .replace(/\s/g, '%20')
    .replace(/_/g, '%20')
    .toUpperCase();
  return `https://github.com/Adiles-junior/Calculadora_Compressao/blob/main/${encodedPath}?raw=true`;
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
    { id: 'BD', name: 'BD', description: 'Polaina', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/BD.png'), diagram: getAssetPath('img/READYWRAP%20CAIXAS/BD_PANTURRILHA.svg'), requiredMeasurements: ['AD', 'cD', 'cC', 'cB'] },
    { id: 'AD', name: 'AD', description: 'Panturrilha', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/AD.png'), diagram: getAssetPath('img/READYWRAP%20CAIXAS/AD_PANTURRILHA.svg'), requiredMeasurements: ['AD', 'cD', 'cC', 'cB'] },
    { id: 'AGH', name: 'AGH', description: 'Meia-Coxa com silicone', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS_E_BRACADEIRAS_COMPRESSIVAS/AGH.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/AGH.png'), requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'AT', name: 'AT', description: 'Meia-Calça', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/AT.png'), diagram: getAssetPath('img/READYWRAP%20CAIXAS/AT.png'), requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'ATQ', name: 'ATQ', description: 'Meia-Calça Queen', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/ATQ.png'), diagram: getAssetPath('img/READYWRAP%20CAIXAS/ATQ.png'), requiredMeasurements: ['AG', 'cH', 'cG', 'cC', 'cB'] },
    { id: 'ATM', name: 'ATM', description: 'Meia-Calça gestante', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/ATM.png'), diagram: getAssetPath('img/READYWRAP%20CAIXAS/ATM.png'), requiredMeasurements: ['AG', 'cH', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'AGG', name: 'AGG', description: 'Meia-Calça com cinta', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/AGG.png'), diagram: getAssetPath('img/READYWRAP%20CAIXAS/AGG.png'), requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'BH', name: 'BH', description: 'Braçadeira até o punho', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/BH.png'), diagram: getAssetPath('img/READYWRAP%20CAIXAS/BH.png'), requiredMeasurements: ['BH', 'cF', 'cD', 'cB'] },
    { id: 'ZH', name: 'ZH', description: 'Braçadeira até o metacarpo com polegar', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/ZH.png'), diagram: getAssetPath('img/READYWRAP%20CAIXAS/ZH.png'), requiredMeasurements: ['ZH', 'cF', 'cD', 'cB'] },
    
    // ReadyWrap
    { id: 'BRACO', name: 'BRAÇO', description: '', category: ProductCategory.READY_WRAP, image: getAssetPath('img/READYWRAP/INDIVIDUAL/BRAÇO - READYWRAP®.png'), diagram: getAssetPath('img/READYWRAP/INDIVIDUAL/MEDIÇÃO - SUPERIOR.png'), requiredMeasurements: ['BG', 'cG', 'cE', 'cB'] },
    { id: 'COXA', name: 'COXA', description: '', category: ProductCategory.READY_WRAP, image: getAssetPath('img/READYWRAP/INDIVIDUAL/COXA FRENTE - READYWRAP®.png'), diagram: getAssetPath('img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), requiredMeasurements: ['EG', 'cG', 'cE'] },
    { id: 'LUVA', name: 'LUVA', description: '', category: ProductCategory.READY_WRAP, image: getAssetPath('img/READYWRAP/INDIVIDUAL/LUVA - READYWRAP®.png'), diagram: getAssetPath('img/READYWRAP/INDIVIDUAL/MEDIÇÃO - SUPERIOR.png'), requiredMeasurements: ['AB', 'cB', 'cA'] },
    { id: 'JOELHOS', name: 'JOELHO', description: '', category: ProductCategory.READY_WRAP, image: getAssetPath('img/READYWRAP/INDIVIDUAL/JOELHO - READYWRAP®.png'), diagram: getAssetPath('img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), requiredMeasurements: ['cE', 'cD'] },
    { id: 'DEDOS_DO_PE', name: 'DEDOS DO PÉ', description: '', category: ProductCategory.READY_WRAP, image: getAssetPath('img/READYWRAP/INDIVIDUAL/DEDOS DO PÉ - READYWRAP®.png'), diagram: getAssetPath('img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), requiredMeasurements: ['cA'] },
    { id: 'PANTURRILHA_RW', name: 'PANTURRILHA', description: '', category: ProductCategory.READY_WRAP, image: getAssetPath('img/READYWRAP/INDIVIDUAL/PANTURRILHA - READYWRAP®.png'), diagram: getAssetPath('img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), requiredMeasurements: ['BD', 'cC', 'cB'] },
    { id: 'PE_CT', name: 'PÉ CT', description: '', category: ProductCategory.READY_WRAP, image: getAssetPath('img/READYWRAP/INDIVIDUAL/PÉ CT - READYWRAP®.png'), diagram: getAssetPath('img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), requiredMeasurements: ['AY', 'cA', 'cA1', 'cB'] },
    { id: 'PE_SL', name: 'PÉ SL', description: '', category: ProductCategory.READY_WRAP, image: getAssetPath('img/READYWRAP/INDIVIDUAL/PÉ SL - READYWRAP®.png'), diagram: getAssetPath('img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png'), requiredMeasurements: ['AY', 'cA1', 'cB'] }
];

// ===================================================================================
// UTILITY FUNCTIONS
// ===================================================================================

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

// ===================================================================================
// SIZING LOGIC FOR EACH PRODUCT LINE
// ===================================================================================

// --- LEG SIZING FUNCTIONS ---

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

const findUltraline4000LegSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 23], [23, 26], [26, 29], [29, 32], [32, 38]] },
        { value: m.cC, ranges: [[28, 39], [33, 42], [36, 45], [39, 50], [43, 55]] },
        { value: m.cD, ranges: [[28, 38], [32, 41], [35, 44], [38, 46], [42, 52]] },
        { value: m.cG, ranges: [[48, 63], [54, 67], [58, 72], [63, 74], null] },
    ]);
    if (!size) return null;
    let length;
    if (m.AD) length = checkRange(m.AD, 35, 40) ? "CURTA" : checkRange(m.AD, 37, 43) ? "NORMAL" : undefined;
    if (m.AG) length = checkRange(m.AG, 63, 69) ? "CURTA" : checkRange(m.AG, 68, 80) ? "NORMAL" : undefined;
    return { productLine: 'ULTRALINE 4000', size, length };
};

const findVenosan6000Size = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 21], [21, 25], [25, 29], [29, 33], [33, 38]] },
        { value: m.cC, ranges: [[28, 38], [30, 42], [32, 46], [34, 50], [43, 55]] },
        { value: m.cG, ranges: [[40, 62], [46, 70], [54, 78], [60, 81], null] },
    ]);
    if(!size) return null;
    let length;
    if (m.AD && checkRange(m.AD, 37, 43)) length = "NORMAL";
    if (m.AG && checkRange(m.AG, 68, 80)) length = "NORMAL";
    return { productLine: 'VENOSAN 6000', size, length };
};

const findComfortlineCottonLegSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES_LEG = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const sizeLeg = findSize(SIZES_LEG, [
        { value: m.cB, ranges: [[19, 23], [23, 26], [26, 29], [29, 32], [32, 35]] },
        { value: m.cC, ranges: [[30, 38], [35, 43], [39, 47], [48, 56], [54, 62]] },
        { value: m.cD, ranges: [[28, 36], [33, 41], [37, 45], [46, 54], [52, 60]] },
    ]);
    if (!sizeLeg) return null;
    let length;
    if (m.SHOE_SIZE !== undefined) length = m.SHOE_SIZE <= 39 ? "CURTA" : "LONGA";
    return { productLine: 'COMFORTLINE COTTON', size: sizeLeg, length };
};

const findComfortlineLegSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES_LEG = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const sizeLeg = findSize(SIZES_LEG, [
        { value: m.cB, ranges: [[19, 23], [23, 26], [26, 29]] },
        { value: m.cC, ranges: [[30, 38], [35, 43], [39, 47]] },
        { value: m.cD, ranges: [[28, 36], [33, 41], [37, 45]] },
        { value: m.cG, ranges: [[49, 61], [54, 66], [60, 72]] },
    ]);
    if (!sizeLeg) return null;
    let length;
    if (m.AD !== undefined && m.SHOE_SIZE !== undefined) length = m.SHOE_SIZE <= 39 ? "CURTA" : "LONGA";
    if (m.AG !== undefined) length = m.AG <= 72 ? "CURTA" : "LONGA";
    return { productLine: 'COMFORTLINE', size: sizeLeg, length };
};

const findSupportlineSoftSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PP', 'P', 'M', 'G', 'XG'];
    const size = findSize(SIZES, [
        { value: m.SHOE_SIZE, ranges: [[34, 36], [37, 38], [39, 41], [42, 44], [45, 47]] },
        { value: m.cB, ranges: [[16.5, 20.5], [19, 21.5], [21.5, 24], [23, 26.5], [26.5, 32]] },
        { value: m.cC, ranges: [[26.5, 37], [28, 38], [33, 43.5], [35.5, 46], [38.5, 51.5]] },
    ]);
    return size ? { productLine: 'SUPPORTLINE SOFT', size } : null;
};

const findSportactiveSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MEDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 23], [23, 26], [26, 29], [29, 32], [32, 38]] },
        { value: m.cC, ranges: [[28, 39], [33, 42], [36, 45], [39, 50], [43, 55]] },
        { value: m.cD, ranges: [[28, 38], [32, 41], [35, 44], [38, 46], [42, 52]] },
    ]);
    return size ? { productLine: 'SPORTACTIVE', size } : null;
};

const findFlatSize = (m: MeasurementValues): SizingResult[] => {
    const results: SizingResult[] = [];
    
    // Tamanho baseado no comprimento do pé
    if (m.AY !== undefined) {
        let size: string | null = null;
        if (m.AY >= 19 && m.AY <= 22) size = 'P';
        else if (m.AY > 22 && m.AY <= 26) size = 'M';
        else if (m.AY > 26 && m.AY <= 30) size = 'G';
        
        if (size) {
            results.push({
                productLine: 'FLAT',
                size,
                length: 'PADRÃO'
            });
        }
    }
    
    return results;
};

const findUlcerKitSize = (m: MeasurementValues): SizingResult[] => {
    const results: SizingResult[] = [];
    
    // Tamanho baseado nas medidas de circunferência
    if (m.cB !== undefined && m.cC !== undefined) {
        let size: string | null = null;
        
        if (m.cB >= 15 && m.cB <= 25 && m.cC >= 25 && m.cC <= 35) {
            size = 'PEQUENO';
        } else if (m.cB > 20 && m.cB <= 30 && m.cC > 30 && m.cC <= 40) {
            size = 'MÉDIO';
        } else if (m.cB > 25 && m.cB <= 35 && m.cC > 35 && m.cC <= 45) {
            size = 'GRANDE';
        } else if (m.cB > 30 && m.cB <= 40 && m.cC > 40 && m.cC <= 50) {
            size = 'X-GRANDE';
        }
        
        if (size) {
            results.push({
                productLine: 'ULCER KIT',
                size,
                length: 'PADRÃO'
            });
        }
    }
    
    return results;
};

const findAesSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 22], [22, 26], [26, 30]] },
        { value: m.cC, ranges: [[28, 36], [36, 44], [44, 52]] },
    ]);
    return size ? { productLine: 'AES', size } : null;
};

// --- ARM SIZING FUNCTIONS ---

const findUltraline4000ArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[15, 18], [18, 21], [21, 24], [24, 27]] },
        { value: m.cF, ranges: [[18, 24], [24, 30], [30, 36], [36, 42]] },
    ]);
    return size ? { productLine: 'ULTRALINE 4000 ARM', size } : null;
};

const findComfortlineCottonArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[15, 19], [19, 23], [23, 27]] },
        { value: m.cF, ranges: [[20, 28], [28, 36], [36, 44]] },
    ]);
    if (!size) return null;
    
    let length;
    if (m.BG && checkRange(m.BG, 45, 52)) length = "CURTA";
    else if (m.BG && checkRange(m.BG, 53, 60)) length = "LONGA";
    
    return { productLine: 'COMFORTLINE COTTON ARM', size, length };
};

const findComfortlineArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[15, 19], [19, 23], [23, 27]] },
        { value: m.cF, ranges: [[20, 28], [28, 36], [36, 44]] },
    ]);
    if (!size) return null;
    
    let length;
    if (m.BG && checkRange(m.BG, 45, 52)) length = "CURTA";
    else if (m.BG && checkRange(m.BG, 53, 60)) length = "LONGA";
    
    return { productLine: 'COMFORTLINE ARM', size, length };
};

// --- READYWRAP SIZING FUNCTION ---

const findReadyWrapSize = (modelId: string, m: MeasurementValues): SizingResult | null => {
    switch (modelId) {
        case 'BRACO':
            if (!m.BG || !m.cG || !m.cE || !m.cB) return null;
            // Lógica de tamanho para BRAÇO
            if (m.BG <= 50 && m.cG <= 30 && m.cE <= 28 && m.cB <= 22) {
                return { productLine: 'READYWRAP', size: 'PEQUENO' };
            } else if (m.BG <= 60 && m.cG <= 40 && m.cE <= 35 && m.cB <= 26) {
                return { productLine: 'READYWRAP', size: 'MÉDIO' };
            } else if (m.BG <= 70 && m.cG <= 50 && m.cE <= 42 && m.cB <= 30) {
                return { productLine: 'READYWRAP', size: 'GRANDE' };
            }
            break;
            
        case 'COXA':
            if (!m.EG || !m.cG || !m.cE) return null;
            // Lógica de tamanho para COXA
            if (m.EG <= 40 && m.cG <= 50 && m.cE <= 40) {
                return { productLine: 'READYWRAP', size: 'PEQUENO' };
            } else if (m.EG <= 50 && m.cG <= 60 && m.cE <= 50) {
                return { productLine: 'READYWRAP', size: 'MÉDIO' };
            } else if (m.EG <= 60 && m.cG <= 70 && m.cE <= 60) {
                return { productLine: 'READYWRAP', size: 'GRANDE' };
            }
            break;
            
        case 'LUVA':
            if (!m.AB || !m.cB || !m.cA) return null;
            // Lógica de tamanho para LUVA
            if (m.AB <= 15 && m.cB <= 18 && m.cA <= 20) {
                return { productLine: 'READYWRAP', size: 'PEQUENO' };
            } else if (m.AB <= 18 && m.cB <= 22 && m.cA <= 24) {
                return { productLine: 'READYWRAP', size: 'MÉDIO' };
            } else if (m.AB <= 21 && m.cB <= 26 && m.cA <= 28) {
                return { productLine: 'READYWRAP', size: 'GRANDE' };
            }
            break;
            
        case 'JOELHOS':
            if (!m.cE || !m.cD) return null;
            // Lógica de tamanho para JOELHOS
            if (m.cE <= 35 && m.cD <= 40) {
                return { productLine: 'READYWRAP', size: 'PEQUENO' };
            } else if (m.cE <= 45 && m.cD <= 50) {
                return { productLine: 'READYWRAP', size: 'MÉDIO' };
            } else if (m.cE <= 55 && m.cD <= 60) {
                return { productLine: 'READYWRAP', size: 'GRANDE' };
            }
            break;
            
        case 'DEDOS_DO_PE':
            if (!m.cA) return null;
            // Lógica de tamanho para DEDOS DO PÉ
            if (m.cA <= 20) {
                return { productLine: 'READYWRAP', size: 'PEQUENO' };
            } else if (m.cA <= 25) {
                return { productLine: 'READYWRAP', size: 'MÉDIO' };
            } else if (m.cA <= 30) {
                return { productLine: 'READYWRAP', size: 'GRANDE' };
            }
            break;
            
        case 'PANTURRILHA_RW':
            if (!m.BD || !m.cC || !m.cB) return null;
            // Lógica de tamanho para PANTURRILHA
            if (m.BD <= 40 && m.cC <= 35 && m.cB <= 25) {
                return { productLine: 'READYWRAP', size: 'PEQUENO' };
            } else if (m.BD <= 50 && m.cC <= 45 && m.cB <= 30) {
                return { productLine: 'READYWRAP', size: 'MÉDIO' };
            } else if (m.BD <= 60 && m.cC <= 55 && m.cB <= 35) {
                return { productLine: 'READYWRAP', size: 'GRANDE' };
            }
            break;
            
        case 'PE_CT':
            if (!m.AY || !m.cA || !m.cA1 || !m.cB) return null;
            // Lógica de tamanho para PÉ CT
            if (m.AY <= 25 && m.cA <= 20 && m.cA1 <= 22 && m.cB <= 24) {
                return { productLine: 'READYWRAP', size: 'PEQUENO' };
            } else if (m.AY <= 28 && m.cA <= 24 && m.cA1 <= 26 && m.cB <= 28) {
                return { productLine: 'READYWRAP', size: 'MÉDIO' };
            } else if (m.AY <= 31 && m.cA <= 28 && m.cA1 <= 30 && m.cB <= 32) {
                return { productLine: 'READYWRAP', size: 'GRANDE' };
            }
            break;
            
        case 'PE_SL':
            if (!m.AY || !m.cA1 || !m.cB) return null;
            // Lógica de tamanho para PÉ SL
            if (m.AY <= 25 && m.cA1 <= 22 && m.cB <= 24) {
                return { productLine: 'READYWRAP', size: 'PEQUENO' };
            } else if (m.AY <= 28 && m.cA1 <= 26 && m.cB <= 28) {
                return { productLine: 'READYWRAP', size: 'MÉDIO' };
            } else if (m.AY <= 31 && m.cA1 <= 30 && m.cB <= 32) {
                return { productLine: 'READYWRAP', size: 'GRANDE' };
            }
            break;
    }
    
    return null;
};

// ===================================================================================
// MASTER SIZING DISPATCHER
// ===================================================================================

const sizingFunctionMap: { [key: string]: (m: MeasurementValues) => SizingResult | SizingResult[] | null } = {
    // Meias de Compressão
    'BD': findLeglineSize,
    'AD': findLeglineSize,
    'AGH': findLeglineSize,
    'AT': findLeglineSize,
    'ATQ': findLeglineSize,
    'ATM': findLeglineSize,
    'AGG': findLeglineSize,
    'BH': findUltraline4000ArmSize,
    'ZH': findUltraline4000ArmSize,
    
    // ReadyWrap
    'BRACO': (m) => findReadyWrapSize('BRACO', m),
    'COXA': (m) => findReadyWrapSize('COXA', m),
    'LUVA': (m) => findReadyWrapSize('LUVA', m),
    'JOELHOS': (m) => findReadyWrapSize('JOELHOS', m),
    'DEDOS_DO_PE': (m) => findReadyWrapSize('DEDOS_DO_PE', m),
    'PANTURRILHA_RW': (m) => findReadyWrapSize('PANTURRILHA_RW', m),
    'PE_CT': (m) => findReadyWrapSize('PE_CT', m),
    'PE_SL': (m) => findReadyWrapSize('PE_SL', m),
    
    // Outras funções de tamanho
    'ULTRALINE_4000_LEG': findUltraline4000LegSize,
    'VENOSAN_6000': findVenosan6000Size,
    'COMFORTLINE_COTTON_LEG': findComfortlineCottonLegSize,
    'COMFORTLINE_LEG': findComfortlineLegSize,
    'SUPPORTLINE_SOFT': findSupportlineSoftSize,
    'SPORTACTIVE': findSportactiveSize,
    'FLAT': (m) => findFlatSize(m)[0] || null,
    'ULCER_KIT': (m) => findUlcerKitSize(m)[0] || null,
    'AES': findAesSize,
    'ULTRALINE_4000_ARM': findUltraline4000ArmSize,
    'COMFORTLINE_COTTON_ARM': findComfortlineCottonArmSize,
    'COMFORTLINE_ARM': findComfortlineArmSize,
};

export const findSizeForModel = (modelId: string, measurements: MeasurementValues): SizingResult[] => {
    const sizingFunction = sizingFunctionMap[modelId];
    if (!sizingFunction) {
        console.warn(`No sizing function found for model ID: ${modelId}`);
        return [];
    }

    const result = sizingFunction(measurements);
    
    if (!result) return [];
    
    // Se for um array, retorna como está
    if (Array.isArray(result)) {
        return result;
    }
    
    // Se for um único resultado, retorna em um array
    return [result];
};
