
import React, { useState } from 'react';
import type { Product } from '../types';
import { ShoppingCartIcon, StarIcon } from '../constants';

interface ProductCardProps {
    product: Product;
    onQuickView?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300 relative">
            <div className="relative">
                <img className="w-full h-32 sm:h-48 md:h-56 object-cover" src={product.image} alt={product.name} />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-1 sm:top-2 left-1 sm:left-2 flex flex-col gap-1 sm:gap-2">
                    {product.isBestseller && (
                        <span className="bg-rose-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-md">
                            ⭐ Bestseller
                        </span>
                    )}
                    {product.isPopular && (
                        <span className="bg-orange-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                            🔥 Popular
                        </span>
                    )}
                </div>
                
                {/* Dietary Tags */}
                {product.dietaryTags && product.dietaryTags.length > 0 && (
                    <div className="absolute top-1 sm:top-2 right-1 sm:right-2 flex flex-col gap-1 sm:gap-2">
                        {product.dietaryTags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                
                {/* Quick View Button */}
                {onQuickView && (
                    <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={() => onQuickView(product)}
                            className="bg-white text-rose-500 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold shadow-lg hover:bg-rose-50 transition-all duration-300"
                        >
                            Quick View
                        </button>
                    </div>
                )}
            </div>
            
            <div className="p-2.5 sm:p-4 md:p-6">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-serif text-brown-heading line-clamp-1 font-bold">{product.name}</h3>
                <p className="text-brown-body mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm h-8 sm:h-10 md:h-12 line-clamp-2 leading-relaxed">{product.description}</p>
                
                {/* Rating */}
                {product.rating && (
                    <div className="flex items-center gap-0.5 sm:gap-1 mt-1 sm:mt-2">
                        <div className="flex text-rose-500">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon 
                                    key={i} 
                                    className={`h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4 ${i < Math.floor(product.rating!) ? 'text-rose-500' : 'text-stone-300'}`} 
                                />
                            ))}
                        </div>
                        <span className="text-[10px] sm:text-xs text-brown-body font-medium">
                            {product.rating} ({product.reviewCount})
                        </span>
                    </div>
                )}
                
                {/* Serving Size */}
                {product.servingSize && (
                    <p className="text-[10px] sm:text-xs text-brown-body mt-0.5 sm:mt-1 line-clamp-1">{product.servingSize}</p>
                )}
                
                <div className="mt-2 sm:mt-4 flex flex-col gap-1.5 sm:gap-2">
                    {/* Price Badge */}
                    <div className="bg-rose-50 border border-beige-200 rounded-lg p-1.5 sm:p-2 inline-block w-fit">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-rose-500 font-bold">₹{product.price.toFixed(2)}</p>
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex gap-1.5 sm:gap-2">
                        <button
                            onClick={handleAddToCart}
                            className={`flex-1 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold rounded-full transition-all duration-300 flex items-center justify-center space-x-1 sm:space-x-2 ${
                                added
                                    ? 'bg-success-500 text-white'
                                    : 'bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white'
                            }`}
                            disabled={added}
                        >
                            {added ? (
                                <span>Added!</span>
                            ) : (
                                <>
                                    <ShoppingCartIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3 md:h-4 md:w-4" />
                                    <span className="hidden sm:inline">Add to Cart</span>
                                    <span className="sm:hidden">Add</span>
                                </>
                            )}
                        </button>
                        {onQuickView && (
                            <button
                                onClick={() => onQuickView(product)}
                                className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs md:text-sm font-semibold rounded-full bg-stone-100 text-brown-body hover:bg-stone-200 transition-all duration-300"
                            >
                                View
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
