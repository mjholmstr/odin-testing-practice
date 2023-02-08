const capitalize = require('../functions/capitalize');

describe('capitalize', () => {
    test('return string with first letter capitalized', () => {
        expect(capitalize("abcdefg")).toBe('Abcdefg');
    });
    test('return string with first letter capitalized', () => {
        expect(capitalize("the first letter is capital")).toBe('The first letter is capital');
    });
})