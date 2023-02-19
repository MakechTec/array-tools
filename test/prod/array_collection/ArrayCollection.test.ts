import {ArrayCollection, Collection, Stream} from "../../../index";

it("testing distinct", async () => {
    const arrayCollection: Collection<string> = new ArrayCollection(["one", "two", "two"]);

    expect(arrayCollection.distinct()).toStrictEqual(new ArrayCollection(["one", "two"]));

});

it("testing toArray", async () => {
    const arrayCollection: Collection<string> = new ArrayCollection(["one", "two", "two"]);

    expect(arrayCollection.toArray()).toStrictEqual(["one", "two", "two"]);
});

it("testing map", async () => {
    const arrayCollection: Stream<string> = new ArrayCollection(["one", "two", "two"]);

    expect(arrayCollection.map( item => item+1 )).toStrictEqual(new ArrayCollection(["one1", "two1", "two1"]));
});

it("testing getCopy", async () => {
    const arrayCollection: Collection<string> = new ArrayCollection(["one", "two", "two"]);

    const arrayCollection2: Collection<string> = arrayCollection.getCopy();

    arrayCollection2.distinct();

    expect(arrayCollection).toStrictEqual(new ArrayCollection(["one", "two", "two"]));
});

it("testing map", async () => {
    const arrayCollection: Stream<string> = new ArrayCollection(["1", "2", "3"]);

    expect(arrayCollection.mapTo( item => parseInt(item) + 1 )).toStrictEqual(new ArrayCollection([2, 3, 4]));
});