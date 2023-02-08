function caesarCipher(string, shiftFactor) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";
    let stringLower = string.toLowerCase();

    for ( let i = 0 ; i < string.length; i++) {
        if (stringLower[i] !== " ") {
            let index = alphabet.indexOf(stringLower[i]);
            result += alphabet[(index + shiftFactor) % 26];
        } else {
            result += " ";
        }
    }

    return result;
}

module.exports = caesarCipher;