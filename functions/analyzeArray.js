function analyzeArray(arr) {
    return {
        average: arrAvg(arr),
        min: arrMin(arr),
        max: arrMax(arr),
        length: arr.length,
    };
}

function arrAvg(arr) {
    return arr.reduce((previous, current) => (current += previous)) / arr.length;
}

function arrMin(arr) {
    return Math.min(...arr);
}

function arrMax(arr) {
    return Math.max(...arr);
}

module.exports = analyzeArray;