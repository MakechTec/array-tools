import { Collection } from "../../collection/Collection";
import { Criterial } from "./Criterial";

export type GroupingTool<T, K> = {

    groupByCriterial: (collection: Collection<T>, criterial: Criterial<T, K>) => Collection<T[]>;

};