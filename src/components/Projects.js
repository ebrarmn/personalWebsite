import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
// Kategori dizisini ekliyoruz
const categories = ['Tümü', 'Full Stack', 'Web', 'Mobile', 'Design'];
const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('Tümü');
    const projects = [
        {
            id: 1,
            title: 'E-Ticaret Platformu',
            description: 'Modern React ve Node.js ile geliştirilmiş tam özellikli e-ticaret platformu.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
            category: 'Full Stack',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Takım çalışması için geliştirilmiş görev yönetim uygulaması.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
            category: 'Web',
            technologies: ['Vue.js', 'Firebase', 'Vuex'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        },
        {
            id: 3,
            title: 'Fitness Tracker',
            description: 'React Native ile geliştirilmiş mobil fitness takip uygulaması.',
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
            category: 'Mobile',
            technologies: ['React Native', 'Redux', 'AsyncStorage'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false
        },
        {
            id: 4,
            title: 'Portfolio Website',
            description: 'Modern ve responsive portfolio websitesi tasarımı.',
            image: 'https://images.unsplash.com/photo-1467232004584-a241de8b6a40?w=400&h=300&fit=crop',
            category: 'Design',
            technologies: ['Figma', 'HTML/CSS', 'JavaScript'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false
        },
        {
            id: 5,
            title: 'Weather Dashboard',
            description: 'Gerçek zamanlı hava durumu verilerini gösteren dashboard.',
            image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop',
            category: 'Web',
            technologies: ['React', 'TypeScript', 'OpenWeather API'],
            liveUrl: '#',
            githubUrl: '#',
            featured: false
        },
        {
            id: 6,
            title: 'Social Media App',
            description: 'Kullanıcıların fotoğraf paylaşabileceği sosyal medya uygulaması.',
            image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop',
            category: 'Full Stack',
            technologies: ['React', 'Express.js', 'PostgreSQL', 'AWS'],
            liveUrl: '#',
            githubUrl: '#',
            featured: true
        }
    ];
    const filteredProjects = selectedCategory === 'Tümü'
        ? projects
        : projects.filter(project => project.category === selectedCategory);
    return (_jsx("section", { id: "projeler", className: "py-20 bg-gradient-to-b from-gray-900 to-gray-800", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: _jsx("span", { className: "bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent", children: "Projeler" }) }), _jsx("p", { className: "text-gray-400 text-lg max-w-3xl mx-auto", children: "Geli\u015Ftirdi\u011Fim projeler ve yarat\u0131c\u0131 \u00E7\u00F6z\u00FCmler." })] }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 }, viewport: { once: true }, className: "flex flex-wrap justify-center gap-4 mb-12", children: categories.map((category) => (_jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: () => setSelectedCategory(category), className: `px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                            ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}`, children: category }, category))) }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: _jsx(AnimatePresence, { mode: "wait", children: filteredProjects.map((project, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 }, transition: { delay: index * 0.1, duration: 0.6 }, className: "group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300", children: [_jsxs("div", { className: "relative h-48 overflow-hidden", children: [_jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }), project.featured && (_jsx("div", { className: "absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs font-bold px-2 py-1 rounded-full", children: "\u00D6ne \u00C7\u0131kan" })), _jsxs("div", { className: "absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: [_jsx(motion.a, { href: project.liveUrl, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, className: "p-3 bg-green-500 rounded-full text-white hover:bg-green-600 transition-colors duration-300", children: _jsx(Eye, { size: 20 }) }), _jsx(motion.a, { href: project.githubUrl, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, className: "p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors duration-300", children: _jsx(Github, { size: 20 }) })] })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300", children: project.title }), _jsx("p", { className: "text-gray-400 text-sm mb-4 leading-relaxed", children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.technologies.map((tech) => (_jsx("span", { className: "px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full", children: tech }, tech))) }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-orange-400 text-sm font-medium", children: project.category }), _jsx(motion.a, { href: project.liveUrl, whileHover: { scale: 1.05 }, className: "text-green-400 hover:text-green-300 transition-colors duration-300", children: _jsx(ExternalLink, { size: 16 }) })] })] })] }, project.id))) }) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, viewport: { once: true }, className: "text-center mt-12", children: _jsx(motion.button, { whileHover: { scale: 1.05, boxShadow: '0 10px 30px rgba(16, 185, 129, 0.3)' }, whileTap: { scale: 0.95 }, className: "px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300", children: "Daha Fazla Proje" }) })] }) }));
};
export default Projects;
