import {ArrayCollection, Collection, DefaultGroupingTool} from "../../../index";

it("test groupByCriterial", async () => {

    const organizer: DefaultGroupingTool<string, string> = new DefaultGroupingTool();

    const noGrouped: Collection<string> = new ArrayCollection([ "a", "b", "c", "a", "b", "c"]);

    const alreadyGrouped: Collection<string[]> = organizer.groupByCriterial(noGrouped, item => item);

    expect(alreadyGrouped).toStrictEqual( new ArrayCollection([ ["a", "a"], ["b", "b"], ["c", "c"] ]) );

});