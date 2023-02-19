
import {ArrayCollection} from "../array_collection/ArrayCollection";
import {SortingTool} from "../organization/sorting/SortingTool";
import {Collection} from "../organization/Collection";
import {Comparator, EQUALS, LESS} from "../organization/sorting/Comparator";

export class BubbleSorting<T> implements SortingTool<T> {
    sortByCriterial(collection: Collection<T>, comparator: Comparator<T>): Collection<T> {

        const arrayCollection: ArrayCollection<T> = ArrayCollection.fromCollection(collection);

        for (let i: number = 0; i < arrayCollection.size(); i++) {

            for (let j: number = 0; j < (arrayCollection.size() - i - 1); j++) {

                let comparationResult: number = comparator.compare(arrayCollection.get(j), arrayCollection.get(j+1));

                if(comparationResult === EQUALS || comparationResult === LESS){
                    continue;
                }

                let temp = arrayCollection.get(j);

                arrayCollection.set(j, arrayCollection.get(j + 1));
                arrayCollection.set(j + 1, temp);

            }
        }

        return arrayCollection;
    }

}