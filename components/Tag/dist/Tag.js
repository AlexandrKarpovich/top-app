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
var Tag_module_css_1 = require("./Tag.module.css");
var classnames_1 = require("classnames");
exports.Tag = function (_a) {
    var _b;
    var _c = _a.size, size = _c === void 0 ? 's' : _c, children = _a.children, _d = _a.color, color = _d === void 0 ? 'ghost' : _d, href = _a.href, className = _a.className, props = __rest(_a, ["size", "children", "color", "href", "className"]);
    return (React.createElement("div", __assign({ className: classnames_1["default"](Tag_module_css_1["default"].tag, className, (_b = {},
            _b[Tag_module_css_1["default"].s] = size == 's',
            _b[Tag_module_css_1["default"].m] = size == 'm',
            _b[Tag_module_css_1["default"].ghost] = color == 'ghost',
            _b[Tag_module_css_1["default"].grey] = color == 'grey',
            _b[Tag_module_css_1["default"].green] = color == 'green',
            _b[Tag_module_css_1["default"].primary] = color == 'primary',
            _b)) }, props), href
        ? React.createElement("a", { href: href }, children)
        : React.createElement(React.Fragment, null, children)));
};

//# sourceMappingURL=Tag.js.map
