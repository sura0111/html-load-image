"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dragEventTypes = ['drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop'];
const getIfDragEvent = (event) => {
    const isDragEvent = dragEventTypes.find((type) => type === event.type);
    return isDragEvent ? event : null;
};
exports.default = getIfDragEvent;
