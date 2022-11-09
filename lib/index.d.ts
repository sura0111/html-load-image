import { LoadImageOptions, LoadImagesOptions } from './definitions';
export declare const getImage: (event: Event, options?: LoadImageOptions) => Promise<string>;
export declare const getImages: (event: Event, options?: LoadImagesOptions) => Promise<string[]>;
