'use strict';

const showdown = require('../index.js');

test('showdown-markdown-loader:index', () => {
    expect(showdown.call({ completeHTMLDocument: true }, "# Heading")).toBe(
      //        "<!DOCTYPE HTML>\n<html>\n<head>\n<meta charset=\"utf-8\">\n</head>\n<body>\n<h1 id=\"heading\">Heading</h1>\n</body>\n</html>"
      "<h1 id=\"heading\">Heading</h1>"
    );
});
