# ArrayTools #

## Index ## 

- Collection
- Grouping
- Sorting
- ArrayCollection
- Stream

## Collection ##

Is an interface that contains the following methods:

    distinct: () => Collection<T>;

Compare the elements in the collection, and returns the same collection reference. 
This method changes the current collection items.

    toArray: () => T[];

Returns an array containing a copy of the collection elements.

    getCopy(): Collection<T>;

Clone the current collection and returns a new instance.

    size(): number;

Returns the collection length.

    get(index: number): T;

Get the element at the given index.

    set(index: number, value: T): void;

Replaces the element at the given index with the given value.

    add(value: T): void;

Add the given value to the collection.


## Grouping: ##

The DefaultGroupingTool groups the elements inside the given collection in arrays, the value returned by the given function
is used to identify the similar elements.

    import {ArrayCollection, Collection, DefaultGroupingTool, GroupingTool} from "../../../index";

    const organizer: GroupingTool<string, string> = new DefaultGroupingTool();

    const noGrouped: Collection<string> = new ArrayCollection([ "a", "b", "c", "a", "b", "c"]);

    const alreadyGrouped: Collection<string[]> = organizer.groupByCriterial(noGrouped, item => item);

    console.log(alreadyGrouped.toArray());

The result is:

    [ 
        ["a", "a"], 
        ["b", "b"], 
        ["c", "c"] 
    ]

## Sorting ##

First we create a new sorter, the default type that we cat find in the array-tools module 
is a simple bubble sorter algorithm. 

Then we prepare our collection to be sorted.

After, we create a new Comparator implementation, this tells the sorter, what element is
considered with the major value. 

If the first element is greater than the second, then the comparator must returns 1.

If the first element is less than the second, then the comparator must returns -1.

If the first element is equal to the second, then the comparator must returns 0.

With all components ready whe call the sortByCriterial method, passing the collection and the comparator.

    import {BubbleSorting, ArrayCollection, Collection, SortingTool, Comparator} from "@makechtec/array-tools";

    const nameSorter: SortingTool<string> = new BubbleSorting<string>();

    const names: Collection<string> = ArrayCollection.fromArray(["Angel", "Jhon", "Charles"]);

    const nameComparator: Comparator<string> = {
        compare(a: string, b: string): number {
            return a.localeCompare(b);
        }
    };

    const result: Collection<string> = nameSorter.sortByCriterial(names, nameComparator);

    console.log(result.toArray();

The result is:

    ["Angel", "Charles", "Jhon"]

## ArrayCollection ##

This is an implementation of Collection and Stream, it tries to add more functionality to
native Array type.

Methods inherited from Collection interface:

    distinct(): ArrayCollection<T>;

    toArray(): T[];

    getCopy(): ArrayCollection<T>;

    size(): number;

    get(index: number): T;

    set(index:number, value: T): void;

    add(value: T): void;

Methods inherited from Stream interface:

    map(callback: (item: T, index: number) => T): ArrayCollection<T>;

    mapTo<K>(callback: (item: T, index: number) => K): ArrayCollection<K>;

    forEach(callback: (item: T, index: number) => void): void;

Own methods:

    static fromArray<T>(items: T[]): ArrayCollection<T>;

Create a new ArrayCollection with the given array.

    static fromCollection<T>(collection: Collection<T>): ArrayCollection<T>;

Create a new ArrayCollection with the given collection.

## Stream ##

It is an interface that tries to copy the native array javascript API. Only for development purposes.

    map: (callback: (item: T, index: number) => T) => Stream<T>;

Same as map for Array.prototype.map.

    forEach: (consumer: (item: T, index: number) => void) => void;

Same as map for Array.prototype.forEach.

    mapTo: <K>(callback: (item: T, index: number) => K) => Stream<K>;

Same as map for Array.prototype.map but when we return a different value than the original.