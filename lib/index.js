"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImages = exports.getImage = void 0;
const blueimp_load_image_1 = __importDefault(require("blueimp-load-image"));
const getSources_1 = __importDefault(require("./getSources"));
const loadImage = (source, options) => {
    return new Promise((resolve, reject) => {
        if (!source) {
            reject();
            return;
        }
        (0, blueimp_load_image_1.default)(source, (image) => resolve(image.toDataURL()), Object.assign(Object.assign({}, options), { orientation: true, meta: true, canvas: true }));
    });
};
const loadImages = (sources, options) => {
    return Promise.all(sources.map((image) => loadImage(image, options)));
};
const getImage = (event, options) => {
    var _a;
    const image = (_a = (0, getSources_1.default)(event, Object.assign(Object.assign({}, options), { maxLoadImageCount: 1 }))[0]) !== null && _a !== void 0 ? _a : null;
    return loadImage(image);
};
exports.getImage = getImage;
const getImages = (event, options) => {
    return loadImages((0, getSources_1.default)(event, options));
};
exports.getImages = getImages;
