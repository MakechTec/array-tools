
import {BubbleSorting} from "../../../index";
import {ArrayCollection, Collection, SortingTool} from "../../../index";
import {Comparator} from "../../../index";

it("test sorting by criterial", async () => {
    const nameSorter: SortingTool<string> = new BubbleSorting<string>();

    const names: Collection<string> = ArrayCollection.fromArray(["Angel", "Jhon", "Charles"]);

    const nameComparator: Comparator<string> = {
        compare(a: string, b: string): number {
            return a.localeCompare(b);
        }
    };

    const result: Collection<string> = nameSorter.sortByCriterial(names, nameComparator);

    expect(result).toStrictEqual(ArrayCollection.fromArray(["Angel", "Charles", "Jhon"]));

});