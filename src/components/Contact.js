import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: 'ebrar.mangan03@gmail.com',
            href: 'mailto:ebrar.mangan03@gmail.com'
        },
        {
            icon: Phone,
            title: 'Telefon',
            value: '+90 555 123 45 67',
            href: 'tel:+905551234567'
        },
        {
            icon: MapPin,
            title: 'Konum',
            value: 'Yenimahalle, Ankara, Türkiye',
            href: '#'
        }
    ];
    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ];
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        setIsSubmitting(false);
        // Show success message (you can implement a toast notification here)
        alert('Mesajınız başarıyla gönderildi!');
    };
    return (_jsx("section", { id: "ileti\u015Fim", className: "py-20 bg-gradient-to-b from-gray-800 to-gray-900", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: _jsx("span", { className: "bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent", children: "\u0130leti\u015Fim" }) }), _jsx("p", { className: "text-gray-400 text-lg max-w-3xl mx-auto", children: "Projeleriniz i\u00E7in benimle ileti\u015Fime ge\u00E7in. Birlikte harika \u015Feyler yapal\u0131m!" })] }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "bg-gray-800/50 backdrop-blur-sm rounded-xl p-8", children: [_jsx("h3", { className: "text-2xl font-semibold text-white mb-6", children: "Mesaj G\u00F6nder" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-gray-300 text-sm font-medium mb-2", children: "\u0130sim" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleInputChange, required: true, className: "w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300", placeholder: "\u0130sminizi girin" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-gray-300 text-sm font-medium mb-2", children: "Email" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleInputChange, required: true, className: "w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300", placeholder: "Email adresinizi girin" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "subject", className: "block text-gray-300 text-sm font-medium mb-2", children: "Konu" }), _jsx("input", { type: "text", id: "subject", name: "subject", value: formData.subject, onChange: handleInputChange, required: true, className: "w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300", placeholder: "Mesaj konusunu girin" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-gray-300 text-sm font-medium mb-2", children: "Mesaj" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleInputChange, required: true, rows: 5, className: "w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 resize-none", placeholder: "Mesaj\u0131n\u0131z\u0131 yaz\u0131n..." })] }), _jsx(motion.button, { type: "submit", disabled: isSubmitting, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }), _jsx("span", { children: "G\u00F6nderiliyor..." })] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { size: 20 }), _jsx("span", { children: "Mesaj G\u00F6nder" })] })) })] })] }), _jsxs(motion.div, { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "space-y-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-semibold text-white mb-6", children: "\u0130leti\u015Fim Bilgileri" }), _jsx("div", { className: "space-y-4", children: contactInfo.map((info, index) => (_jsxs(motion.a, { href: info.href, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: index * 0.1, duration: 0.6 }, viewport: { once: true }, whileHover: { scale: 1.02, backgroundColor: 'rgba(16, 185, 129, 0.1)' }, className: "flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300", children: [_jsx("div", { className: "p-3 bg-gradient-to-r from-green-500 to-orange-500 rounded-lg", children: _jsx(info.icon, { className: "text-white", size: 20 }) }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-medium", children: info.title }), _jsx("p", { className: "text-gray-400", children: info.value })] })] }, info.title))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-semibold text-white mb-6", children: "Sosyal Medya" }), _jsx("div", { className: "flex space-x-4", children: socialLinks.map((social, index) => (_jsx(motion.a, { href: social.href, initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { delay: index * 0.1, duration: 0.6 }, viewport: { once: true }, whileHover: { scale: 1.1, y: -5 }, whileTap: { scale: 0.9 }, className: "p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg text-gray-300 hover:text-green-400 hover:bg-gray-800/70 transition-all duration-300", children: _jsx(social.icon, { size: 24 }) }, social.label))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-semibold text-white mb-6", children: "\u00C7al\u0131\u015Fma Saatleri" }), _jsx("div", { className: "bg-gray-800/50 backdrop-blur-sm rounded-lg p-6", children: _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-gray-300", children: "Pazartesi - Cuma" }), _jsx("span", { className: "text-green-400 font-medium", children: "09:00 - 18:00" })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-gray-300", children: "Cumartesi" }), _jsx("span", { className: "text-orange-400 font-medium", children: "10:00 - 16:00" })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-gray-300", children: "Pazar" }), _jsx("span", { className: "text-gray-500 font-medium", children: "Kapal\u0131" })] })] }) })] })] })] })] }) }));
};
export default Contact;
