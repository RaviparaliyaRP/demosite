
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brown-heading text-cream-100">
            <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                    <div className="col-span-1 sm:col-span-2 md:col-span-2">
                        <h3 className="text-xl sm:text-2xl font-serif text-white mb-2">Mrunali Cake Shop</h3>
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-cream-200 leading-relaxed">Baked with Love, Made Fresh Everyday. Your sweet moments start here.</p>
                    </div>
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-sm sm:text-base text-cream-200 hover:text-rose-500 transition-colors block">Home</a></li>
                            <li><a href="#menu" className="text-sm sm:text-base text-cream-200 hover:text-rose-500 transition-colors block">Menu</a></li>
                            <li><a href="#about" className="text-sm sm:text-base text-cream-200 hover:text-rose-500 transition-colors block">About Us</a></li>
                            <li><a href="#contact" className="text-sm sm:text-base text-cream-200 hover:text-rose-500 transition-colors block">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                               <span className="text-sm sm:text-base text-cream-200">Pune, Maharashtra</span>
                            </li>
                            <li className="flex items-start">
                                <a href="tel:+911234567890" className="text-sm sm:text-base text-cream-200 hover:text-rose-500 transition-colors">+91 12345 67890</a>
                            </li>
                            <li className="flex items-start">
                               <a href="mailto:contact@mrunalicakes.com" className="text-sm sm:text-base text-cream-200 hover:text-rose-500 transition-colors break-all">contact@mrunalicakes.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 sm:mt-10 border-t border-beige-300 pt-6 sm:pt-8 text-center">
                    <p className="text-xs sm:text-sm text-cream-200">&copy; {new Date().getFullYear()} Mrunali Cake Shop. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
