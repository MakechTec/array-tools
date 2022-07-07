# ArrayTools #

It has two methods actually:

    function group(inputArray: any[], predicated: Function): any[];
    function distinct(inputArray: any[]): any[];

## Grouping: ##

It groups an array with the returned string as criterial, for example:

    import {ArrayTools} from "@makechtec/array-tools";

    let elements = [
        {
            name: "foo",
            value: "n1",
        },
        {
            name: "foo",
            value: "v1",
        },
        {
            name: "bar",
            value: "n2",
        },
        {
            name: "bar",
            value: "v2",
        },
    ];

    let grouped = ArrayTools.group(elements, (element) => {
        return element.name;
    });

    console.log(grouped);

The result is:

    [
        [
            {
                name: "foo",
                value: "n1",
            },
            {
                name: "foo",
                value: "v1",
            },
        ],
        [
            {
                name: "bar",
                value: "n2",
            },
            {
                name: "bar",
                value: "v2",
            },
        ]
        
    ]

## Distinct ##

It returns a non duplicated element array, for example:

    import {ArrayTools} from "@makechtec/array-tools";

    let elements = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];

    let distinct = ArrayTools.distinct(elements);

    console.log(distinct);

The result is:

    [1,2,3,4,5,6,7,8,9,10]