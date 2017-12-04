// quick server rendering. re-written because I completely lost the last copy

const { readFileSync } = require("fs");
const React = require("react");
const { renderToString } = require("react-dom/server");
const App = require("./index.js").App;

const reactElement = React.createElement(App);
const templatePath = "./build/index-template.html";
const elementId = "root";

const template = readFileSync(templatePath, "utf8");
const app = renderToString(reactElement);
const markup = template.replace(`<div id="${elementId}"></div>`, app);

console.log(markup); // print markup so it can be piped into index.html
