import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { ShoppingCartIcon, MenuIcon, XIcon } from '../constants';
import type { NavLink } from '../types';

interface HeaderProps {
    currentRoute: string;
}

const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getLinkClass = (href: string) => {
        const baseClass = "text-brown-body hover:text-rose-500 px-3 py-2 rounded-md text-md font-medium transition-all duration-300 hover:bg-rose-50";
        if (currentRoute === href) {
            return `text-rose-500 font-bold px-3 py-2 rounded-md text-md transition-colors duration-300 bg-rose-50`;
        }
        return baseClass;
    };
    
    const getMobileLinkClass = (href: string) => {
        const baseClass = "text-brown-body hover:text-rose-500 hover:bg-rose-100 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300";
        if (currentRoute === href) {
            return `bg-rose-100 text-rose-500 font-bold block px-3 py-2 rounded-md text-base transition-colors duration-300`;
        }
        return baseClass;
    };

    return (
        <header className="bg-cream-100/80 backdrop-blur-md sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-xl sm:text-2xl md:text-3xl font-serif text-brown-heading hover:text-rose-500 transition-colors">
                            Mrunali Cake Shop
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <nav className="ml-10 flex items-baseline space-x-4">
                            {NAV_LINKS.map((link: NavLink) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={getLinkClass(link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="hidden md:block">
                        <button className="relative p-2 text-brown-body hover:text-rose-500 hover:bg-rose-50 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cream-100 focus:ring-rose-500 transition-all">
                            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold shadow-md">0</span>
                            <ShoppingCartIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="bg-cream-200 inline-flex items-center justify-center p-2 rounded-md text-brown-body hover:text-rose-500 hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cream-100 focus:ring-rose-500 transition-all"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <XIcon className="block h-6 w-6" /> : <MenuIcon className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link: NavLink) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={getMobileLinkClass(link.href)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                     <div className="pt-4 pb-3 border-t border-beige-200">
                        <div className="flex items-center px-5">
                            <button className="relative p-2 text-brown-body hover:text-rose-500 hover:bg-rose-50 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cream-100 focus:ring-rose-500 transition-all">
                                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-rose-500 text-white text-xs flex items-center justify-center font-bold shadow-md">0</span>
                                <ShoppingCartIcon className="h-6 w-6" />
                                <span className="ml-3 text-base font-medium text-brown-body">Cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
