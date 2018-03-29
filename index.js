"use strict";

const showdown = require("showdown");
const loaderUtils = require("loader-utils");

module.exports = function(markdown) {
    showdown.setFlavor("github");

    const defaults = showdown.getDefaultOptions();
    const loaderOptions = loaderUtils.getOptions(this);

    // need to force the creation of a complete html document
    const options = Object.assign({}, defaults, loaderOptions);

    let converter = new showdown.Converter(options);

    return converter.makeHtml(markdown);
};
