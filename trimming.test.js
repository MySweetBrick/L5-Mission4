const trimString = require("./trimming");

describe("string trim punctuation", function () {
    

    const testCases = [
        {
            input: "hello world",
            output: "hello world",
        },
        {
            input: "hello%world",
            output: "helloworld",
        },
        {
            input: "!hello world",
            output: " hello world",
        },
        {
            input: ";hello?world!",
            output: " hello world ",
        },
        {
            input: "hello;world",
            output: "hello world",
        },
        {
            input: "hello world?",
            output: "hello world ",
        }
    ]

    testCases.map(tc => {
        it(`returns ${tc.output} when ${tc.input}`, () => {
            const returned = trimString(tc.output);
            const expected = trimString(tc.input);
            expect(returned).toBe(expected);
        })
    })
})