import { LoadImagesOptions } from './definitions';
export declare const getSourcesFromDragEvent: (event: DragEvent, options?: LoadImagesOptions | undefined) => File[] | string[];
export declare const getSourcesFromEvent: (event: Event, options?: LoadImagesOptions | undefined) => File[];
declare const getSources: (event: Event, options?: LoadImagesOptions | undefined) => File[] | string[];
export default getSources;
