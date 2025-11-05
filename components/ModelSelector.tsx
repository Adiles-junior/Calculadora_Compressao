import React, { useState } from 'react';
import { ProductCategory, ProductModel } from '../types';
import { PRODUCTS } from '../data';

interface ModelSelectorProps {
  onSelectModel: (model: ProductModel) => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ onSelectModel }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(ProductCategory.COMPRESSION_STOCKINGS);

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory);

  const TabButton = ({ category }: { category: ProductCategory }) => (
    <button
      onClick={() => setActiveCategory(category)}
      className={`w-1/2 py-3 text-center text-sm sm:text-base font-semibold transition-all duration-300 border-b-4 ${
        activeCategory === category
          ? 'text-green-700 border-green-700'
          : 'text-gray-500 hover:text-green-600 border-transparent hover:border-green-300'
      }`}
    >
      {category}
    </button>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Modelos</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-8">Selecione o seu</h2>
      
      <div className="w-full border-b border-gray-200 mb-8">
        <div className="flex">
          <TabButton category={ProductCategory.COMPRESSION_STOCKINGS} />
          <TabButton category={ProductCategory.READY_WRAP} />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts.map(model => (
          <div key={model.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
            <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
               <img 
                 src={model.image} 
                 alt={model.name} 
                 className="max-h-full max-w-full object-contain"
                 style={{ maxHeight: '180px' }}
               />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-gray-800 text-base">{model.name}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{model.description}</p>
              <button
                onClick={() => onSelectModel(model)}
                className="mt-auto w-full bg-green-600 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                SELECIONAR
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelSelector;
