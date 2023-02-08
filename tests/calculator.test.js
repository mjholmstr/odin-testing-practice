const Calculator = require("../functions/calculator");

describe("Calculator function test", () => {
    let calculator;

    beforeEach(function () {
        calculator = new Calculator();
    });

    test("Add", () => {
        expect(calculator.add(4, 18)).toEqual(22);
    })
    test("Subtract", () => {
        expect(calculator.subtract(17, 6)).toEqual(11);
    });
    test("Divide", () => {
        expect(calculator.divide(75, 3)).toEqual(25);
    });
    test("Multiply", () => {
        expect(calculator.multiply(4, 7)).toEqual(28);
    })
})