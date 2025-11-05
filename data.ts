<<<<<<< HEAD
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
    { id: 'BD', name: 'BD', description: 'Polaina', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/BD.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/ee50db7cdb9efadca8cb62d04087280b04571a1c/img/READYWRAP%20CAIXAS/BD_PANTURRILHA.svg', requiredMeasurements: ['AD', 'cD', 'cC', 'cB'] },
    { id: 'AD', name: 'AD', description: 'Panturrilha', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/AD.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/ee50db7cdb9efadca8cb62d04087280b04571a1c/img/READYWRAP%20CAIXAS/AD_PANTURRILHA.svg', requiredMeasurements: ['AD', 'cD', 'cC', 'cB'] },
    { id: 'AGH', name: 'AGH', description: 'Meia-Coxa com silicone', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://github.com/Adiles-junior/Calculadora_Compressao/blob/main/img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/AGH.png?raw=true', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/AGH.png', requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'AT', name: 'AT', description: 'Meia-Calça', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/AT.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/AT.png', requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'ATQ', name: 'ATQ', description: 'Meia-Calça Queen', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/ATQ.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/ATQ.png', requiredMeasurements: ['AG', 'cH', 'cG', 'cC', 'cB'] },
    { id: 'ATM', name: 'ATM', description: 'Meia-Calça gestante', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/ATM.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/ATM.png', requiredMeasurements: ['AG', 'cH', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'AGG', name: 'AGG', description: 'Meia-Calça com cinta', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/AGG.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/AGG.png', requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'BH', name: 'BH', description: 'Braçadeira até o punho', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/BH.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/BH.png', requiredMeasurements: ['BH', 'cF', 'cD', 'cB'] },
    { id: 'ZH', name: 'ZH', description: 'Braçadeira até o metacarpo com polegar', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/MEIAS%20E%20BRA%C3%87ADEIRAS%20COMPRESSIVAS/INDIVIDUAL/ZH.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP%20CAIXAS/ZH.png', requiredMeasurements: ['ZH', 'cF', 'cD', 'cB'] },
    
    // ReadyWrap
    { id: 'BRACO', name: 'BRAÇO', description: '', category: ProductCategory.READY_WRAP, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/BRA%C3%87O%20-%20READYWRAP%C2%AE.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/MEDIDAS_BRACO.png', requiredMeasurements: ['BG', 'cG', 'cE', 'cB'] },
    { id: 'COXA', name: 'COXA', description: '', category: ProductCategory.READY_WRAP, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/COXA%20FRENTE%20-%20READYWRAP%C2%AE.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/MEDIDAS_COXA.png', requiredMeasurements: ['EG', 'cG', 'cE'] },
    { id: 'LUVA', name: 'LUVA', description: '', category: ProductCategory.READY_WRAP, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/LUVA%20-%20READYWRAP%C2%AE.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/MEDIDAS_LUVA.png', requiredMeasurements: ['AB', 'cB', 'cA'] },
    { id: 'JOELHOS', name: 'JOELHO', description: '', category: ProductCategory.READY_WRAP, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/JOELHO%20-%20READYWRAP%C2%AE.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/MEDIDAS_JOELHO.png', requiredMeasurements: ['cE', 'cD'] },
    { id: 'DEDOS_DO_PE', name: 'DEDOS DO PÉ', description: '', category: ProductCategory.READY_WRAP, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/DEDOS%20DO%20P%C3%89%20-%20READYWRAP%C2%AE.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/MEDIDAS_PE.png', requiredMeasurements: ['cA'] },
    { id: 'PANTURRILHA_RW', name: 'PANTURRILHA', description: '', category: ProductCategory.READY_WRAP, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/PANTURRILHA%20-%20READYWRAP%C2%AE.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/MEDIDAS_PANTURRILHA.png', requiredMeasurements: ['BD', 'cC', 'cB'] },
    { id: 'PÉ_CT', name: 'PÉ CT', description: '', category: ProductCategory.READY_WRAP, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/P%C3%89%20CT%20-%20READYWRAP%C2%AE.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/MEDIDAS_PE_CT.png', requiredMeasurements: ['AY', 'cA', 'cA1', 'cB'] },
    { id: 'PÉ_SL', name: 'PÉ SL', description: '', category: ProductCategory.READY_WRAP, image: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/P%C3%89%20SL%20-%20READYWRAP%C2%AE.png', diagram: 'https://raw.githubusercontent.com/Adiles-junior/Calculadora_Compressao/refs/heads/main/img/READYWRAP/INDIVIDUAL/MEDIDAS_PE_SL.png', requiredMeasurements: ['AY', 'cA1', 'cB'] }
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

// ===================================================================================
// SIZING LOGIC FOR EACH PRODUCT LINE (REFACTORED & SPECIALIZED)
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
    const SIZES = ['X-PEQUENO', 'PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE', 'XXX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 20], [20, 22], [22, 24], [24, 26], [26, 28], [28, 31], [31, 35]] },
        { value: m.cC, ranges: [[29.5, 34.5], [32.5, 37.5], [35.5, 40.5], [38.5, 43.5], [41.5, 46.5], [42.5, 47.5], [45, 51]] },
        { value: m.cD, ranges: [[27.5, 32.5], [30.5, 35.5], [33.5, 38.5], [36.5, 41.5], [39.5, 44.5], [40.5, 45.5], [43, 49]] },
    ]);
    if (!size) return [];
    let length;
    if (m.AD) length = checkRange(m.AD, 34, 40) ? "CURTA" : checkRange(m.AD, 40, 46) ? "LONGA" : undefined;
    return [
        { productLine: 'FLAT SOFT', size, length },
        { productLine: 'FLAT STRONG', size, length }
    ];
};

const findUlcerKitSize = (m: MeasurementValues): SizingResult[] => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
    const results: SizingResult[] = [];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 23], [23, 26], [26, 29], [29, 32]] },
        { value: m.cC, ranges: [[28, 39], [33, 42], [36, 45], [39, 50]] },
        { value: m.cD, ranges: [[28, 38], [32, 41], [35, 44], [38, 46]] },
    ]);
    if(!size) return [];
    if (m.SHOE_SIZE) {
        const length = m.SHOE_SIZE <= 39 ? "CURTA" : "LONGA";
        results.push({ productLine: 'ULCERCOMFORT', size, length });
    }
    if (m.AD && checkRange(m.AD, 37, 43)) {
         results.push({ productLine: 'ULCERAID', size, length: 'NORMAL' });
    }
    return results;
};

const findAesSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 20], [20, 22], [23, 25], [25, 27], [28, 30]] },
        { value: m.cC, ranges: [[28, 32], [32, 37], [37, 42], [42, 47], [47, 52]] },
        { value: m.cG, ranges: [[45, 64], [53, 71], [61, 80], [70, 84], [79, 88]] },
    ]);
    if(!size) return null;
    let length;
    if (m.AD && m.AD <= 45) length = `NORMAL (até ${m.AD <= 41 ? '41' : m.AD <= 43 ? '43' : '45'}cm)`;
    if (m.AG && checkRange(m.AG, 74, 79)) length = "NORMAL (74-79cm)";
    return { productLine: 'AES', size, length };
};

// --- ARM SIZING FUNCTIONS ---

const findUltraline4000ArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES_ARM = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES_ARM, [
        { value: m.cB, ranges: [[14, 17], [17, 20], [20, 23]] },
        { value: m.cD, ranges: [[22, 26], [26, 30], [30, 34]] },
        { value: m.cF, ranges: [[24, 30], [30, 36], [36, 42]] },
    ]);
    return size ? { productLine: 'ULTRALINE 4000 BRAÇADEIRA', size } : null;
};

const findComfortlineCottonArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES_ARM = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES_ARM, [
        { value: m.cB, ranges: [[14, 17], [17, 20], [20, 23]] },
        { value: m.cD, ranges: [[22, 26], [26, 30], [30, 34]] },
        { value: m.cF, ranges: [[24, 30], [30, 36], [36, 42]] },
    ]);
    if (!size) return null;
    let length;
    if (m.BH !== undefined) length = m.BH <= 58 ? "CURTA" : "LONGA";
    return { productLine: 'COMFORTLINE COTTON BRAÇADEIRA', size, length };
};

const findComfortlineArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES_ARM = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES_ARM, [
        { value: m.cB, ranges: [[14, 17], [17, 20], [20, 23]] },
        { value: m.cD, ranges: [[22, 26], [26, 30], [30, 34]] },
        { value: m.cF, ranges: [[24, 30], [30, 36], [36, 42]] },
    ]);
    if (!size) return null;
    let length;
    if (m.BH !== undefined) length = m.BH <= 58 ? "CURTA" : "LONGA";
    return { productLine: 'COMFORTLINE BRAÇADEIRA', size, length };
};

// --- READYWRAP SIZING FUNCTION ---

const findReadyWrapSize = (modelId: string, m: MeasurementValues): SizingResult | null => {
    let size: string | null = null;
    const SIZES_5 = ['P', 'M', 'G', 'XG', 'XXG'];
    switch(modelId) {
        case 'DEDOS_DO_PE':
            size = findSize(SIZES_5, [{ value: m.cA, ranges: [[18, 20.4], [20.5, 23.5], [23.6, 26], [26.1, 28.5], [28.6, 31]] }]);
            break;
        case 'PANTURRILHA_RW':
             size = findSize(SIZES_5, [
                { value: m.cB, ranges: [[18, 23], [20, 28], [25, 33], [30, 38], [35, 43]] },
                { value: m.cC, ranges: [[28, 38], [33, 43], [38, 48], [43, 58], [53, 68]] },
             ]);
            break;
        case 'JOELHOS':
             size = findSize(SIZES_5, [
                { value: m.cD, ranges: [[28, 38], [33, 43], [38, 48], [43, 58], [53, 68]] },
                { value: m.cE, ranges: [[38, 48], [45, 58], [52, 68], [59, 78], [66, 88]] },
             ]);
            break;
        case 'COXA':
            size = findSize(SIZES_5, [
                { value: m.cE, ranges: [[38, 48], [45, 58], [52, 68], [59, 78], [66, 88]] },
                { value: m.cG, ranges: [[48, 63], [58, 73], [68, 83], [78, 93], [88, 103]] },
            ]);
            break;
        case 'BRACO':
            const SIZES_4_ARM = ['P', 'M', 'G', 'XG'];
            size = findSize(SIZES_4_ARM, [
                { value: m.cB, ranges: [[13.5, 17], [15.5, 20], [17.5, 23], [19.5, 26]] },
                { value: m.cE, ranges: [[19, 26], [24, 33], [29, 40], [30, 43]] },
                { value: m.cG, ranges: [[22, 29], [26, 36], [31, 43], [36, 50]] },
            ]);
            break;
         case 'LUVA':
            const SIZES_4_HAND = ['P', 'M', 'G', 'XG'];
            size = findSize(SIZES_4_HAND, [
                { value: m.cA, ranges: [[18, 20], [20, 22], [22, 24], [24, 26]] },
                { value: m.cB, ranges: [[13.5, 17], [15.5, 20], [17.5, 23], [19.5, 26]] },
            ]);
            break;
        case 'PE_CT':
        case 'PE_SL':
             size = findSize(SIZES_5, [
                { value: m.cB, ranges: [[18, 23], [20, 28], [25, 33], [30, 38], [35, 43]] },
                { value: m.cA1, ranges: [[20, 25], [24, 29], [28, 33], [32, 37], [36, 41]] },
             ]);
             break;
    }
    return size ? { productLine: `ReadyWrap ${modelId.replace('_RW', '')}`, size } : null;
};

// ===================================================================================
// MASTER SIZING DISPATCHER
// ===================================================================================

const sizingFunctionMap: { [key: string]: ((m: MeasurementValues) => (SizingResult | null) | SizingResult[])[] } = {
    'BD': [findSportactiveSize],
    'AD': [
        findLeglineSize, 
        findUltraline4000LegSize, 
        findVenosan6000Size, 
        findComfortlineLegSize, 
        findComfortlineCottonLegSize,
        findSupportlineSoftSize,
        findAesSize,
        findFlatSize,
        findUlcerKitSize
    ],
    'AGH': [findLeglineSize, findUltraline4000LegSize, findVenosan6000Size, findComfortlineLegSize],
    'AT': [findLeglineSize, findUltraline4000LegSize, findVenosan6000Size, findComfortlineLegSize],
    'ATQ': [findLeglineSize],
    'ATM': [findLeglineSize, findUltraline4000LegSize],
    'AGG': [findUltraline4000LegSize, findComfortlineLegSize],
    'BH': [findUltraline4000ArmSize, findComfortlineArmSize, findComfortlineCottonArmSize],
    'ZH': [findUltraline4000ArmSize, findComfortlineArmSize, findComfortlineCottonArmSize],
};

export const findSizeForModel = (modelId: string, measurements: MeasurementValues): SizingResult[] => {
    const model = PRODUCTS.find(p => p.id === modelId);
    if (!model) return [];
    
    if (model.category === ProductCategory.READY_WRAP) {
        const result = findReadyWrapSize(model.id, measurements);
        return result ? [result] : [];
    }

    const functionsToRun = sizingFunctionMap[modelId];
    if (!functionsToRun) {
        return [];
    }

    const results: (SizingResult | null | SizingResult[])[] = [];
    functionsToRun.forEach(func => {
        results.push(func(measurements));
    });

    const flattenedResults = results.flat().filter((r): r is SizingResult => r !== null);

    const uniqueResults = flattenedResults.filter((result, index, self) =>
        index === self.findIndex((r) => (
            r.productLine === result.productLine && 
            r.size === result.size && 
            r.length === result.length
        ))
    );

    return uniqueResults;
};
=======
import { ProductCategory, ProductModel, Measurement, MeasurementValues, SizingResult } from './types';

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
    { id: 'BD', name: 'BD', description: 'Polaina', category: ProductCategory.COMPRESSION_STOCKINGS, image: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/BD.png', diagram: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['AD', 'cD', 'cC', 'cB'] },
    { id: 'AD', name: 'AD', description: 'Panturrilha', category: ProductCategory.COMPRESSION_STOCKINGS, image: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/AD.png', diagram: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['AD', 'cD', 'cC', 'cB'] },
    { id: 'AGH', name: 'AGH', description: 'Meia-Coxa com silicone', category: ProductCategory.COMPRESSION_STOCKINGS, image: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/AGH.png', diagram: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'AT', name: 'AT', description: 'Meia-Calça', category: ProductCategory.COMPRESSION_STOCKINGS, image: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/AT.png', diagram: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'ATQ', name: 'ATQ', description: 'Meia-Calça Queen', category: ProductCategory.COMPRESSION_STOCKINGS, image: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/ATQ.png', diagram: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['AG', 'cH', 'cG', 'cC', 'cB'] },
    { id: 'ATM', name: 'ATM', description: 'Meia-Calça gestante', category: ProductCategory.COMPRESSION_STOCKINGS, image: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/ATM.png', diagram: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['AG', 'cH', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'AGG', name: 'AGG', description: 'Meia-Calça com cinta', category: ProductCategory.COMPRESSION_STOCKINGS, image: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/AGG.png', diagram: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'BH', name: 'BH', description: 'Braçadeira até o punho', category: ProductCategory.COMPRESSION_STOCKINGS, image: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/BH.png', diagram: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - SUPERIOR.png', requiredMeasurements: ['BH', 'cF', 'cD', 'cB'] },
    { id: 'ZH', name: 'ZH', description: 'Braçadeira até o metacarpo com polegar', category: ProductCategory.COMPRESSION_STOCKINGS, image: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/ZH.png', diagram: '/img/MEIAS E BRAÇADEIRAS COMPRESSIVAS/INDIVIDUAL/MEDIÇÃO - SUPERIOR.png', requiredMeasurements: ['ZH', 'cF', 'cD', 'cB'] },
    
    // ReadyWrap
    { id: 'BRACO', name: 'BRAÇO', description: '', category: ProductCategory.READY_WRAP, image: '/img/READYWRAP/INDIVIDUAL/BRAÇO - READYWRAP®.png', diagram: '/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - SUPERIOR.png', requiredMeasurements: ['BG', 'cG', 'cE', 'cB'] },
    { id: 'COXA', name: 'COXA', description: '', category: ProductCategory.READY_WRAP, image: '/img/READYWRAP/INDIVIDUAL/COXA FRENTE - READYWRAP®.png', diagram: '/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['EG', 'cG', 'cE'] },
    { id: 'LUVA', name: 'LUVA', description: '', category: ProductCategory.READY_WRAP, image: '/img/READYWRAP/INDIVIDUAL/LUVA - READYWRAP®.png', diagram: '/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - SUPERIOR.png', requiredMeasurements: ['AB', 'cB', 'cA'] },
    { id: 'JOELHOS', name: 'JOELHO', description: '', category: ProductCategory.READY_WRAP, image: '/img/READYWRAP/INDIVIDUAL/JOELHO - READYWRAP®.png', diagram: '/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['cE', 'cD'] },
    { id: 'DEDOS_DO_PE', name: 'DEDOS DO PÉ', description: '', category: ProductCategory.READY_WRAP, image: '/img/READYWRAP/INDIVIDUAL/DEDOS DO PÉ - READYWRAP®.png', diagram: '/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['cA'] },
    { id: 'PANTURRILHA_RW', name: 'PANTURRILHA', description: '', category: ProductCategory.READY_WRAP, image: '/img/READYWRAP/INDIVIDUAL/PANTURRILHA - READYWRAP®.png', diagram: '/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['BD', 'cC', 'cB'] },
    { id: 'PE_CT', name: 'PÉ CT', description: '', category: ProductCategory.READY_WRAP, image: '/img/READYWRAP/INDIVIDUAL/PÉ CT - READYWRAP®.png', diagram: '/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['AY', 'cA', 'cA1', 'cB'] },
    { id: 'PE_SL', name: 'PÉ SL', description: '', category: ProductCategory.READY_WRAP, image: '/img/READYWRAP/INDIVIDUAL/PÉ SL - READYWRAP®.png', diagram: '/img/READYWRAP/INDIVIDUAL/MEDIÇÃO - INFERIOR.png', requiredMeasurements: ['AY', 'cA1', 'cB'] },
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

// ===================================================================================
// SIZING LOGIC FOR EACH PRODUCT LINE (REFACTORED & SPECIALIZED)
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
    const SIZES = ['X-PEQUENO', 'PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE', 'XXX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 20], [20, 22], [22, 24], [24, 26], [26, 28], [28, 31], [31, 35]] },
        { value: m.cC, ranges: [[29.5, 34.5], [32.5, 37.5], [35.5, 40.5], [38.5, 43.5], [41.5, 46.5], [42.5, 47.5], [45, 51]] },
        { value: m.cD, ranges: [[27.5, 32.5], [30.5, 35.5], [33.5, 38.5], [36.5, 41.5], [39.5, 44.5], [40.5, 45.5], [43, 49]] },
    ]);
    if (!size) return [];
    let length;
    if (m.AD) length = checkRange(m.AD, 34, 40) ? "CURTA" : checkRange(m.AD, 40, 46) ? "LONGA" : undefined;
    return [
        { productLine: 'FLAT SOFT', size, length },
        { productLine: 'FLAT STRONG', size, length }
    ];
};

const findUlcerKitSize = (m: MeasurementValues): SizingResult[] => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE'];
    const results: SizingResult[] = [];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 23], [23, 26], [26, 29], [29, 32]] },
        { value: m.cC, ranges: [[28, 39], [33, 42], [36, 45], [39, 50]] },
        { value: m.cD, ranges: [[28, 38], [32, 41], [35, 44], [38, 46]] },
    ]);
    if(!size) return [];
    if (m.SHOE_SIZE) {
        const length = m.SHOE_SIZE <= 39 ? "CURTA" : "LONGA";
        results.push({ productLine: 'ULCERCOMFORT', size, length });
    }
    if (m.AD && checkRange(m.AD, 37, 43)) {
         results.push({ productLine: 'ULCERAID', size, length: 'NORMAL' });
    }
    return results;
};

const findAesSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    const size = findSize(SIZES, [
        { value: m.cB, ranges: [[18, 20], [20, 22], [23, 25], [25, 27], [28, 30]] },
        { value: m.cC, ranges: [[28, 32], [32, 37], [37, 42], [42, 47], [47, 52]] },
        { value: m.cG, ranges: [[45, 64], [53, 71], [61, 80], [70, 84], [79, 88]] },
    ]);
    if(!size) return null;
    let length;
    if (m.AD && m.AD <= 45) length = `NORMAL (até ${m.AD <= 41 ? '41' : m.AD <= 43 ? '43' : '45'}cm)`;
    if (m.AG && checkRange(m.AG, 74, 79)) length = "NORMAL (74-79cm)";
    return { productLine: 'AES', size, length };
};

// --- ARM SIZING FUNCTIONS ---

const findUltraline4000ArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES_ARM = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES_ARM, [
        { value: m.cB, ranges: [[14, 17], [17, 20], [20, 23]] },
        { value: m.cD, ranges: [[22, 26], [26, 30], [30, 34]] },
        { value: m.cF, ranges: [[24, 30], [30, 36], [36, 42]] },
    ]);
    return size ? { productLine: 'ULTRALINE 4000 BRAÇADEIRA', size } : null;
};

const findComfortlineCottonArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES_ARM = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES_ARM, [
        { value: m.cB, ranges: [[14, 17], [17, 20], [20, 23]] },
        { value: m.cD, ranges: [[22, 26], [26, 30], [30, 34]] },
        { value: m.cF, ranges: [[24, 30], [30, 36], [36, 42]] },
    ]);
    if (!size) return null;
    let length;
    if (m.BH !== undefined) length = m.BH <= 58 ? "CURTA" : "LONGA";
    return { productLine: 'COMFORTLINE COTTON BRAÇADEIRA', size, length };
};

const findComfortlineArmSize = (m: MeasurementValues): SizingResult | null => {
    const SIZES_ARM = ['PEQUENO', 'MÉDIO', 'GRANDE'];
    const size = findSize(SIZES_ARM, [
        { value: m.cB, ranges: [[14, 17], [17, 20], [20, 23]] },
        { value: m.cD, ranges: [[22, 26], [26, 30], [30, 34]] },
        { value: m.cF, ranges: [[24, 30], [30, 36], [36, 42]] },
    ]);
    if (!size) return null;
    let length;
    if (m.BH !== undefined) length = m.BH <= 58 ? "CURTA" : "LONGA";
    return { productLine: 'COMFORTLINE BRAÇADEIRA', size, length };
};

// --- READYWRAP SIZING FUNCTION ---

const findReadyWrapSize = (modelId: string, m: MeasurementValues): SizingResult | null => {
    let size: string | null = null;
    const SIZES_5 = ['P', 'M', 'G', 'XG', 'XXG'];
    switch(modelId) {
        case 'DEDOS_DO_PE':
            size = findSize(SIZES_5, [{ value: m.cA, ranges: [[18, 20.4], [20.5, 23.5], [23.6, 26], [26.1, 28.5], [28.6, 31]] }]);
            break;
        case 'PANTURRILHA_RW':
             size = findSize(SIZES_5, [
                { value: m.cB, ranges: [[18, 23], [20, 28], [25, 33], [30, 38], [35, 43]] },
                { value: m.cC, ranges: [[28, 38], [33, 43], [38, 48], [43, 58], [53, 68]] },
             ]);
            break;
        case 'JOELHOS':
             size = findSize(SIZES_5, [
                { value: m.cD, ranges: [[28, 38], [33, 43], [38, 48], [43, 58], [53, 68]] },
                { value: m.cE, ranges: [[38, 48], [45, 58], [52, 68], [59, 78], [66, 88]] },
             ]);
            break;
        case 'COXA':
            size = findSize(SIZES_5, [
                { value: m.cE, ranges: [[38, 48], [45, 58], [52, 68], [59, 78], [66, 88]] },
                { value: m.cG, ranges: [[48, 63], [58, 73], [68, 83], [78, 93], [88, 103]] },
            ]);
            break;
        case 'BRACO':
            const SIZES_4_ARM = ['P', 'M', 'G', 'XG'];
            size = findSize(SIZES_4_ARM, [
                { value: m.cB, ranges: [[13.5, 17], [15.5, 20], [17.5, 23], [19.5, 26]] },
                { value: m.cE, ranges: [[19, 26], [24, 33], [29, 40], [30, 43]] },
                { value: m.cG, ranges: [[22, 29], [26, 36], [31, 43], [36, 50]] },
            ]);
            break;
         case 'LUVA':
            const SIZES_4_HAND = ['P', 'M', 'G', 'XG'];
            size = findSize(SIZES_4_HAND, [
                { value: m.cA, ranges: [[18, 20], [20, 22], [22, 24], [24, 26]] },
                { value: m.cB, ranges: [[13.5, 17], [15.5, 20], [17.5, 23], [19.5, 26]] },
            ]);
            break;
        case 'PE_CT':
        case 'PE_SL':
             size = findSize(SIZES_5, [
                { value: m.cB, ranges: [[18, 23], [20, 28], [25, 33], [30, 38], [35, 43]] },
                { value: m.cA1, ranges: [[20, 25], [24, 29], [28, 33], [32, 37], [36, 41]] },
             ]);
             break;
    }
    return size ? { productLine: `ReadyWrap ${modelId.replace('_RW', '')}`, size } : null;
};

// ===================================================================================
// MASTER SIZING DISPATCHER
// ===================================================================================

const sizingFunctionMap: { [key: string]: ((m: MeasurementValues) => (SizingResult | null) | SizingResult[])[] } = {
    'BD': [findSportactiveSize],
    'AD': [
        findLeglineSize, 
        findUltraline4000LegSize, 
        findVenosan6000Size, 
        findComfortlineLegSize, 
        findComfortlineCottonLegSize,
        findSupportlineSoftSize,
        findAesSize,
        findFlatSize,
        findUlcerKitSize
    ],
    'AGH': [findLeglineSize, findUltraline4000LegSize, findVenosan6000Size, findComfortlineLegSize],
    'AT': [findLeglineSize, findUltraline4000LegSize, findVenosan6000Size, findComfortlineLegSize],
    'ATQ': [findLeglineSize],
    'ATM': [findLeglineSize, findUltraline4000LegSize],
    'AGG': [findUltraline4000LegSize, findComfortlineLegSize],
    'BH': [findUltraline4000ArmSize, findComfortlineArmSize, findComfortlineCottonArmSize],
    'ZH': [findUltraline4000ArmSize, findComfortlineArmSize, findComfortlineCottonArmSize],
};

export const findSizeForModel = (modelId: string, measurements: MeasurementValues): SizingResult[] => {
    const model = PRODUCTS.find(p => p.id === modelId);
    if (!model) return [];
    
    if (model.category === ProductCategory.READY_WRAP) {
        const result = findReadyWrapSize(model.id, measurements);
        return result ? [result] : [];
    }

    const functionsToRun = sizingFunctionMap[modelId];
    if (!functionsToRun) {
        return [];
    }

    const results: (SizingResult | null | SizingResult[])[] = [];
    functionsToRun.forEach(func => {
        results.push(func(measurements));
    });

    const flattenedResults = results.flat().filter((r): r is SizingResult => r !== null);

    const uniqueResults = flattenedResults.filter((result, index, self) =>
        index === self.findIndex((r) => (
            r.productLine === result.productLine && 
            r.size === result.size && 
            r.length === result.length
        ))
    );

    return uniqueResults;
};
>>>>>>> 396693ef3a99c3257dccf6570209bb4e58d46792
