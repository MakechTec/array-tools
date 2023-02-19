
export declare type Criterial<T, K> = (value: T) => K;

export type Collection<T> = {
    distinct: () => Collection<T>;
    toArray: () => T[];
    getCopy(): Collection<T>;

    size(): number;

    get(index: number): T;

    set(index:number, value: T): void;

    add(value: T): void;

};

export type Stream<T> = {

    map: (callback: (item: T, index: number) => T) => Stream<T>;
    mapTo: <K>(callback: (item: T, index: number) => K) => Stream<K>;


};

export type GroupingTool<T, K> = {

    groupByCriterial: (collection: Collection<T>, criterial: Criterial<T, K>) => Collection<T[]>;

};

export type SortingTool<T> = {

    sort: (collection: Collection<T>, comparator: Comparator<T>) => Collection<T>;

};

export type Comparator<T> = {
    compare(reference: T, value: T): number;
};

export const MORE = 1;
export const LESS = -1;

export const EQUALS = 0;

export declare class ArrayCollection<T> implements Collection<T>, Stream<T>{
    private items;
    constructor(items: T[]);
    distinct(): ArrayCollection<T>;
    map(callback: (item: T, index: number) => T): ArrayCollection<T>;
    toArray(): T[];
    mapTo<K>(callback: (item: T, index: number) => K): ArrayCollection<K>;
    getCopy(): ArrayCollection<T>;

    forEach(callback: (item: T, index: number) => void): void;

    size(): number;

    get(index: number): T;

    set(index:number, value: T): void;

    add(value: T): void;

    public static fromArray<T>(items: T[]): ArrayCollection<T>;

    public static fromCollection<T>(collection: Collection<T>): ArrayCollection<T>;
}

export declare class DefaultGroupingTool<T, K> implements Organizer<T, K> {
    groupByCriterial(collection: Collection<T>, criterial: Criterial<T, K>): Collection<T[]>;
}

export class BubbleSorting<T> implements SortingTool<T> {
    sortByCriterial(collection: Collection<T>, comparator: Comparator<T>): Collection<T>;

}