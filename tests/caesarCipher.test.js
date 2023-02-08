const caesarCipher = require("../functions/caesarCipher");

describe("Caesar Cipher", () => {
    test("single letter 1", () => {
        expect(caesarCipher("a", 1)).toBe("b");
    });
    test("single letter 2", () => {
        expect(caesarCipher("f", 7)).toBe("m");
    });
    test("single letter 3", () => {
        expect(caesarCipher("v", 12)).toBe("h");
    });
    test("string with spaces", () => {
        expect(caesarCipher("string with spaces", 1)).toBe("tusjoh xjui tqbdft");
    })

})