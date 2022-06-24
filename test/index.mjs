import {ArrayTools} from "../index.js";

let elements = [
    {
        name: "1.name",
        value: "n1",
    },
    {
        name: "1.value",
        value: "v1",
    },
    {
        name: "2.name",
        value: "n2",
    },
    {
        name: "2.value",
        value: "v2",
    },
];

let grouped = ArrayTools.group(elements, (element) => {
    return element.name.substring(0, 2);
});

console.log(grouped);