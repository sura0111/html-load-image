"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSourcesFromEvent = exports.getSourcesFromDragEvent = void 0;
const getIfDragEvent_1 = __importDefault(require("./getIfDragEvent"));
const getSourceFromHtml = (text) => {
    var _a, _b;
    const element = document.createElement('div');
    element.append(text !== null && text !== void 0 ? text : '');
    return (_b = (_a = element.querySelector('img')) === null || _a === void 0 ? void 0 : _a.src) !== null && _b !== void 0 ? _b : null;
};
const getSourcesFromDragEvent = (event, options) => {
    var _a, _b;
    const files = Array.from((_b = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files) !== null && _b !== void 0 ? _b : []);
    const imageFiles = files.filter((file) => /image/i.test(file.type)).slice(0, options === null || options === void 0 ? void 0 : options.maxLoadImageCount);
    if (imageFiles.length > 0) {
        return imageFiles;
    }
    const source = getSourceFromHtml();
    return source ? [source] : [];
};
exports.getSourcesFromDragEvent = getSourcesFromDragEvent;
const getSourcesFromEvent = (event, options) => {
    var _a, _b;
    const files = Array.from((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.files) !== null && _b !== void 0 ? _b : []);
    return files.filter((file) => /image/i.test(file.type)).slice(0, options === null || options === void 0 ? void 0 : options.maxLoadImageCount);
};
exports.getSourcesFromEvent = getSourcesFromEvent;
const getSources = (event, options) => {
    const dragEvent = (0, getIfDragEvent_1.default)(event);
    return dragEvent ? (0, exports.getSourcesFromDragEvent)(dragEvent, options) : (0, exports.getSourcesFromEvent)(event, options);
};
exports.default = getSources;
