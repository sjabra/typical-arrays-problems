exports.min = function min(array) {
    if (!array || array.length == 0) return 0;
    return array.reduce((min, value) => (value < min ? value : min));
};

exports.max = function max(array) {
    if (!array || array.length == 0) return 0;
    return array.reduce((max, value) => (value > max ? value : max));
};

exports.avg = function avg(array) {
    if (!array || array.length == 0) return 0;
    return array.reduce((avg, value) => avg + value) / array.length;
};
