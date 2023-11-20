
export type Stream<T> = {

    map: (callback: (item: T, index: number) => T) => Stream<T>;

    forEach: (consumer: (item: T, index: number) => void) => void;
    
    mapTo: <K>(callback: (item: T, index: number) => K) => Stream<K>;


};
