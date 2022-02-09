"use strict";
exports.__esModule = true;
var react_1 = require("react");
var components_1 = require("../components");
function Home() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(components_1.Htag, { tag: 'h1' }, "\u0422\u0435\u043A\u0441\u0442"),
        react_1["default"].createElement(components_1.Button, { appearance: 'primary', className: "default", arrow: 'right' }, "\u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"),
        react_1["default"].createElement(components_1.Button, { appearance: 'ghost', arrow: 'down' }, "\u0427\u0438\u0442\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B"),
        react_1["default"].createElement(components_1.P, { size: 'l' }, "\u0411\u043E\u043B\u044C\u0448\u043E\u0439"),
        react_1["default"].createElement(components_1.P, null, "\u0441\u0440\u0435\u0434\u043D\u0438\u0439"),
        react_1["default"].createElement(components_1.P, { size: 's' }, "\u041C\u0430\u043B\u044B\u0439")));
}
exports["default"] = Home;

//# sourceMappingURL=index.js.map
