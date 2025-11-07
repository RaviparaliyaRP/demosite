
import React from 'react';
import type { Testimonial } from '../types';
import { StarIcon } from '../constants';


interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    const rating = testimonial.rating || 5;
    
    return (
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
            {testimonial.isFeatured && (
                <div className="absolute top-2 right-2 bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md">
                    ⭐ Featured
                </div>
            )}
            
            <div className="flex items-center gap-3 mb-4">
                <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-beige-200 shadow-md" 
                />
                <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-serif text-brown-heading font-bold">{testimonial.name}</h4>
                    {testimonial.location && (
                        <p className="text-xs text-brown-body">{testimonial.location}</p>
                    )}
                </div>
            </div>
            
            {/* Star Rating */}
            <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                    <StarIcon 
                        key={i} 
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${i < rating ? 'text-rose-500' : 'text-stone-300'}`} 
                    />
                ))}
                {testimonial.date && (
                    <span className="text-xs text-brown-body ml-2 font-medium">{testimonial.date}</span>
                )}
            </div>
            
            <p className="text-sm sm:text-base text-brown-body italic mb-4 leading-relaxed">"{testimonial.quote}"</p>
            
            {/* Cake Photo */}
            {testimonial.cakePhoto && (
                <div className="mt-4 rounded-lg overflow-hidden">
                    <img 
                        src={testimonial.cakePhoto} 
                        alt="Customer's cake" 
                        className="w-full h-32 sm:h-40 object-cover"
                    />
                </div>
            )}
        </div>
    );
};

export default TestimonialCard;
