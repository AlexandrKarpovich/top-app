"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var Button_module_css_1 = require("./Button.module.css");
var arrow_svg_1 = require("./arrow.svg");
var classnames_1 = require("classnames");
exports.Button = function (_a) {
    var _b, _c;
    var appearance = _a.appearance, _d = _a.arrow, arrow = _d === void 0 ? 'none' : _d, children = _a.children, className = _a.className, props = __rest(_a, ["appearance", "arrow", "children", "className"]);
    return (React.createElement("button", __assign({ className: classnames_1["default"](Button_module_css_1["default"].button, className, (_b = {},
            _b[Button_module_css_1["default"].primary] = appearance == 'primary',
            _b[Button_module_css_1["default"].ghost] = appearance == 'ghost',
            _b)) }, props),
        children,
        arrow != 'none' && React.createElement("span", { className: classnames_1["default"](Button_module_css_1["default"].arrow, (_c = {},
                _c[Button_module_css_1["default"].down] = arrow == 'down',
                _c)) },
            React.createElement(arrow_svg_1["default"], null))));
};

//# sourceMappingURL=Button.js.map
