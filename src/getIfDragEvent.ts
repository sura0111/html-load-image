const dragEventTypes = ['drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop'] as const

const getIfDragEvent = (event: Event | DragEvent) => {
  const isDragEvent = dragEventTypes.find((type) => type === event.type)
  return isDragEvent ? (event as DragEvent) : null
}

export default getIfDragEvent
