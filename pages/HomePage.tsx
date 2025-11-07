import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import { PRODUCTS, TESTIMONIALS, VALUE_PROPOSITIONS, OFFERS, FAQS, GALLERY_IMAGES, PROCESS_STEPS, TEAM_MEMBERS } from '../constants';
import type { Product, ValueProposition, Offer, FAQ, GalleryImage, ProcessStep } from '../types';

const HomePage: React.FC = () => {
    const featuredProducts = PRODUCTS.filter(p => p.featured);

    return (
        <>
            <section id="home" className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center text-white overflow-hidden py-8 sm:py-12 md:py-16" style={{backgroundImage: "url('https://picsum.photos/seed/shop/600/400')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brown-heading/90 via-brown-heading/80 to-rose-500/70"></div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

                {/* Main Content */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto text-center">
                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-3 sm:mb-4 md:mb-5 animate-fade-in">
                        <span className="block">Baked with</span>
                        <span className="block text-rose-300 drop-shadow-lg">Love & Passion</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6 text-rose-100">
                        Order Online. Fresh Delivered.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-5 sm:mb-6 md:mb-8">
                        <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 sm:px-4 md:px-5 py-2 sm:py-3 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-300">1000+</div>
                            <div className="text-xs text-white/80">Happy Customers</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 sm:px-4 md:px-5 py-2 sm:py-3 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-300">500+</div>
                            <div className="text-xs text-white/80">Cakes Delivered</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 sm:px-4 md:px-5 py-2 sm:py-3 border border-white/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-300">4.9★</div>
                            <div className="text-xs text-white/80">Average Rating</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-center px-2">
                        <a href="#menu" className="group w-full sm:w-auto bg-rose-500 hover:bg-rose-600 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-300 shadow-xl text-center flex items-center justify-center gap-2">
                            <span>Order Now</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                        <a href="#menu" className="w-full sm:w-auto bg-white/15 hover:bg-white/25 backdrop-blur-md border-2 border-white/50 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-base md:text-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-300 shadow-xl text-center">
                            View Menu
                        </a>
                    </div>
                </div>
            </section>
            
            {/* Unique Value Proposition */}
            <Section id="why-choose" className="bg-cream-200/60">
                <SectionTitle subtitle="Why Choose Us?">Kyun Choose Karein Mrunali Cake Shop?</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
                    {VALUE_PROPOSITIONS.map((prop: ValueProposition) => (
                        <div key={prop.id} className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{prop.icon}</div>
                            <h3 className="text-lg sm:text-xl font-serif text-brown-heading mb-2">{prop.title}</h3>
                            <p className="text-sm sm:text-base text-brown-body">{prop.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Featured Products */}
            <Section id="featured">
                <SectionTitle subtitle="Our Bestsellers">Made Fresh Everyday</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {featuredProducts.slice(0, 4).map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Section>

            {/* Festive/Seasonal Offers */}
            <Section id="offers" className="bg-rose-50">
                <SectionTitle subtitle="Latest Offers">Special Discounts for You</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12">
                    {OFFERS.map((offer: Offer) => (
                        <div key={offer.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105">
                            <div className="relative">
                                <img src={offer.image} alt={offer.title} className="w-full h-40 sm:h-48 object-cover" />
                                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-rose-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
                                    {offer.discount}
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <span className="text-rose-500 text-xs sm:text-sm font-semibold">{offer.category}</span>
                                <h3 className="text-lg sm:text-xl font-serif text-brown-heading mt-2 mb-2">{offer.title}</h3>
                                <p className="text-brown-body text-xs sm:text-sm">{offer.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Customer Testimonials */}
            <Section id="testimonials-home" className="bg-cream-100">
                <SectionTitle subtitle="Our Happy Customers">What They Say</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                    {TESTIMONIALS.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </Section>

            {/* Gallery/Instagram Feed */}
            <Section id="gallery">
                <SectionTitle subtitle="Our Creations">Gallery</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                    {GALLERY_IMAGES.map((item: GalleryImage) => (
                        <div key={item.id} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                            <img src={item.image} alt={item.caption || 'Gallery'} className="w-full h-48 sm:h-56 lg:h-64 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                            {item.caption && (
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <p className="text-white font-semibold text-sm sm:text-base lg:text-lg px-4 text-center">{item.caption}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* How to Order/Process */}
            <Section id="how-to-order" className="bg-cream-200/60">
                <SectionTitle subtitle="Simple Process">How to Order</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
                    {PROCESS_STEPS.map((step: ProcessStep, index: number) => (
                        <div key={step.id} className="text-center relative">
                            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{step.icon}</div>
                                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-rose-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg shadow-md">
                                    {index + 1}
                                </div>
                                <h3 className="text-lg sm:text-xl font-serif text-brown-heading mb-2">{step.title}</h3>
                                <p className="text-brown-body text-xs sm:text-sm">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Why Us/Meet the Baker */}
            <Section id="meet-baker" className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <SectionTitle subtitle="Meet the Baker">About Mrunali</SectionTitle>
                        <p className="mb-4 text-sm sm:text-base text-brown-body">Founded in 2020, Mrunali Cake Shop started as a small home bakery with a passion for creating delightful and beautiful cakes. Our founder, Mrunali, believed that a cake is more than just a dessert; it's a centerpiece of celebration.</p>
                        <p className="mb-6 text-sm sm:text-base text-brown-body">Today, we've grown into a beloved local bakery, but our core values remain the same: using the finest ingredients, crafting with love, and bringing a smile to our customers' faces with every bite.</p>
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="text-xl sm:text-2xl">✨</span>
                                <span className="text-sm sm:text-base text-brown-body">Freshness guaranteed every day</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="text-xl sm:text-2xl">🧼</span>
                                <span className="text-sm sm:text-base text-brown-body">100% hygiene maintained</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <span className="text-xl sm:text-2xl">🎨</span>
                                <span className="text-sm sm:text-base text-brown-body">Creative designs for every occasion</span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <img src={TEAM_MEMBERS[0].image} alt={TEAM_MEMBERS[0].name} className="rounded-2xl shadow-xl w-full" />
                        <div className="mt-4 text-center">
                            <h4 className="text-xl sm:text-2xl font-serif text-brown-heading">{TEAM_MEMBERS[0].name}</h4>
                            <p className="text-rose-500 font-semibold text-sm sm:text-base">{TEAM_MEMBERS[0].role}</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section id="faq" className="bg-cream-100">
                <SectionTitle subtitle="Got Questions?">Frequently Asked Questions</SectionTitle>
                <div className="max-w-3xl mx-auto mt-8 sm:mt-12 space-y-3 sm:space-y-4">
                    {FAQS.map((faq: FAQ) => (
                        <div key={faq.id} className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                            <h3 className="text-base sm:text-lg font-serif text-brown-heading mb-2">{faq.question}</h3>
                            <p className="text-sm sm:text-base text-brown-body leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Blog/Recipe/Events Section */}
            <Section id="blog" className="bg-white">
                <SectionTitle subtitle="Latest Updates">Tips & Recipes</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12">
                    <div className="bg-cream-200/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📝</div>
                        <h3 className="text-lg sm:text-xl font-serif text-brown-heading mb-2">Baking Tips</h3>
                        <p className="text-brown-body text-xs sm:text-sm leading-relaxed">Learn the secrets of perfect cake baking with our expert tips and tricks.</p>
                    </div>
                    <div className="bg-cream-200/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🍰</div>
                        <h3 className="text-lg sm:text-xl font-serif text-brown-heading mb-2">Recipe Corner</h3>
                        <p className="text-brown-body text-xs sm:text-sm leading-relaxed">Discover our favorite recipes and try them at home with step-by-step guides.</p>
                    </div>
                    <div className="bg-cream-200/50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎉</div>
                        <h3 className="text-lg sm:text-xl font-serif text-brown-heading mb-2">Events Coverage</h3>
                        <p className="text-brown-body text-xs sm:text-sm leading-relaxed">See how our cakes made special moments even more memorable.</p>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default HomePage;
