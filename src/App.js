"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Navbar_1 = require("./components/Navbar");
var Hero_1 = require("./components/Hero");
var About_1 = require("./components/About");
var Skills_1 = require("./components/Skills");
var Projects_1 = require("./components/Projects");
var Contact_1 = require("./components/Contact");
var Footer_1 = require("./components/Footer");
var App = function () {
    return (<div className="app">
      <Navbar_1.default />
      <main>
        <Hero_1.default />
        <About_1.default />
        <Skills_1.default />
        <Projects_1.default />
        <Contact_1.default />
      </main>
      <Footer_1.default />
    </div>);
};
exports.default = App;
