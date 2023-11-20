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

Returns a new collection with unique elements like:

    const numbers = new ArrayCollection<number>([1,2,2,3,3]);
    const uniqueNumbers = numbers.distinct();

    console.log(uniqueNumbers); // prints [1,2,3]


    toArray: () => T[];

Returns an array containing a copy of collection elements.

    getCopy(): Collection<T>;

Clone the current collection and returns a new instance.

    size(): number;

Returns collection length.

    get(index: number): T;

Gets element at given index.

    set(index: number, value: T): void;

Replaces the element at given index with given value.

    add(value: T): void;

Add the given value to collection.


## Grouping: ##

Calls DefaultGroupingTool to group elements inside a given collection, the value returned by given function
is used to identify the similar elements. By example:

    import {ArrayCollection, Collection, DefaultGroupingTool, GroupingTool} from "@makechtec/array-tools";

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

First argument is datatype for collection, second argument is datataye for each function result. Let's look it up by dealing objects:

in __./types.ts__ file we got:

    export type EventListenerPointer = {
        eventName: string;
        eventListener: EventListener;
    };

Then in another file:

    import {ArrayCollection, Collection, DefaultGroupingTool, GroupingTool} from "@makechtec/array-tools";
    import {EventListenerPointer} from "./types";

    const pointers: EventListenerPointer[] = [
        {
            eventName: "click",
            eventListener: (ev) => console.log("clicked!!");
        },
        {
            eventName: "hover",
            eventListener: (ev) => console.log("hover!!");
        },
        {
            eventName: "click",
            eventListener: (ev) => console.log("clicked!!");
        },
        {
            eventName: "hover",
            eventListener: (ev) => console.log("hover!!");
        }
    ];

    const organizer: GroupingTool<EventListenerPointer, string> = new DefaultGroupingTool();

    const collection: Collection<EventListenerPointer> = new ArrayCollection(pointers);

    const groupedCollection: Collection<EventListenerPointer> = 
        organizer.groupByCriterial(collection, pointer => pointer.eventName);

    console.log(groupedCollection.toArray());

    //will print

    [
        [
            {
                eventName: "click",
                eventListener: (ev) => console.log("clicked!!");
            },
            {
                eventName: "click",
                eventListener: (ev) => console.log("clicked!!");
            }
        ],
        [
            {
                eventName: "hover",
                eventListener: (ev) => console.log("hover!!");
            },
            {
                eventName: "hover",
                eventListener: (ev) => console.log("hover!!");
            }
        ]
    ]


## Sorting ##

You can use default bubble sorter or create custome one, by implementing SortingTool<T> interface then, we create a new Comparator implementation, this will tell sorter, what element is considered with major value. 

- If first element is greater than second, comparator must returns 1.

- If first element is less than second, comparator must returns -1.

- If first element is equal to second, comparator must returns 0.

With all components ready we can call sortByCriterial method, passing collection and comparator.


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

This is an implementation of Collection and Stream, it will add more functionality to native Array type.

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

This interface tries to copy native array javascript API. Only for development purposes.

    map: (callback: (item: T, index: number) => T) => Stream<T>;

Same as map for Array.prototype.map.

    forEach: (consumer: (item: T, index: number) => void) => void;

Same as map for Array.prototype.forEach.

    mapTo: <K>(callback: (item: T, index: number) => K) => Stream<K>;

Same as map for Array.prototype.map but when we return a different value than the original.