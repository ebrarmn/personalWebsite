import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
    return (_jsxs("div", { className: "app", children: [_jsx(Navbar, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] }));
};
export default App;
