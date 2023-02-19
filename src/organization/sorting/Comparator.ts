
export type Comparator<T> = {
    compare(reference: T, value: T): number;
};

export const MORE = 1;
export const LESS = -1;

export const EQUALS = 0;