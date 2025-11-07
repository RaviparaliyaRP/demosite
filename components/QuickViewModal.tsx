import React, { useState } from 'react';
import type { Product } from '../types';
import { StarIcon, ShoppingCartIcon, XIcon } from '../constants';

interface QuickViewModalProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
    const [customMessage, setCustomMessage] = useState('');
    const [showIngredients, setShowIngredients] = useState(false);

    if (!isOpen) return null;

    const displayPrice = selectedSize ? selectedSize.price : product.price;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:bg-pink-100 transition-colors"
                    >
                        <XIcon className="h-4 w-4 sm:h-5 sm:w-5 text-brown-800" />
                    </button>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6">
                        <div>
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl"
                            />
                            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                                {product.isBestseller && (
                                    <div className="inline-block bg-rose-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                                        ⭐ Bestseller
                                    </div>
                                )}
                                {product.isPopular && (
                                    <div className="inline-block bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                                        🔥 Most Popular This Week
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-brown-heading mb-2 font-bold">{product.name}</h2>
                            
                            {product.rating && (
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="flex text-rose-500">
                                        {[...Array(5)].map((_, i) => (
                                            <StarIcon 
                                                key={i} 
                                                className={`h-4 w-4 sm:h-5 sm:w-5 ${i < Math.floor(product.rating!) ? 'text-rose-500' : 'text-stone-300'}`} 
                                            />
                                        ))}
                                    </div>
                                    <span className="text-brown-body text-xs sm:text-sm font-medium">
                                        {product.rating} ({product.reviewCount} reviews)
                                    </span>
                                </div>
                            )}
                            
                            <p className="text-sm sm:text-base text-brown-body mb-4">{product.description}</p>
                            
                            {product.servingSize && (
                                <p className="text-xs sm:text-sm text-brown-body mb-4 font-medium">
                                    <strong className="text-brown-heading">Serving Size:</strong> {product.servingSize}
                                </p>
                            )}
                            
                            {product.sizes && product.sizes.length > 0 && (
                                <div className="mb-4">
                                    <label className="block text-xs sm:text-sm font-semibold text-brown-heading mb-2">Select Size:</label>
                                    <div className="flex flex-wrap gap-2">
                                        {product.sizes.map((size, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border-2 transition-colors text-xs sm:text-sm ${
                                                    selectedSize?.weight === size.weight
                                                        ? 'border-pink-500 bg-rose-50 text-rose-600'
                                                        : 'border-stone-300 hover:border-pink-300'
                                                }`}
                                            >
                                                {size.weight} - ₹{size.price.toFixed(2)}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            <div className="mb-4">
                                <label className="block text-xs sm:text-sm font-semibold text-brown-heading mb-2">Custom Message (Optional):</label>
                                <input
                                    type="text"
                                    value={customMessage}
                                    onChange={(e) => setCustomMessage(e.target.value)}
                                    placeholder="Add a special message..."
                                    className="w-full px-3 sm:px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                                />
                            </div>
                            
                            {product.dietaryTags && product.dietaryTags.length > 0 && (
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {product.dietaryTags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-green-100 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {product.allergens && product.allergens.length > 0 && (
                                <div className="mb-4">
                                    <p className="text-xs text-brown-body mb-1">
                                        <strong className="text-brown-heading">Contains:</strong> {product.allergens.join(', ')}
                                    </p>
                                </div>
                            )}
                            
                            {product.ingredients && (
                                <div className="mb-4">
                                    <button
                                        onClick={() => setShowIngredients(!showIngredients)}
                                        className="text-xs sm:text-sm text-rose-500 hover:text-rose-600 font-semibold"
                                    >
                                        {showIngredients ? 'Hide' : 'See'} Full Ingredients
                                    </button>
                                    {showIngredients && (
                                        <p className="mt-2 text-xs sm:text-sm text-brown-body leading-relaxed">{product.ingredients}</p>
                                    )}
                                </div>
                            )}
                            
                            <div className="flex items-center justify-between mb-4 p-3 sm:p-4 bg-rose-50 border border-beige-200 rounded-lg">
                                <div>
                                    <p className="text-xs sm:text-sm text-brown-body font-medium">Price</p>
                                    <p className="text-2xl sm:text-3xl font-serif text-rose-500 font-bold">₹{displayPrice.toFixed(2)}</p>
                                </div>
                            </div>
                            
                            <button
                                onClick={onAddToCart}
                                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-full text-sm sm:text-base md:text-lg transition-all transform hover:scale-105 duration-300 shadow-lg flex items-center justify-center gap-2"
                            >
                                <ShoppingCartIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;

