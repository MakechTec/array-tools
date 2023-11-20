import { ConsumableCollection } from "../../collection/consumable/ConsumableCollection";
import { ArrayCollection } from "../../array_collection/ArrayCollection";
import {Stream} from "../../streaming/Stream";

export class Deque<T> implements ConsumableCollection<T>, Stream<T>{

    constructor(private collection: ArrayCollection<T>){}

    public pullFromStart(): T{
        return this.pullAt(0);
    }

    public pullFromEnd(): T{
        return this.pullAt(this.collection.size() -1);
    }

    public pullAt(index: number): T{
        const saved = this.collection.get(index);
        const modifiedArray = this.collection.toArray().splice(index, 1);
        this.collection = new ArrayCollection<T>(modifiedArray);
        return saved;
    }

    public indexOf(value: T): number{
        return this.collection.toArray().indexOf(value);
    }

    public distinct(): ArrayCollection<T>{
        return this.collection.distinct();
    }

    public toArray(): T[]{
        return this.collection.toArray();
    }

    public getCopy(): ArrayCollection<T>{
        return this.collection.getCopy();
    }

    public size(): number{
        return this.collection.size();
    }

    public get(index: number): T{
        return this.collection.get(index);
    }

    public set(index:number, value: T): void{
        return this.collection.set(index, value);
    }

    public add(value: T): void{
        return this.collection.add(value);
    }

    public map(callback: (item: T, index: number) => T): ArrayCollection<T>{
        return this.collection.map(callback);
    }

    public forEach(callback: (item: T, index: number) => void): void{
        this.collection.forEach(callback);
    }
    
    public mapTo<K>(callback: (item: T, index: number) => K): ArrayCollection<K>{
        return this.collection.mapTo(callback);
    }

    public static fromArray<T>(items: T[]): ArrayCollection<T>{
        return new ArrayCollection(items);
    }

    public static fromArrayCollection<T>(collection: ArrayCollection<T>): ArrayCollection<T>{
        return new ArrayCollection(collection.toArray());
    }

}