import { LoadImageOptions as BlueImpLoadImageOptions } from 'blueimp-load-image';
export declare type LoadImageOptions = Omit<BlueImpLoadImageOptions, 'orientation' | 'meta' | 'canvas'>;
export interface LoadImagesOptions extends LoadImageOptions {
    maxLoadImageCount?: number;
}
