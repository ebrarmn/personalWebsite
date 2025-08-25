import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
const Hero = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('hakkımda');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: '#', label: 'Email' }
    ];
    return (_jsxs("section", { id: "ana-sayfa", className: "min-h-screen flex items-center justify-center relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0", children: _jsx(motion.div, { animate: {
                        background: [
                            'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 40% 40%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                            'radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)'
                        ]
                    }, transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }, className: "absolute inset-0" }) }), _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10", children: _jsxs(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "space-y-8", children: [_jsx(motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: 0.2, duration: 0.6 }, className: "text-lg text-green-400 font-medium", children: "Merhaba, ben" }), _jsx(motion.h1, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4, duration: 0.8 }, className: "text-5xl md:text-7xl font-bold", children: _jsx("span", { className: "bg-gradient-to-r from-green-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent", children: "Ebrar Sena Mangan" }) }), _jsx(motion.h2, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.6, duration: 0.8 }, className: "text-2xl md:text-3xl text-gray-300 font-light", children: "Full Stack Developer & UI/UX Designer" }), _jsx(motion.p, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.8, duration: 0.8 }, className: "text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed", children: "Modern web teknolojileri ile kullan\u0131c\u0131 dostu ve performansl\u0131 uygulamalar geli\u015Ftiriyorum. Yarat\u0131c\u0131 \u00E7\u00F6z\u00FCmler ve etkileyici kullan\u0131c\u0131 deneyimleri olu\u015Fturmaya odaklan\u0131yorum." }), _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1, duration: 0.8 }, className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(motion.button, { whileHover: { scale: 1.05, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }, whileTap: { scale: 0.95 }, className: "px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300", children: "Projelerimi G\u00F6r" }), _jsx(motion.button, { whileHover: { scale: 1.05, boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3)' }, whileTap: { scale: 0.95 }, onClick: scrollToAbout, className: "px-8 py-3 border-2 border-orange-500 text-orange-400 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300", children: "Hakk\u0131mda" })] }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1.2, duration: 0.8 }, className: "flex justify-center space-x-6 pt-8", children: socialLinks.map((social, index) => (_jsx(motion.a, { href: social.href, whileHover: { scale: 1.2, y: -5 }, whileTap: { scale: 0.9 }, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 1.4 + index * 0.1, duration: 0.6 }, className: "p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-300 hover:text-green-400 transition-colors duration-300", children: _jsx(social.icon, { size: 24 }) }, social.label))) })] }) }), _jsx(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 2, duration: 1 }, className: "absolute bottom-8 left-1/2 transform -translate-x-1/2", children: _jsx(motion.button, { onClick: scrollToAbout, animate: { y: [0, 10, 0] }, transition: { duration: 2, repeat: Infinity }, className: "text-gray-400 hover:text-green-400 transition-colors duration-300", children: _jsx(ChevronDown, { size: 32 }) }) })] }));
};
export default Hero;
