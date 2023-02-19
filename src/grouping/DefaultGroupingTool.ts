import { Collection } from "../organization/Collection";
import { Criterial } from "../organization/Criterial";
import { GroupingTool } from "../organization/GroupingTool";
import {ArrayCollection} from "../array_collection/ArrayCollection";

export class DefaultGroupingTool<T, K> implements GroupingTool<T, K>{

    public groupByCriterial(entryCollection: Collection<T>, criterial: Criterial<T, K>): Collection<T[]>{

        const collection: ArrayCollection<T> = new ArrayCollection(entryCollection.toArray());

        let pointers: ArrayCollection<Pointer<K>> = collection.mapTo((item: T, index: number) => {
            return new Pointer(criterial(item), index);
        });

        return pointers.mapTo(item => item.criterialToOrder)
                    .distinct()
                    .mapTo(item => pointers.toArray().filter(pointer => pointer.criterialToOrder === item) )
                    .mapTo(group => group.map(item => collection.toArray()[item.index]) );

    }

}

class Pointer<T> {
    public constructor(public criterialToOrder: T, public index: number) {}
}