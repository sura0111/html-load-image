import { LoadImageOptions, LoadImagesOptions } from './definitions';
export declare const loadImage: (source: string | File | Blob | null, options?: LoadImageOptions) => Promise<string>;
export declare const loadImages: (sources: (string | File | Blob)[], options?: LoadImagesOptions) => Promise<string[]>;
export declare const getImage: (event: Event, options?: LoadImageOptions) => Promise<string>;
export declare const getImages: (event: Event, options?: LoadImagesOptions) => Promise<string[]>;
