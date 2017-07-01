// quick server rendering. re-written because I completely lost the last copy

const { readFileSync } = require("fs");
const { renderToString } = require("react-dom/server");

module.exports = {
  render({ reactElement, templatePath, elementId }) {
    const template = readFileSync(templatePath, "utf8");
    const app = renderToString(reactElement);
    const markup = template.replace(`<div id="${elementId}"></div>`, app);
    console.log(markup);
  }
};
