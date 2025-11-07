import React, { useState, useEffect } from 'react';
import { Section, SectionTitle } from '../components/Section';
import { FAQS } from '../constants';

const ContactPage: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '', reason: 'general' });
    const [formStatus, setFormStatus] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    // Check if shop is currently open
    useEffect(() => {
        const checkOpenStatus = () => {
            const now = new Date();
            const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
            const hour = now.getHours();
            const minute = now.getMinutes();
            const currentTime = hour * 60 + minute;
            const openTime = 9 * 60; // 9:00 AM
            const closeTime = 19 * 60; // 7:00 PM

            // Tuesday (2) to Sunday (0) are open, Monday (1) is closed
            if (day === 1) {
                setIsOpen(false); // Monday - Closed
            } else if (day === 0 || (day >= 2 && day <= 6)) {
                // Sunday or Tuesday-Saturday
                setIsOpen(currentTime >= openTime && currentTime < closeTime);
            } else {
                setIsOpen(false);
            }
        };

        checkOpenStatus();
        const interval = setInterval(checkOpenStatus, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formState.name && formState.email && formState.message) {
            setFormStatus('success');
            setFormState({ name: '', email: '', message: '', reason: 'general' });
            setTimeout(() => {
                setFormStatus('');
            }, 5000);
        } else {
            setFormStatus('error');
            setTimeout(() => setFormStatus(''), 3000);
        }
    };

    const phoneNumber = '+911234567890';
    const whatsappNumber = '911234567890';
    const address = '123 Sweet Street, Pune, Maharashtra, 411001';

    return (
        <>
            <Section id="contact" className="bg-cream-200/60">
                <SectionTitle subtitle="Get In Touch">Contact Us</SectionTitle>

                {/* Google Maps & Contact Info */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* Google Maps */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <h3 className="text-lg sm:text-xl font-serif text-brown-heading p-4 sm:p-6 pb-0 font-bold">Find Us Here!</h3>
                        <div className="h-64 sm:h-80 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265476123456!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="p-4 sm:p-6">
                            <p className="text-sm sm:text-base text-brown-body mb-2">{address}</p>
                            <a 
                                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-rose-500 hover:text-rose-600 text-sm font-semibold"
                            >
                                Get Directions →
                            </a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                            <h4 className="text-base sm:text-lg font-bold text-brown-heading mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Address
                            </h4>
                            <p className="text-sm sm:text-base text-brown-body leading-relaxed">{address}</p>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                            <h4 className="text-base sm:text-lg font-bold text-brown-heading mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Email & Phone
                            </h4>
                            <p className="text-sm sm:text-base text-brown-body mb-1">
                                <a href="mailto:contact@mrunalicakes.com" className="text-rose-500 hover:text-rose-600">
                                    contact@mrunalicakes.com
                                </a>
                            </p>
                            <p className="text-sm sm:text-base text-brown-body">
                                <a href={`tel:${phoneNumber}`} className="text-rose-500 hover:text-rose-600">
                                    +91 12345 67890
                                </a>
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                            <h4 className="text-base sm:text-lg font-bold text-brown-heading mb-3">Follow Us</h4>
                            <div className="flex gap-4">
                                <a 
                                    href="https://instagram.com/mrunalicakeshop" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a 
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                                    aria-label="WhatsApp"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://facebook.com/mrunalicakeshop" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a 
                                    href="https://g.page/mrunalicakeshop/review" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-yellow-500 text-white p-3 rounded-full hover:scale-110 transition-transform shadow-lg"
                                    aria-label="Google Reviews"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form & Shop Photo */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-serif text-brown-heading mb-4 sm:mb-6 font-bold">Send us a Message</h3>
                        
                        {/* Quick Response Promise */}
                        <div className="mb-4 sm:mb-6 bg-rose-50 border-l-4 border-rose-500 p-3 rounded-lg">
                            <p className="text-xs sm:text-sm text-brown-body">
                                <span className="font-bold text-rose-500">⭐ We reply within 2 hours</span> (Tue-Sun, 9 AM - 7 PM)
                            </p>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-brown-heading mb-1">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    value={formState.name} 
                                    onChange={handleInputChange} 
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm" 
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-brown-heading mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={formState.email} 
                                    onChange={handleInputChange} 
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm" 
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="reason" className="block text-sm font-semibold text-brown-heading mb-1">Contact Reason</label>
                                <select 
                                    name="reason" 
                                    id="reason" 
                                    value={formState.reason} 
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm bg-white"
                                >
                                    <option value="general">General Query</option>
                                    <option value="custom">Custom Cake Enquiry</option>
                                    <option value="bulk">Bulk Order</option>
                                    <option value="delivery">Delivery Query</option>
                                    <option value="feedback">Feedback</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-brown-heading mb-1">Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    rows={4} 
                                    value={formState.message} 
                                    onChange={handleInputChange} 
                                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm" 
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-full text-base sm:text-lg transition-all transform hover:scale-105 duration-300 shadow-lg"
                                >
                                    Submit
                                </button>
                            </div>
                            
                            {/* Success/Error Message with Animation */}
                            {formStatus && (
                                <div className={`mt-4 p-4 rounded-lg ${
                                    formStatus === 'success' 
                                        ? 'bg-green-50 border-2 border-green-500' 
                                        : 'bg-red-50 border-2 border-red-500'
                                } animate-fade-in`}>
                                    <p className={`text-center text-sm sm:text-base font-semibold ${
                                        formStatus === 'success' ? 'text-green-700' : 'text-red-700'
                                    }`}>
                                        {formStatus === 'success' 
                                            ? '✅ Thank you for reaching us! We will reply soon!' 
                                            : '❌ Please fill out all fields.'}
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Shop Photo */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                            <img 
                                src="https://picsum.photos/seed/shop/600/400" 
                                alt="Mrunali Cake Shop" 
                                className="w-full h-48 sm:h-64 object-cover"
                            />
                            <div className="p-4 sm:p-6">
                                <h4 className="text-base sm:text-lg font-semibold text-brown-heading mb-2">Visit Our Shop</h4>
                                <p className="text-sm sm:text-base text-brown-body leading-relaxed">
                                    Come visit us at our bakery! Our team is always happy to help you choose the perfect cake for your celebration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
                    <h3 className="text-xl sm:text-2xl font-serif text-brown-heading mb-4 sm:mb-6 text-center font-bold">Common Questions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {FAQS.slice(0, 4).map((faq) => (
                            <div key={faq.id} className="bg-cream-50 border border-beige-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow">
                                <h4 className="text-base sm:text-lg font-bold text-brown-heading mb-2">{faq.question}</h4>
                                <p className="text-sm sm:text-base text-brown-body leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </>
    );
};

export default ContactPage;
