import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const navItems = ['Ana Sayfa', 'Hakkımda', 'Yetenekler', 'Projeler', 'İletişim'];
    const scrollToSection = (section) => {
        const element = document.getElementById(section.toLowerCase().replace(' ', '-'));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };
    return (_jsx(motion.nav, { initial: { y: -100 }, animate: { y: 0 }, className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`, children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsx(motion.div, { whileHover: { scale: 1.05 }, className: "text-2xl font-bold bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent", children: "Ebrar Sena Mangan" }), _jsx("div", { className: "hidden md:flex space-x-8", children: navItems.map((item, index) => (_jsx(motion.button, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, whileHover: { scale: 1.1, color: '#10b981' }, onClick: () => scrollToSection(item), className: "text-gray-300 hover:text-green-400 transition-colors duration-200", children: item }, item))) }), _jsx(motion.button, { whileTap: { scale: 0.95 }, onClick: () => setIsOpen(!isOpen), className: "md:hidden text-gray-300 hover:text-green-400", children: isOpen ? _jsx(X, { size: 24 }) : _jsx(Menu, { size: 24 }) })] }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, className: "md:hidden bg-black/90 backdrop-blur-md rounded-lg mt-2", children: _jsx("div", { className: "px-2 pt-2 pb-3 space-y-1", children: navItems.map((item, index) => (_jsx(motion.button, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 0.1 }, whileHover: { backgroundColor: 'rgba(16, 185, 129, 0.1)' }, onClick: () => scrollToSection(item), className: "block w-full text-left px-3 py-2 text-gray-300 hover:text-green-400 rounded-md transition-colors duration-200", children: item }, item))) }) })) })] }) }));
};
export default Navbar;
