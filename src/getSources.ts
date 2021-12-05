import { LoadImagesOptions } from './definitions'
import getIfDragEvent from './getIfDragEvent'

const getSourceFromHtml = (text?: string) => {
  const element = document.createElement('div')
  element.append(text ?? '')
  return element.querySelector('img')?.src ?? null
}

export const getSourcesFromDragEvent = (event: DragEvent, options?: LoadImagesOptions) => {
  const files = Array.from(event.dataTransfer?.files ?? [])
  const imageFiles = files.filter((file) => /image/i.test(file.type)).slice(0, options?.maxLoadImageCount)

  if (imageFiles.length > 0) {
    return imageFiles
  }

  const source = getSourceFromHtml()
  return source ? [source] : []
}

export const getSourcesFromEvent = (event: Event, options?: LoadImagesOptions) => {
  const files = Array.from((event.target as HTMLInputElement)?.files ?? [])
  return files.filter((file) => /image/i.test(file.type)).slice(0, options?.maxLoadImageCount)
}

const getSources = (event: Event, options?: LoadImagesOptions) => {
  const dragEvent = getIfDragEvent(event)
  return dragEvent ? getSourcesFromDragEvent(dragEvent, options) : getSourcesFromEvent(event, options)
}

export default getSources
