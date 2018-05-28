Math.round = function (number) {
    return number % 1 < 0.5 ? Math.floor(number) : Math.ceil(number);
};

Math.ceil = function (number) {
    if (number % 1 == 0) return number;
    return number - number % 1 + 1

};

Math.floor = function (number) {
    return number - number % 1
};