import { LoadImageOptions as BlueImpLoadImageOptions } from 'blueimp-load-image'

export type LoadImageOptions = Exclude<BlueImpLoadImageOptions, 'orientation' | 'meta' | 'canvas'>
export type LoadImagesOptions = LoadImageOptions & { maxLoadImageCount: number }
