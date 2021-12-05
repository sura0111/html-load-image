import blueImpLoadImage from 'blueimp-load-image'
import { LoadImageOptions, LoadImagesOptions } from './definitions'
import getSources from './getSources'

const loadImage = (source: string | File | Blob | null, options?: LoadImagesOptions): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!source) {
      reject()
      return
    }
    blueImpLoadImage(source, (image) => resolve((image as HTMLCanvasElement).toDataURL()), {
      ...options,
      orientation: true,
      meta: true,
      canvas: true,
    })
  })
}

const loadImages = (sources: (string | File | Blob)[], options?: LoadImagesOptions) => {
  return Promise.all(sources.map((image) => loadImage(image, options)))
}

export const getImage = (event: Event, options?: LoadImageOptions) => {
  const image: string | File | null = getSources(event, { ...options, maxLoadImageCount: 1 })[0] ?? null
  return loadImage(image)
}

export const getImages = (event: Event, options?: LoadImagesOptions) => {
  return loadImages(getSources(event, options))
}
