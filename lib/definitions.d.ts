import { LoadImageOptions as BlueImpLoadImageOptions } from 'blueimp-load-image';
export declare type LoadImageOptions = Exclude<BlueImpLoadImageOptions, 'orientation' | 'meta' | 'canvas'>;
export declare type LoadImagesOptions = BlueImpLoadImageOptions & {
    maxLoadImageCount: number;
};
