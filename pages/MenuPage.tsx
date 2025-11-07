import React, { useState, useMemo } from 'react';
import { Section, SectionTitle } from '../components/Section';
import ProductCard from '../components/ProductCard';
import QuickViewModal from '../components/QuickViewModal';
import { PRODUCTS } from '../constants';
import { ProductCategory } from '../types';
import type { Product } from '../types';

type SortOption = 'default' | 'price-low' | 'price-high' | 'popularity' | 'rating';

const MenuPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState<SortOption>('default');
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    const categories: (ProductCategory | 'All')[] = ['All', ...Object.values(ProductCategory)];

    const bestsellers = useMemo(() => {
        return PRODUCTS.filter(p => p.isBestseller).slice(0, 5);
    }, []);

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = activeCategory === 'All' 
            ? PRODUCTS 
            : PRODUCTS.filter(p => p.category === activeCategory);

        // Search filter
        if (searchQuery) {
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sort
        switch (sortOption) {
            case 'price-low':
                filtered = [...filtered].sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered = [...filtered].sort((a, b) => b.price - a.price);
                break;
            case 'popularity':
                filtered = [...filtered].sort((a, b) => {
                    const aPopular = (a.isPopular ? 1 : 0) + (a.isBestseller ? 1 : 0) + (a.reviewCount || 0);
                    const bPopular = (b.isPopular ? 1 : 0) + (b.isBestseller ? 1 : 0) + (b.reviewCount || 0);
                    return bPopular - aPopular;
                });
                break;
            case 'rating':
                filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0));
                break;
            default:
                break;
        }

        return filtered;
    }, [activeCategory, searchQuery, sortOption]);

    const handleQuickView = (product: Product) => {
        setQuickViewProduct(product);
    };

    const handleCloseQuickView = () => {
        setQuickViewProduct(null);
    };

    const handleAddToCart = () => {
        // Add to cart logic here
        handleCloseQuickView();
    };

    return (
        <>
            <Section id="menu">
                <SectionTitle subtitle="Explore Our Treats">Our Full Menu</SectionTitle>
                
                {/* Bestsellers Section */}
                {bestsellers.length > 0 && (
                    <div className="mb-6 sm:mb-8 md:mb-12">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-brown-heading mb-4 sm:mb-6 text-center px-2 font-bold">⭐ Bestsellers</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 md:gap-6">
                            {bestsellers.map((product: Product) => (
                                <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Search and Sort Bar */}
                <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                        {/* Search Bar */}
                        <div className="flex-1 w-full">
                            <input
                                type="text"
                                placeholder="Find your favorite cake..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-3 sm:px-4 py-2 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base"
                            />
                        </div>
                        
                        {/* Sort Dropdown */}
                        <div className="w-full sm:w-auto sm:min-w-[200px]">
                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value as SortOption)}
                                className="w-full sm:w-auto px-3 sm:px-4 py-2 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm sm:text-base bg-white"
                            >
                                <option value="default">Sort: Default</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="popularity">Popularity</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Sticky Category Filters */}
                <div className="sticky top-14 sm:top-16 md:top-20 z-40 bg-cream-100/95 backdrop-blur-sm py-2 sm:py-3 md:py-4 mb-4 sm:mb-6 -mx-4 sm:-mx-6 lg:-mx-8 px-2 sm:px-4 md:px-6 lg:px-8 shadow-sm">
                    <div className="flex justify-center flex-wrap gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
                        {categories.map(category => (
                            <button 
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full font-semibold transition-all duration-300 text-[10px] sm:text-xs md:text-sm lg:text-base ${
                                    activeCategory === category 
                                        ? 'bg-rose-500 text-white shadow-lg' 
                                        : 'bg-white text-brown-body hover:bg-rose-50 border border-beige-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                {filteredAndSortedProducts.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                        {filteredAndSortedProducts.map((product: Product) => (
                            <ProductCard key={product.id} product={product} onQuickView={handleQuickView} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 sm:py-12">
                        <p className="text-brown-body text-sm sm:text-base md:text-lg px-4">No products found. Try a different search or category.</p>
                    </div>
                )}
            </Section>

            {/* Quick View Modal */}
            {quickViewProduct && (
                <QuickViewModal
                    product={quickViewProduct}
                    isOpen={!!quickViewProduct}
                    onClose={handleCloseQuickView}
                    onAddToCart={handleAddToCart}
                />
            )}
        </>
    );
};

export default MenuPage;
