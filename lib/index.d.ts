import { LoadImageOptions, LoadImagesOptions } from './definitions';
export declare const getImage: (event: Event, options?: LoadImageOptions | undefined) => Promise<string>;
export declare const getImages: (event: Event, options?: LoadImagesOptions | undefined) => Promise<string[]>;
