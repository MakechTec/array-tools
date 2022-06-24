
export const ArrayTools = {
    by: (inputArray: Array<any>, predicated: Function) => {

        let pointers = inputArray.map((item: any, index: number) => {
            return {
                criterial: predicated(item),
                index: index
            };
        });

        let onlyStrings = pointers.map((item: any) => {
            return item.criterial;
        });

        let noRepeated = ArrayTools.distinct(onlyStrings);

        let grouped = noRepeated.map((item: any) => {

            return pointers.filter((pointer: any) => {
                return pointer.criterial === item;
            });
        });

        let outputArray = grouped.map((group: any) => {
            return group.map((item: any) => {
                return inputArray[item.index];
            });
        });

        return outputArray;

    },

    distinct: (inputArray: Array<any>) => {
        return inputArray.filter((item, index, self) => self.indexOf(item) === index);
    }


};
