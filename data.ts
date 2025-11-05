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
    cA: { id: 'cA', type: 'circumference', name: 'Circunferência (cA)', description: 'Articulação metatarsofalangeana' },
    cA1: { id: 'cA1', type: 'circumference', name: 'Circunferência (cA1)', description: 'Ponto mais alto do peito do pé' },
    cB: { id: 'cB', type: 'circumference', name: 'Circunferência (cB)', description: 'Tornozelo' },
    cC: { id: 'cC', type: 'circumference', name: 'Circunferência (cC)', description: 'Panturrilha' },
    cD: { id: 'cD', type: 'circumference', name: 'Circunferência (cD)', description: 'Abaixo do joelho' },
    cE: { id: 'cE', type: 'circumference', name: 'Circunferência (cE)', description: 'Meio da coxa / Acima do joelho' },
    cF: { id: 'cF', type: 'circumference', name: 'Circunferência (cF)', description: 'Braço' },
    cG: { id: 'cG', type: 'circumference', name: 'Circunferência (cG)', description: 'Coxa / Topo do braço' },
    cH: { id: 'cH', type: 'circumference', name: 'Circunferência (cH)', description: 'Quadril' },

    // Lengths
    AD: { id: 'AD', type: 'length', name: 'Comprimento (AD)', description: 'Sola do pé até abaixo do joelho' },
    AG: { id: 'AG', type: 'length', name: 'Comprimento (AG)', description: 'Sola do pé até a coxa' },
    AY: { id: 'AY', type: 'length', name: 'Comprimento (AY)', description: 'Sola do pé (calcanhar à ponta)' },
    BD: { id: 'BD', type: 'length', name: 'Comprimento (BD)', description: 'Tornozelo até abaixo do joelho' },
    BG: { id: 'BG', type: 'length', name: 'Comprimento (BG)', description: 'Braço (axila até o punho)' },
    BH: { id: 'BH', type: 'length', name: 'Comprimento (BH)', description: 'Braçadeira (ombro até o punho)' },
    AB: { id: 'AB', type: 'length', name: 'Comprimento (AB)', description: 'Punho até o metacarpo' },
    EG: { id: 'EG', type: 'length', name: 'Comprimento (EG)', description: 'Da virilha até acima do joelho' },

    // ReadyWrap specific lengths
    iAY: { id: 'iAY', type: 'length', name: 'Comprimento (iAY)', description: 'Comprimento do pé (ReadyWrap)' },
    iBD: { id: 'iBD', type: 'length', name: 'Comprimento (iBD)', description: 'Comprimento da panturrilha (ReadyWrap)' },
    iEG: { id: 'iEG', type: 'length', name: 'Comprimento (iEG)', description: 'Comprimento da coxa (ReadyWrap)' },
    iBG: { id: 'iBG', type: 'length', name: 'Comprimento (iBG)', description: 'Comprimento do braço (ReadyWrap)' },
    iAB: { id: 'iAB', type: 'length', name: 'Comprimento (iAB)', description: 'Comprimento da mão (ReadyWrap)' },


    // Special
    SHOE_SIZE: { id: 'SHOE_SIZE', type: 'shoe_size', name: 'Tamanho do calçado', description: 'Número do calçado (Brasil)' },
};

export const PRODUCTS: ProductModel[] = [
    // Meias de Compressão
    { id: 'BD', name: 'BD', description: 'Polaina', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS_E_BRACADEIRAS_COMPRESSIVAS/BD.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/b36642fb34c8bc534d7b4f12aa28ce1fbf15e4c6/img/MEDIDAS_MEIAS/BD_PANTURRILHA.svg'), requiredMeasurements: ['AD', 'cD', 'cC', 'cB'] },
    { id: 'AD', name: 'AD', description: 'Panturrilha', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS_E_BRACADEIRAS_COMPRESSIVAS/AD.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/b36642fb34c8bc534d7b4f12aa28ce1fbf15e4c6/img/MEDIDAS_MEIAS/AD_PANTURRILHA.svg'), requiredMeasurements: ['AD', 'cD', 'cC', 'cB'], specialInputs: ['SHOE_SIZE'] },
    { id: 'AGH', name: 'AGH', description: 'Meia-Coxa com silicone', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS_E_BRACADEIRAS_COMPRESSIVAS/AGH.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/b36642fb34c8bc534d7b4f12aa28ce1fbf15e4c6/img/MEDIDAS_MEIAS/AGH.png'), requiredMeasurements: ['AG', 'cG', 'cC', 'cB'] },
    { id: 'AT', name: 'AT', description: 'Meia-Calça', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS_E_BRACADEIRAS_COMPRESSIVAS/AT.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/b36642fb34c8bc534d7b4f12aa28ce1fbf15e4c6/img/MEDIDAS_MEIAS/AT.png'), requiredMeasurements: ['AG', 'cG', 'cC', 'cB'] },
    { id: 'ATQ', name: 'ATQ', description: 'Meia-Calça Queen', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS_E_BRACADEIRAS_COMPRESSIVAS/ATQ.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/b36642fb34c8bc534d7b4f12aa28ce1fbf15e4c6/img/MEDIDAS_MEIAS/ATQ.png'), requiredMeasurements: ['AG', 'cH', 'cG', 'cC', 'cB'] },
    { id: 'ATM', name: 'ATM', description: 'Meia-Calça Gestante', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS_E_BRACADEIRAS_COMPRESSIVAS/ATM.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/b36642fb34c8bc534d7b4f12aa28ce1fbf15e4c6/img/MEDIDAS_MEIAS/AT.png'), requiredMeasurements: ['AG', 'cG', 'cC', 'cB'] },
    { id: 'AGG', name: 'AGG', description: 'Meia-Coxa com cinta', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS_E_BRACADEIRAS_COMPRESSIVAS/AGG.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/b36642fb34c8bc534d7b4f12aa28ce1fbf15e4c6/img/MEDIDAS_MEIAS/AGH.png'), requiredMeasurements: ['AG', 'cG', 'cC', 'cB'] },
    { id: 'BH', name: 'BH', description: 'Braçadeira', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS_E_BRACADEIRAS_COMPRESSIVAS/BH.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/b36642fb34c8bc534d7b4f12aa28ce1fbf15e4c6/img/MEDIDAS_MEIAS/BH.png'), requiredMeasurements: ['BH', 'cF', 'cD', 'cB'] },
    { id: 'ZH', name: 'ZH', description: 'Braçadeira c/ Polegar', category: ProductCategory.COMPRESSION_STOCKINGS, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS_E_BRACADEIRAS_COMPRESSIVAS/ZH.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEDIDAS_MEIAS/ZH.png'), requiredMeasurements: ['BH', 'cF', 'cD', 'cB'] },
    
    // ReadyWrap
    { id: 'BRACO', name: 'BRAÇO', description: 'ReadyWrap', category: ProductCategory.READY_WRAP, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/BRACO_READYWRAP.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEDIDAS_RW/MEDIDAS_BRACO.png'), requiredMeasurements: ['iBG', 'cG', 'cE', 'cB'] },
    { id: 'COXA', name: 'COXA', description: 'ReadyWrap', category: ProductCategory.READY_WRAP, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/COXA_FRENTE_READYWRAP.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEDIDAS_RW/MEDIDAS_COXA.png'), requiredMeasurements: ['iEG', 'cG', 'cE'] },
    { id: 'LUVA', name: 'LUVA', description: 'ReadyWrap', category: ProductCategory.READY_WRAP, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/LUVA_READYWRAP.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEDIDAS_RW/MEDIDAS_LUVA.png'), requiredMeasurements: ['iAB', 'cB', 'cA'] },
    { id: 'JOELHOS', name: 'JOELHO', description: 'ReadyWrap', category: ProductCategory.READY_WRAP, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/JOELHO_READYWRAP.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEDIDAS_RW/MEDIDAS_JOELHO.png'), requiredMeasurements: ['cE', 'cD'] },
    { id: 'DEDOS_DO_PE', name: 'DEDOS DO PÉ', description: 'ReadyWrap', category: ProductCategory.READY_WRAP, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/DEDOS_DO_PE_READYWRAP.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEDIDAS_RW/MEDIDAS_PE.png'), requiredMeasurements: ['cA'] },
    { id: 'PANTURRILHA_RW', name: 'PANTURRILHA', description: 'ReadyWrap', category: ProductCategory.READY_WRAP, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/PANTURRILHA_READYWRAP.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEDIDAS_RW/MEDIDAS_PANTURRILHA.png'), requiredMeasurements: ['iBD', 'cC', 'cB'] },
    { id: 'PE_CT', name: 'PÉ CT', description: 'ReadyWrap', category: ProductCategory.READY_WRAP, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/PE_CT_READYWRAP.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEDIDAS_RW/MEDIDAS_PE_CT.png'), requiredMeasurements: ['iAY', 'cA', 'cA1', 'cB'] },
    { id: 'PE_SL', name: 'PÉ SL', description: 'ReadyWrap', category: ProductCategory.READY_WRAP, image: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/PE_SL_READYWRAP.png'), diagram: getAssetPath('https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEDIDAS_RW/MEDIDAS_PE_SL.png'), requiredMeasurements: ['iAY', 'cA1', 'cB'] }
];

// ===================================================================================
// UTILITY FUNCTIONS
// ===================================================================================

const checkRange = (value: number | undefined, min: number, max: number): boolean => {
    return value !== undefined && value >= min && value <= max;
};

const findSize = (sizes: string[], measurements: { value?: number; ranges: (number[] | null)[] }[]): string | null => {
    // If no measurements are provided, we can't determine a size.
    if (measurements.every(m => m.value === undefined || m.value === null || isNaN(m.value))) {
        return null;
    }
    for (let i = 0; i < sizes.length; i++) {
        const isMatch = measurements.every(m => {
            // If this measurement wasn't provided, it's a "pass" for this check
            if (m.value === undefined || m.value === null || isNaN(m.value)) {
                return true;
            }
            const range = m.ranges[i];
            // If there's no range for this size, it's also a "pass"
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

// ===================================================================================
// SIZING LOGIC FOR EACH PRODUCT LINE
// ===================================================================================

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
    if (m.AD !== undefined && checkRange(m.AD, 37, 43)) length = "NORMAL";
    else if (m.AG !== undefined && checkRange(m.AG, 68, 80)) length = "NORMAL";
    else if (m.AG === undefined && m.AD === undefined) length = "N/A";
    else return null; // Length does not match
    
    return { productLine: isQueenModel ? 'LEGLINE QUEEN' : 'LEGLINE', size, length };
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
    if (m.AD !== undefined) {
        if(checkRange(m.AD, 35, 40)) length = "CURTA";
        else if (checkRange(m.AD, 37, 43)) length = "NORMAL";
    }
    if (m.AG !== undefined) {
        if(checkRange(m.AG, 63, 69)) length = "CURTA";
        else if(checkRange(m.AG, 68, 80)) length = "NORMAL";
    }
    if (!length) return null; // No matching length

    return { productLine: 'ULTRALINE 4000', size, length };
};

const findUltraline4000ArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[14, 17], [17, 20], [20, 23]] },
        { value: m.cD, ranges: [[22, 26], [26, 30], [30, 34]] },
        { value: m.cF, ranges: [[24, 30], [30, 36], [36, 42]] },
    ]);
    return size ? { productLine: 'ULTRALINE 4000', size } : null;
};

const findComfortlineCottonLegSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[19, 23], [23, 26], [26, 29], [29, 32], [32, 35]] },
        { value: m.cC, ranges: [[30, 38], [35, 43], [39, 47], [48, 56], [54, 62]] },
        { value: m.cD, ranges: [[28, 36], [33, 41], [37, 45], [46, 54], [52, 60]] },
    ]);
    if (!size) return null;
    let length;
    if (m.AD !== undefined) length = m.AD <= 39 ? "CURTA" : "LONGA";
    if (!length) return null;
    return { productLine: 'COMFORTLINE COTTON', size, length };
};

const findComfortlineCottonArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[14, 17], [17, 20], [20, 23]] },
        { value: m.cD, ranges: [[22, 26], [26, 30], [30, 34]] },
        { value: m.cF, ranges: [[24, 30], [30, 36], [36, 42]] },
    ]);
    if (!size) return null;
    let length;
    if (m.BH !== undefined) length = m.BH <= 58 ? "CURTA" : "LONGA";
    if (!length) return null;
    return { productLine: 'COMFORTLINE COTTON', size, length };
};

const findComfortlineLegSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[19, 23], [23, 26], [26, 29]] },
        { value: m.cC, ranges: [[30, 38], [35, 43], [39, 47]] },
        { value: m.cD, ranges: [[28, 36], [33, 41], [37, 45]] },
        { value: m.cG, ranges: [[49, 61], [54, 66], [60, 72]] },
    ]);
    if (!size) return null;
    let length;
    if (m.AD !== undefined) length = m.AD <= 39 ? "CURTA" : "LONGA";
    if (m.AG !== undefined) length = m.AG <= 72 ? "CURTA" : "LONGA";
    if (!length) return null;
    return { productLine: 'COMFORTLINE', size, length };
};

const findSupportlineSoftSize = (m: MeasurementValues): SizingResult | null => {
    if (m.SHOE_SIZE === undefined) return null;
    const SIZES = ['PP', 'P', 'M', 'G', 'XG'];
    const size = findSize(SIZES, [
        { value: m.SHOE_SIZE, ranges: [[34, 36], [37, 38], [39, 41], [42, 44], [45, 47]] },
        { value: m.cB, ranges: [[16.5, 20.5], [19, 21.5], [21.5, 24], [23, 26.5], [26.5, 32]] },
        { value: m.cC, ranges: [[26.5, 37], [28, 38], [33, 43.5], [35.5, 46], [38.5, 51.5]] },
    ]);
    return size ? { productLine: 'SUPPORTLINE SOFT', size } : null;
};

const findVenosan6000Size = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 21], [21, 25], [25, 29], [29, 33], [33, 38]] },
        { value: m.cC, ranges: [[28, 38], [30, 42], [32, 46], [34, 50], [43, 55]] },
        { value: m.cG, ranges: [[40, 62], [46, 70], [54, 78], [60, 81], null] },
    ]);
    if (!size) return null;
    let length;
    if (m.AD !== undefined && checkRange(m.AD, 37, 43)) length = "NORMAL";
    if (m.AG !== undefined && checkRange(m.AG, 68, 80)) length = "NORMAL";
    if (!length) return null;
    return { productLine: 'VENOSAN 6000', size, length };
};

const findSportactiveSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 23], [23, 26], [26, 29], [29, 32], [32, 38]] },
        { value: m.cC, ranges: [[28, 39], [33, 42], [36, 45], [39, 50], [43, 55]] },
        { value: m.cD, ranges: [[28, 38], [32, 41], [35, 44], [38, 46], [42, 52]] },
    ]);
    return size ? { productLine: 'SPORTACTIVE', size } : null;
};

const findFlatSize = (m: MeasurementValues, productLine: 'FLAT SOFT' | 'FLAT STRONG'): SizingResult | null => {
    const SIZES = ['X-PEQUENO', 'PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE', 'XXX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 20], [20, 22], [22, 24], [24, 26], [26, 28], [28, 31], [31, 35]] },
        { value: m.cC, ranges: [[29.5, 34.5], [32.5, 37.5], [35.5, 40.5], [38.5, 43.5], [41.5, 46.5], [42.5, 47.5], [45, 51]] },
        { value: m.cD, ranges: [[27.5, 32.5], [30.5, 35.5], [33.5, 38.5], [36.5, 41.5], [39.5, 44.5], [40.5, 45.5], [43, 49]] },
    ]);
    if (!size) return null;
    let length;
    if (m.AD !== undefined) {
        if(checkRange(m.AD, 34, 40)) length = "CURTA";
        else if (checkRange(m.AD, 40, 46)) length = "LONGA";
    }
    if (!length) return null;
    return { productLine, size, length };
};

const findUlcercomfortSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[19, 23], [23, 26], [26, 29], [29, 32]] },
        { value: m.cC, ranges: [[30, 38], [35, 43], [39, 47], [48, 56]] },
        { value: m.cD, ranges: [[28, 36], [33, 41], [37, 45], [46, 54]] },
    ]);
    if (!size) return null;
    let length;
    if (m.AD !== undefined) length = m.AD <= 39 ? "CURTA" : "LONGA";
    if (!length) return null;
    return { productLine: 'ULCERCOMFORT', size, length };
};

const findUlceraidSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 23], [23, 26], [26, 29], [29, 32]] },
        { value: m.cC, ranges: [[28, 39], [33, 42], [36, 45], [39, 50]] },
        { value: m.cD, ranges: [[28, 38], [32, 41], [35, 44], [38, 46]] },
    ]);
    if (!size) return null;
    if (m.AD && !checkRange(m.AD, 37, 43)) return null;
    return { productLine: 'ULCERAID', size };
};

const findAesSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const sizeData = [
        { size: 'PEQUENO', cB: [18, 20], cC: [28, 32], cG: [45, 64], adLimit: 41, agLimit: 0 },
        { size: 'MÉDIO', cB: [20, 22], cC: [32, 37], cG: [53, 71], adLimit: 43, agLimit: 0 },
        { size: 'GRANDE', cB: [23, 25], cC: [37, 42], cG: [61, 80], adLimit: 45, agLimit: 0 },
        { size: 'X-GRANDE', cB: [25, 27], cC: [42, 47], cG: [70, 84], adLimit: 45, agLimit: 0 },
        { size: 'XX-GRANDE', cB: [28, 30], cC: [47, 52], cG: [79, 88], adLimit: 45, agLimit: [74, 79] },
    ];

    for (const s of sizeData) {
        const cB_OK = checkRange(m.cB, s.cB[0], s.cB[1]);
        const cC_OK = checkRange(m.cC, s.cC[0], s.cC[1]);
        const cG_OK = m.cG === undefined || checkRange(m.cG, s.cG[0], s.cG[1]);
        
        if (cB_OK && cC_OK && cG_OK) {
            const ad_OK = m.AD === undefined || (m.AD <= s.adLimit);
            const ag_OK = m.AG === undefined || (s.agLimit !== 0 && checkRange(m.AG, s.agLimit[0], s.agLimit[1]));
            if (ad_OK || ag_OK) {
                 return { productLine: 'AES', size: s.size };
            }
        }
    }
    return null;
};

// --- READYWRAP SIZING FUNCTIONS ---
const findReadyWrapDedosPeSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['P', 'M', 'G', 'XG', 'XXG'];
    const size = findSize(SIZES, [{ value: m.cA, ranges: [[18, 20.4], [20.5, 23.5], [23.6, 26], [26.1, 28.5], [28.6, 31]] }]);
    return size ? { productLine: 'ReadyWrap DEDOS DO PÉ', size } : null;
};

const findReadyWrapPeCtSize = (m: MeasurementValues): SizingResult | null => {
    if (m.iAY === undefined) return null;
    if (m.iAY >= 16 && m.iAY <= 19) {
        const SIZES = ['P', 'M', 'G', 'XG', 'XXG'];
        const size = findSize(SIZES, [
            { value: m.cA, ranges: [[18, 20.4], [20.5, 23.5], [23.6, 26], [26.1, 28.5], [28.6, 31]] },
            { value: m.cA1, ranges: [[20, 25], [24, 29], [28, 33], [32, 37], [36, 41]] },
            { value: m.cB, ranges: [[18, 23], [20, 28], [25, 33], [30, 38], [35, 43]] },
        ]);
        return size ? { productLine: 'ReadyWrap PÉ CT', size, length: '16-19cm' } : null;
    } else if (m.iAY >= 19 && m.iAY <= 22) {
        const SIZES = ['P', 'M', 'G', 'XG', 'XXG'];
        const size = findSize(SIZES, [
            { value: m.cA, ranges: [[18, 20.4], [20.5, 23.5], [23.6, 26], [26.1, 28.5], [28.6, 31]] },
            { value: m.cA1, ranges: [[20, 25], [24, 29], [28, 33], [32, 37], [36, 41]] },
            { value: m.cB, ranges: [[18, 23], [20, 28], [25, 33], [30, 38], [35, 43]] },
        ]);
        return size ? { productLine: 'ReadyWrap PÉ CT', size, length: '19-22cm' } : null;
    }
    return null;
};

const findReadyWrapPeSlSize = (m: MeasurementValues): SizingResult | null => {
    if (m.iAY === undefined) return null;
    if (m.iAY >= 16 && m.iAY <= 19) {
        const SIZES = ['P', 'M', 'G', 'XG'];
        const size = findSize(SIZES, [
            { value: m.cA1, ranges: [[21, 24], [25, 28], [29, 32], [33, 36]] },
            { value: m.cB, ranges: [[18, 23], [20, 28], [25, 33], [30, 38]] },
        ]);
        return size ? { productLine: 'ReadyWrap PÉ SL', size, length: '16-19cm' } : null;
    } else if (m.iAY >= 19 && m.iAY <= 22) {
        const SIZES = ['P', 'M', 'G', 'XG'];
        const size = findSize(SIZES, [
            { value: m.cA1, ranges: [[21, 24], [25, 28], [29, 32], [33, 36]] },
            { value: m.cB, ranges: [[18, 23], [20, 28], [25, 33], [30, 38]] },
        ]);
        return size ? { productLine: 'ReadyWrap PÉ SL', size, length: '19-22cm' } : null;
    }
    return null;
};

const findReadyWrapPanturrilhaSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['P', 'M', 'G', 'XG', 'XXG'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 23], [20, 28], [25, 33], [30, 38], [35, 43]] },
        { value: m.cC, ranges: [[28, 38], [33, 43], [38, 48], [43, 58], [53, 68]] },
    ]);
    if (!size || m.iBD === undefined) return null;

    let length = m.iBD <= 30 ? 'até 30cm' : m.iBD <= 35 ? 'até 35cm' : null;
    if (!length) return null;

    return { productLine: 'ReadyWrap PANTURRILHA', size, length };
};

const findReadyWrapJoelhoSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['P', 'M', 'G', 'XG', 'XXG'];
    const size = findSize(SIZES, [
        { value: m.cD, ranges: [[28, 38], [33, 43], [38, 48], [43, 58], [53, 68]] },
        { value: m.cE, ranges: [[38, 48], [45, 58], [52, 68], [59, 78], [66, 88]] },
    ]);
    return size ? { productLine: 'ReadyWrap JOELHO', size } : null;
};

const findReadyWrapCoxaSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['P', 'M', 'G', 'XG', 'XXG'];
    const size = findSize(SIZES, [
        { value: m.cE, ranges: [[38, 48], [45, 58], [52, 68], [59, 78], [66, 88]] },
        { value: m.cG, ranges: [[48, 63], [58, 73], [68, 83], [78, 93], [88, 103]] },
    ]);
    if (!size || m.iEG === undefined) return null;

    let length = m.iEG <= 25 ? 'até 25cm' : m.iEG <= 30 ? 'até 30cm' : null;
    if (!length) return null;

    return { productLine: 'ReadyWrap COXA', size, length };
};

const findReadyWrapBracoSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['P', 'M', 'G', 'XG'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[13.5, 17], [15.5, 20], [17.5, 23], [19.5, 26]] },
        { value: m.cE, ranges: [[19, 26], [24, 33], [29, 40], [30, 43]] },
        { value: m.cG, ranges: [[22, 29], [26, 36], [31, 43], [36, 50]] },
    ]);
     if (!size || m.iBG === undefined) return null;

    let length = m.iBG <= 43 ? 'até 43cm' : m.iBG <= 46 ? 'até 46cm' : m.iBG <= 49.5 ? 'até 49.5cm' : null;
    if (!length) return null;
    
    // Remap length for 'G' and 'XG'
    if (size === 'G' && m.iBG > 49) return null;
    if (size === 'XG' && m.iBG > 49.5) return null;


    return { productLine: 'ReadyWrap BRAÇO', size, length };
};

const findReadyWrapLuvaSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['P', 'M', 'G', 'XG'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[13.5, 17], [15.5, 20], [17.5, 23], [19.5, 26]] },
        { value: m.cA, ranges: [[18, 20], [20, 22], [22, 24], [24, 26]] },
    ]);
    if (!size || m.iAB === undefined) return null;

    let length;
    if (checkRange(m.iAB, 0, 12.5)) length = 'até 12.5cm';
    else if (checkRange(m.iAB, 0, 13.5)) length = 'até 13.5cm';
    else if (checkRange(m.iAB, 0, 14.5)) length = 'até 14.5cm';
    else if (checkRange(m.iAB, 0, 15.5)) length = 'até 15.5cm';
    
    // Check if length is compatible with size
    if (size === 'P' && m.iAB > 12.5) return null;
    if (size === 'M' && m.iAB > 13.5) return null;
    if (size === 'G' && m.iAB > 14.5) return null;
    if (size === 'XG' && m.iAB > 15.5) return null;
    
    return size && length ? { productLine: 'ReadyWrap LUVA', size, length } : null;
};


// ===================================================================================
// MASTER SIZING DISPATCHER
// ===================================================================================

export const findSizeForModel = (model: ProductModel, measurements: MeasurementValues): SizingResult[] => {
    const results: SizingResult[] = [];
    const { id, category } = model;

    if (category === ProductCategory.READY_WRAP) {
        const readyWrapSizers: { [key: string]: (m: MeasurementValues) => SizingResult | null } = {
            'BRACO': findReadyWrapBracoSize,
            'COXA': findReadyWrapCoxaSize,
            'LUVA': findReadyWrapLuvaSize,
            'JOELHOS': findReadyWrapJoelhoSize,
            'DEDOS_DO_PE': findReadyWrapDedosPeSize,
            'PANTURRILHA_RW': findReadyWrapPanturrilhaSize,
            'PE_CT': findReadyWrapPeCtSize,
            'PE_SL': findReadyWrapPeSlSize,
        };
        const sizer = readyWrapSizers[id];
        if (sizer) {
            const result = sizer(measurements);
            if (result) results.push(result);
        }
    } else { // Compression Stockings
        const sizerMap: { [key: string]: ((m: MeasurementValues) => SizingResult | null)[] } = {
            'AD': [
                findLeglineSize, findUltraline4000LegSize, findVenosan6000Size,
                findComfortlineCottonLegSize, findComfortlineLegSize, findSupportlineSoftSize,
                findAesSize, findUlceraidSize, findUlcercomfortSize,
                (m) => findFlatSize(m, 'FLAT SOFT'), (m) => findFlatSize(m, 'FLAT STRONG')
            ],
            'AGH': [
                findLeglineSize, findUltraline4000LegSize, findVenosan6000Size,
                findComfortlineLegSize, findAesSize
            ],
            'AGG': [
                findLeglineSize, findUltraline4000LegSize, findVenosan6000Size,
                findComfortlineLegSize, findAesSize
            ],
            'AT': [
                findLeglineSize, findUltraline4000LegSize, findVenosan6000Size, findComfortlineLegSize
            ],
             'ATM': [
                findLeglineSize, findUltraline4000LegSize, findVenosan6000Size, findComfortlineLegSize
            ],
            'ATQ': [
                findLeglineSize // The function itself handles the "Queen" logic
            ],
            'BD': [
                findSportactiveSize
            ],
            'BH': [
                findUltraline4000ArmSize, findComfortlineCottonArmSize
            ],
             'ZH': [
                findUltraline4000ArmSize, findComfortlineCottonArmSize
            ]
        };
        
        const sizersForModel = sizerMap[id] || [];
        sizersForModel.forEach(sizer => {
            const result = sizer(measurements);
            if (result) {
                results.push(result);
            }
        });
    }

    // Filter out duplicates
    const uniqueResults = Array.from(new Map(results.map(item => [`${item.productLine}-${item.size}-${item.length ?? ''}`, item])).values());
    
    return uniqueResults;
};