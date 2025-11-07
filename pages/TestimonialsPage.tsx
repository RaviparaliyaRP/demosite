import React from 'react';
import { Section, SectionTitle } from '../components/Section';
import TestimonialCard from '../components/TestimonialCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { TESTIMONIALS, VIDEO_TESTIMONIALS, SOCIAL_MENTIONS } from '../constants';
import type { Testimonial, VideoTestimonial, SocialMediaMention } from '../types';
import { StarIcon } from '../constants';

const TestimonialsPage: React.FC = () => {
    const featuredTestimonials = TESTIMONIALS.filter(t => t.isFeatured);
    const regularTestimonials = TESTIMONIALS.filter(t => !t.isFeatured);

    return (
        <>
            {/* Hero Section with Milestone */}
            <Section id="testimonials" className="bg-cream-100">
                <div className="text-center mb-8 sm:mb-12">
                    <SectionTitle subtitle="Happy Customers">What They Say</SectionTitle>
                    <div className="mt-4 sm:mt-6 inline-block bg-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg">
                        <p className="text-lg sm:text-xl md:text-2xl font-bold">
                            🥳 Over 200+ Happy Customers and Counting!
                        </p>
                        <p className="text-sm sm:text-base mt-1">1000+ Orders Delivered</p>
                    </div>
                </div>

                {/* Featured Testimonials Section */}
                {featuredTestimonials.length > 0 && (
                    <div className="mb-12 sm:mb-16">
                        <h3 className="text-2xl sm:text-3xl font-serif text-brown-heading mb-6 sm:mb-8 text-center font-bold">
                            ⭐ Customer of the Month
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                            {featuredTestimonials.map((testimonial: Testimonial) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Testimonial Carousel */}
                <div className="mb-12 sm:mb-16">
                    <h3 className="text-xl sm:text-2xl font-serif text-brown-heading mb-6 sm:mb-8 text-center font-bold">
                        More Customer Reviews
                    </h3>
                    <div className="max-w-4xl mx-auto">
                        <TestimonialCarousel testimonials={regularTestimonials} autoPlay={true} interval={5000} />
                    </div>
                </div>

                {/* All Testimonials Grid */}
                <div className="mb-12 sm:mb-16">
                    <h3 className="text-xl sm:text-2xl font-serif text-brown-heading mb-6 sm:mb-8 text-center font-bold">
                        All Reviews
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {TESTIMONIALS.map((testimonial: Testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* Video Testimonials Section */}
            {VIDEO_TESTIMONIALS.length > 0 && (
                <Section className="bg-white">
                    <SectionTitle subtitle="Watch What Our Customers Say">Video Testimonials</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                        {VIDEO_TESTIMONIALS.map((video: VideoTestimonial) => (
                            <div key={video.id} className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <div className="relative">
                                    <img 
                                        src={video.thumbnail} 
                                        alt={video.name} 
                                        className="w-full h-48 sm:h-64 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                        <div className="bg-white/90 rounded-full p-4 sm:p-6 transform group-hover:scale-110 transition-transform">
                                            <svg className="w-8 h-8 sm:w-12 sm:h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6 bg-white">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-base sm:text-lg font-serif text-brown-heading font-bold">{video.name}</h4>
                                        <div className="flex text-rose-500">
                                            {[...Array(5)].map((_, i) => (
                                                <StarIcon 
                                                    key={i} 
                                                    className={`h-4 w-4 ${i < video.rating ? 'text-rose-500' : 'text-stone-300'}`} 
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm text-brown-body italic">"{video.quote}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* Social Media Mentions */}
            {SOCIAL_MENTIONS.length > 0 && (
                <Section className="bg-rose-50">
                    <SectionTitle subtitle="Seen on Social Media">Instagram & Facebook</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {SOCIAL_MENTIONS.map((mention: SocialMediaMention) => (
                            <div key={mention.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <div className="relative">
                                    <img 
                                        src={mention.image} 
                                        alt={mention.caption} 
                                        className="w-full h-48 sm:h-56 object-cover"
                                    />
                                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold text-pink-500">
                                        {mention.platform}
                                    </div>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-sm font-bold text-brown-heading">{mention.username}</p>
                                        <p className="text-xs text-stone-500">{mention.date}</p>
                                    </div>
                                    <p className="text-xs sm:text-sm text-brown-body">{mention.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* Call to Action Section */}
            <Section className="bg-cream-200/60">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brown-heading mb-4 font-bold">
                        Loved Our Cakes?
                    </h2>
                    <p className="text-sm sm:text-base text-brown-body mb-6 sm:mb-8 leading-relaxed">
                        Share your experience with us! We'd love to hear from you and see your celebration photos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="#contact" 
                            className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all transform hover:scale-105 duration-300 shadow-lg"
                        >
                            Write Your Review
                        </a>
                        <a 
                            href="#contact" 
                            className="bg-white hover:bg-cream-100 text-pink-500 border-2 border-pink-500 font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
                        >
                            Share Your Photos
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default TestimonialsPage;
