import { Collection } from "../collection/Collection";
import {Stream} from "../streaming/Stream";

export class ArrayCollection<T> implements Collection<T>, Stream<T>{

    public constructor(private items: T[]){}

    public distinct(): ArrayCollection<T>{
        this.items = this.items.filter((item, index, self) => self.indexOf(item) === index);
        return this;
    }

    public map(callback: (item: T, index: number) => T): ArrayCollection<T>{
        this.items = this.items.map(callback);
        return this;
    }

    public forEach(callback: (item: T, index: number) => void): void{

        this.items.forEach(callback);

    }

    public toArray(): T[] {
        return [...this.items];
    }

    public mapTo<K>(callback: (item: T, index: number) => K): ArrayCollection<K>{

        const items: K[] = this.toArray().map(callback);

        return new ArrayCollection(items);
    }

    public getCopy(): ArrayCollection<T> {
        return new ArrayCollection<T>(this.items);
    }

    public size(): number{
        return this.items.length;
    }

    public get(index: number): T{
        return this.items[index];
    }

    public set(index:number, value: T): void{
        this.items[index] = value;
    }

    public add(value: T): void{
        this.items.push(value);
    }

    public static fromArray<T>(items: T[]): ArrayCollection<T>{
        return new ArrayCollection(items);
    }

    public static fromCollection<T>(collection: Collection<T>): ArrayCollection<T>{
        return new ArrayCollection(collection.toArray());
    }

}