function expandedForm(num) {
    var arr = ('' + num).split('');
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        element = arr[i];
        if (element != 0) {
            newElement = element * Math.pow(10, (arr.length - i - 1));
            newArr.push(newElement);
        }
    }
    return newArr.join(' + ');
}

console.log(expandedForm(9087));
// console.log(expandedForm(42));
// console.log(expandedForm(70304));