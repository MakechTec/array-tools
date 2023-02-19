import {Collection} from "../Collection";
import {Comparator} from "./Comparator";

export type SortingTool<T> = {

    sortByCriterial: (collection: Collection<T>, comparator: Comparator<T>) => Collection<T>;

};