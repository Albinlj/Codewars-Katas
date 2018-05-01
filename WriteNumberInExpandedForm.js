function expandedForm(num) {
    return num.toString()
        .split('')
        .map((element, index, array) => element * Math.pow(10, (array.length - index - 1)))
        .filter(a => a > 0)
        .join(' + ')

}

console.log(expandedForm(9087));
// console.log(expandedForm(42));
// console.log(expandedForm(70304));