const { reverseString } =  require("../functions/reverseString");

describe("Reverse string test", () => {
    test("string1", () => {
        expect(reverseString("harlow")).toBe("wolrah");
    })
    test("string2", () => {
        expect(reverseString("My name is")).toBe("si eman yM");
    })
    test("undefined", () => {
        expect(reverseString()).toBe("");
    })
})