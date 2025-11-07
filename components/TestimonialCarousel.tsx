import React, { useState, useEffect } from 'react';
import type { Testimonial } from '../types';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
    autoPlay?: boolean;
    interval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
    testimonials, 
    autoPlay = true, 
    interval = 5000 
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!autoPlay || isPaused) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, isPaused, testimonials.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="overflow-hidden rounded-2xl">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="min-w-full px-2 sm:px-4">
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            {testimonials.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-5 h-5 text-brown-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all z-10"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-5 h-5 text-brown-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {testimonials.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all ${
                                index === currentIndex 
                                    ? 'w-8 bg-pink-500' 
                                    : 'w-2 bg-stone-300 hover:bg-stone-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TestimonialCarousel;

