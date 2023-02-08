const analyzeArray = require("../functions/analyzeArray");

describe("Analyze Array", () => {
    test("test 1", () => {
        expect(analyzeArray([3, 7, 6, 4, 12])).toMatchObject({
            average: 6.4,
            min: 3,
            max: 12,
            length: 5,
        });
    });
})