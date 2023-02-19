import {Collection} from "../../collection/Collection";
import {Comparator} from "./Comparator";

export type SortingTool<T> = {

    sort: (collection: Collection<T>, comparator: Comparator<T>) => Collection<T>;

};