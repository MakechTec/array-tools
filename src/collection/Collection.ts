
export type Collection<T> = {
    
    distinct: () => Collection<T>;

    toArray: () => T[];

    getCopy(): Collection<T>;

    size(): number;

    get(index: number): T;

    set(index: number, value: T): void;

    add(value: T): void;

};