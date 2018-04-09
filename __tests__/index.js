"use strict";
const showdown_loader = require("../index.js");

test("showdown-markdown-loader:index", () => {
  expect(showdown_loader.call({ query: {} }, "# Heading")).toBe(
    '<h1 id="heading">Heading</h1>'
  );
});

test("showdown-markdown-loader:index", () => {
  expect(
    showdown_loader.call({ query: { completeHTMLDocument: true } }, "# Heading")
  ).toBe(
    '<!DOCTYPE HTML>\n<html>\n<head>\n<meta charset="utf-8">\n</head>\n<body>\n<h1 id="heading">Heading</h1>\n</body>\n</html>'
  );
});
