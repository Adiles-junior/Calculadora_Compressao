
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
    { id: 'BD', name: 'BD', description: 'Polaina', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://i.imgur.com/K3XGSLM.png', diagram: 'https://i.imgur.com/gK6T6bM.png', requiredMeasurements: ['AD', 'cD', 'cC', 'cB'] },
    { id: 'AD', name: 'AD', description: 'Panturrilha', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://i.imgur.com/oDejl5h.png', diagram: 'https://i.imgur.com/tHqgU5B.png', requiredMeasurements: ['AD', 'cD', 'cC', 'cB'], specialInputs: ['SHOE_SIZE'] },
    { id: 'AGH', name: 'AGH', description: 'Meia-Coxa com silicone', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://i.imgur.com/N50pTtR.png', diagram: 'https://i.imgur.com/S6sO2s7.png', requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'AT', name: 'AT', description: 'Meia-Calça', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://i.imgur.com/4z82hYv.png', diagram: 'https://i.imgur.com/S6sO2s7.png', requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'ATQ', name: 'ATQ', description: 'Meia-Calça Queen', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://i.imgur.com/n6H9v3r.png', diagram: 'https://i.imgur.com/x5T6P2y.png', requiredMeasurements: ['AG', 'cH', 'cG', 'cC', 'cB'] },
    { id: 'ATM', name: 'ATM', description: 'Meia-Calça gestante', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://i.imgur.com/g5V6gqL.png', diagram: 'https://i.imgur.com/J8bN6Jj.png', requiredMeasurements: ['AG', 'cH', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'AGG', name: 'AGG', description: 'Meia-Calça com cinta', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://i.imgur.com/eB3N1bT.png', diagram: 'https://i.imgur.com/xT5u2gN.png', requiredMeasurements: ['AG', 'cG', 'cD', 'cC', 'cB'] },
    { id: 'BH', name: 'BH', description: 'Braçadeira até o punho', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://i.imgur.com/tH6j54m.png', diagram: 'https://i.imgur.com/n9D2b1c.png', requiredMeasurements: ['BH', 'cF', 'cD', 'cB'] },
    { id: 'ZH', name: 'ZH', description: 'Braçadeira até o metacarpo com polegar', category: ProductCategory.COMPRESSION_STOCKINGS, image: 'https://i.imgur.com/QY8X6M4.png', diagram: 'https://i.imgur.com/n9D2b1c.png', requiredMeasurements: ['ZH', 'cF', 'cD', 'cB'] },
    
    // ReadyWrap
    { id: 'BRACO', name: 'BRAÇO', description: '', category: ProductCategory.READY_WRAP, image: 'https://i.imgur.com/4s7L9aC.png', diagram: 'https://i.imgur.com/K1LgQ6y.png', requiredMeasurements: ['BG', 'cG', 'cE', 'cB'] },
    { id: 'COXA', name: 'COXA', description: '', category: ProductCategory.READY_WRAP, image: 'https://i.imgur.com/wP0F5a3.png', diagram: 'https://i.imgur.com/HqP4i7B.png', requiredMeasurements: ['EG', 'cG', 'cE'] },
    { id: 'LUVA', name: 'LUVA', description: '', category: ProductCategory.READY_WRAP, image: 'https://i.imgur.com/iI3jBfJ.png', diagram: 'https://i.imgur.com/Uf6kX1y.png', requiredMeasurements: ['AB', 'cB', 'cA'] },
    { id: 'JOELHOS', name: 'JOELHO', description: '', category: ProductCategory.READY_WRAP, image: 'https://i.imgur.com/4q3s0w5.png', diagram: 'https://i.imgur.com/T0bCjYF.png', requiredMeasurements: ['cE', 'cD'] },
    { id: 'DEDOS_DO_PE', name: 'DEDOS DO PÉ', description: '', category: ProductCategory.READY_WRAP, image: 'https://i.imgur.com/h5E8t2v.png', diagram: 'https://i.imgur.com/uD4kXyJ.png', requiredMeasurements: ['cA'] },
    { id: 'PANTURRILHA_RW', name: 'PANTURRILHA', description: '', category: ProductCategory.READY_WRAP, image: 'https://i.imgur.com/Q1C2IHN.png', diagram: 'https://i.imgur.com/u0fO6wS.png', requiredMeasurements: ['BD', 'cC', 'cB'] },
    { id: 'PE_CT', name: 'PÉ CT', description: '', category: ProductCategory.READY_WRAP, image: 'https://i.imgur.com/g0tN7jR.png', diagram: 'https://i.imgur.com/uR1D3Lq.png', requiredMeasurements: ['AY', 'cA', 'cA1', 'cB'] },
    { id: 'PE_SL', name: 'PÉ SL', description: '', category: ProductCategory.READY_WRAP, image: 'https://i.imgur.com/X4y3Y5K.png', diagram: 'https://i.imgur.com/uR1D3Lq.png', requiredMeasurements: ['AY', 'cA1', 'cB'] },
];

const checkRange = (value: number, min: number, max: number) => value >= min && value <= max;

const findSize = (circumferences: { val: number, ranges: number[][] }[]): string | null => {
    const sizes = ['PEQUENO', 'MÉDIO', 'GRANDE', 'X-GRANDE', 'XX-GRANDE'];
    for (let i = 0; i < sizes.length; i++) {
        const isMatch = circumferences.every(c => {
            if (c.ranges[i] && c.val) {
                return checkRange(c.val, c.ranges[i][0], c.ranges[i][1]);
            }
            return true;
        });
        if (isMatch) {
            return sizes[i];
        }
    }
    return null;
}

const findUltraline4000Size = (m: MeasurementValues): SizingResult | null => {
    const cB_RANGES = [[18, 23], [23, 26], [26, 29], [29, 32], [32, 38]];
    const cC_RANGES = [[28, 39], [33, 42], [36, 45], [39, 50], [43, 55]];
    const cD_RANGES = [[28, 38], [32, 41], [35, 44], [38, 46], [42, 52]];
    const cG_RANGES = [[48, 63], [54, 67], [58, 72], [63, 74]];

    const size = findSize([
        { val: m.cB, ranges: cB_RANGES },
        { val: m.cC, ranges: cC_RANGES },
        { val: m.cD, ranges: cD_RANGES },
        { val: m.cG, ranges: cG_RANGES },
    ]);
    
    if (!size) return null;

    let length;
    if (m.AD) {
        if (m.AD >= 35 && m.AD <= 40) length = "CURTA";
        else if (m.AD > 40 && m.AD <= 43) length = "NORMAL";
    }
    if (m.AG) {
        if (m.AG >= 63 && m.AG <= 69) length = "CURTA";
        else if (m.AG > 69 && m.AG <= 80) length = "NORMAL";
    }

    return { productLine: 'ULTRALINE 4000', size, length };
}

const findSupportlineSize = (m: MeasurementValues): SizingResult | null => {
    const sizes = ['PP', 'P', 'M', 'G', 'XG'];
    const shoe_RANGES = [[34, 36], [37, 38], [39, 41], [42, 44], [45, 47]];
    const cB_RANGES = [[16.5, 20.5], [19, 21.5], [21.5, 24], [23, 26.5], [26.5, 32]];
    const cC_RANGES = [[26.5, 37], [28, 38], [33, 43.5], [35.5, 46], [38.5, 51.5]];

    let foundSize = null;
    for (let i = 0; i < sizes.length; i++) {
        const shoeMatch = m.SHOE_SIZE ? checkRange(m.SHOE_SIZE, shoe_RANGES[i][0], shoe_RANGES[i][1]) : true;
        const cBMatch = m.cB ? checkRange(m.cB, cB_RANGES[i][0], cB_RANGES[i][1]) : true;
        const cCMatch = m.cC ? checkRange(m.cC, cC_RANGES[i][0], cC_RANGES[i][1]) : true;

        if(shoeMatch && cBMatch && cCMatch) {
            foundSize = sizes[i];
            break;
        }
    }
    if(!foundSize) return null;
    return { productLine: 'SUPPORTLINE SOFT', size: foundSize };
}


const findReadyWrapSize = (modelId: string, m: MeasurementValues): SizingResult | null => {
    // Simplified ReadyWrap Logic
    let size = null;
    let length = null;
    if (modelId === 'PANTURRILHA_RW') {
        if (checkRange(m.cB, 18, 23) && checkRange(m.cC, 28, 38)) size = 'P';
        if (checkRange(m.cB, 20, 28) && checkRange(m.cC, 33, 43)) size = 'M';
        if (checkRange(m.cB, 25, 33) && checkRange(m.cC, 38, 48)) size = 'G';
        if (checkRange(m.cB, 30, 38) && checkRange(m.cC, 43, 58)) size = 'XG';
        if (checkRange(m.cB, 35, 43) && checkRange(m.cC, 53, 68)) size = 'XXG';

        if (m.BD <= 30) length = "CURTO (até 30cm)";
        else if (m.BD <= 35) length = "LONGO (até 35cm)";
    }
     if (modelId === 'JOELHOS') {
        if (checkRange(m.cD, 28, 38) && checkRange(m.cE, 38, 48)) size = 'P';
        if (checkRange(m.cD, 33, 43) && checkRange(m.cE, 45, 58)) size = 'M';
        if (checkRange(m.cD, 38, 48) && checkRange(m.cE, 52, 68)) size = 'G';
        if (checkRange(m.cD, 43, 58) && checkRange(m.cE, 59, 78)) size = 'XG';
        if (checkRange(m.cD, 53, 68) && checkRange(m.cE, 66, 88)) size = 'XXG';
     }

    if(!size) return null;

    return { productLine: `ReadyWrap ${modelId.replace('_RW', '')}`, size, length: length || undefined };
}

export const findSizeForModel = (modelId: string, measurements: MeasurementValues): SizingResult[] => {
    const results: SizingResult[] = [];
    const model = PRODUCTS.find(p => p.id === modelId);
    if (!model) return [];
    
    if(model.category === ProductCategory.READY_WRAP) {
        const readyWrapResult = findReadyWrapSize(modelId, measurements);
        if (readyWrapResult) results.push(readyWrapResult);
        return results;
    }

    // Try to find a match in different product lines
    const ultralineResult = findUltraline4000Size(measurements);
    if (ultralineResult) results.push(ultralineResult);
    
    if (modelId === 'AD' && measurements.SHOE_SIZE) {
        const supportlineResult = findSupportlineSize(measurements);
        if (supportlineResult) results.push(supportlineResult);
    }
    
    // Add other product line checks here...
    // const comfortlineResult = findComfortlineSize(measurements);
    // if (comfortlineResult) results.push(comfortlineResult);

    if (results.length === 0) {
        // Fallback for demonstration if no specific logic matches
        if (measurements.cB < 23 && measurements.cC < 39) {
            results.push({ productLine: 'Linha Padrão', size: 'PEQUENO', notes: 'Resultado de fallback.' });
        } else if (measurements.cB < 26 && measurements.cC < 42) {
            results.push({ productLine: 'Linha Padrão', size: 'MÉDIO', notes: 'Resultado de fallback.' });
        }
    }

    return results;
}
      