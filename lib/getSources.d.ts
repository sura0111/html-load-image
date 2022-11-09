import { LoadImagesOptions } from './definitions';
export declare const getSourcesFromDragEvent: (event: DragEvent, options?: LoadImagesOptions) => File[] | string[];
export declare const getSourcesFromEvent: (event: Event, options?: LoadImagesOptions) => File[];
declare const getSources: (event: Event, options?: LoadImagesOptions) => File[] | string[];
export default getSources;
