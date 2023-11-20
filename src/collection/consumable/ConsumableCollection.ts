import { Collection } from "../Collection";

export type ConsumableCollection<T> = Collection<T> & {
    pullAt: (index: number) => T;
    indexOf: (value: T) => number;
}