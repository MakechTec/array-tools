import {Stream} from "../../streaming/Stream";
import {ArrayCollection} from "../../array_collection/ArrayCollection";

export class UnmodifiableArrayCollection<T> implements Stream<T>{

    constructor(private collection: ArrayCollection<T>){}

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