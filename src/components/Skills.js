import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Code, Database, Palette, Smartphone } from 'lucide-react';
const Skills = () => {
    const skillCategories = [
        {
            icon: Code,
            title: 'Frontend',
            color: 'from-green-400 to-green-600',
            skills: [
                { name: 'React', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'JavaScript', level: 95 },
                { name: 'HTML/CSS', level: 90 },
                { name: 'Vue.js', level: 80 }
            ]
        },
        {
            icon: Database,
            title: 'Backend',
            color: 'from-orange-400 to-orange-600',
            skills: [
                { name: 'Node.js', level: 85 },
                { name: 'Python', level: 80 },
                { name: 'Express.js', level: 90 },
                { name: 'MongoDB', level: 85 },
                { name: 'PostgreSQL', level: 80 }
            ]
        },
        {
            icon: Palette,
            title: 'Design',
            color: 'from-yellow-400 to-yellow-600',
            skills: [
                { name: 'Figma', level: 85 },
                { name: 'Adobe XD', level: 80 },
                { name: 'Photoshop', level: 75 },
                { name: 'UI/UX', level: 90 },
                { name: 'Prototyping', level: 85 }
            ]
        },
        {
            icon: Smartphone,
            title: 'Mobile',
            color: 'from-purple-400 to-purple-600',
            skills: [
                { name: 'React Native', level: 80 },
                { name: 'Flutter', level: 75 },
                { name: 'Mobile UI', level: 85 },
                { name: 'App Store', level: 70 },
                { name: 'PWA', level: 90 }
            ]
        }
    ];
    return (_jsx("section", { id: "yetenekler", className: "py-20 bg-gradient-to-b from-gray-800 to-gray-900", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: _jsx("span", { className: "bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent", children: "Yetenekler" }) }), _jsx("p", { className: "text-gray-400 text-lg max-w-3xl mx-auto", children: "Modern teknolojilerde uzmanla\u015Fm\u0131\u015F, s\u00FCrekli \u00F6\u011Frenmeye odakl\u0131 bir geli\u015Ftiriciyim." })] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: skillCategories.map((category, categoryIndex) => (_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: categoryIndex * 0.1, duration: 0.8 }, viewport: { once: true }, className: "bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300", children: [_jsxs("div", { className: "flex items-center mb-6", children: [_jsx("div", { className: `p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`, children: _jsx(category.icon, { className: "text-white", size: 24 }) }), _jsx("h3", { className: "text-xl font-semibold text-white", children: category.title })] }), _jsx("div", { className: "space-y-4", children: category.skills.map((skill, skillIndex) => (_jsxs(motion.div, { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.6 }, viewport: { once: true }, className: "space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-gray-300 text-sm font-medium", children: skill.name }), _jsxs("span", { className: "text-gray-400 text-xs", children: [skill.level, "%"] })] }), _jsx("div", { className: "w-full bg-gray-700 rounded-full h-2", children: _jsx(motion.div, { initial: { width: 0 }, whileInView: { width: `${skill.level}%` }, transition: { delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, duration: 1 }, viewport: { once: true }, className: `h-2 rounded-full bg-gradient-to-r ${category.color}` }) })] }, skill.name))) })] }, category.title))) }), _jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, viewport: { once: true }, className: "mt-16", children: [_jsx("h3", { className: "text-2xl font-semibold text-center text-green-400 mb-8", children: "Di\u011Fer Yetenekler" }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [
                                'Git & GitHub', 'Docker', 'AWS', 'Firebase',
                                'REST APIs', 'GraphQL', 'Redux', 'Next.js',
                                'Tailwind CSS', 'Sass', 'Jest', 'Cypress',
                                'Agile', 'Scrum', 'Jira', 'Figma'
                            ].map((skill, index) => (_jsx(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { delay: index * 0.05, duration: 0.6 }, viewport: { once: true }, whileHover: { scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.1)' }, className: "p-3 bg-gray-800/50 rounded-lg text-center text-gray-300 hover:text-green-400 transition-all duration-300 cursor-pointer", children: skill }, skill))) })] })] }) }));
};
export default Skills;
