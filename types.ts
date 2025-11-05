
export enum AppStep {
  MODEL_SELECTION,
  MEASUREMENT_INPUT,
  RESULT_DISPLAY,
}

export enum ProductCategory {
  COMPRESSION_STOCKINGS = 'Meias de Compressão',
  READY_WRAP = 'ReadyWrap',
}

export interface Measurement {
  id: string;
  type: 'length' | 'circumference' | 'shoe_size';
  name: string;
  description: string;
}

export interface ProductModel {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  image: string;
  diagram: string;
  requiredMeasurements: string[]; // array of measurement ids
  notes?: string;
  specialInputs?: string[];
}

export type MeasurementValues = {
  [key: string]: number;
};

export interface SizingResult {
  productLine: string;
  size: string;
  length?: string;
  notes?: string;
}
      