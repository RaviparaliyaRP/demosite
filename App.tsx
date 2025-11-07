import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
    const [route, setRoute] = useState(window.location.hash || '#home');

    useEffect(() => {
        const handleHashChange = () => {
            // Default to #home if hash is empty or just #
            const newHash = window.location.hash || '#home';
            if (newHash === '#') {
                setRoute('#home');
            } else {
                setRoute(newHash);
            }
            window.scrollTo(0, 0); // Scroll to top on page change
        };

        // Set initial route
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderPage = () => {
        switch (route) {
            case '#menu':
                return <MenuPage />;
            case '#about':
                return <AboutPage />;
            case '#testimonials':
                return <TestimonialsPage />;
            case '#contact':
                return <ContactPage />;
            case '#home':
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="bg-cream-100 text-brown-body flex flex-col min-h-screen antialiased">
            <Header currentRoute={route} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
