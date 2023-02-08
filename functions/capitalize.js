function capitalize(string) {
    if (!string) return "";

    let firstChar = string[0].toUpperCase();

    for(let i = 1 ; i < string.length ; i++) {
        firstChar+=string[i];
    }
    return firstChar;
}


module.exports = capitalize;