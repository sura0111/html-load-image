import { LoadImageOptions as BlueImpLoadImageOptions } from 'blueimp-load-image';
export declare type LoadImageOptions = Omit<BlueImpLoadImageOptions, 'orientation' | 'meta' | 'canvas'>;
export declare type LoadImagesOptions = LoadImageOptions & {
    maxLoadImageCount: number;
};
