function landPerimeter(arr) {
    return "Total land perimeter: " + arr.reduce(function (borderTotal, string, y) {
        return borderTotal += string.split("").reduce((stringBorderTotal, letter, x) => {
            var bordersToAdd = 0;
            if (letter == "X") {
                bordersToAdd += 4;
                if (x - 1 >= 0 && string.substr(x - 1, 1) == "X") {
                    bordersToAdd--;
                }
                if (x + 1 < string.length && string.substr(x + 1, 1) == "X") {
                    bordersToAdd--;
                }
                if (y - 1 >= 0 && arr[y - 1].substr(x, 1) == "X") {
                    bordersToAdd--;
                }
                if (y + 1 < arr.length && arr[y + 1].substr(x, 1) == "X") {
                    bordersToAdd--;
                }
            }
            return stringBorderTotal + bordersToAdd;
        }, 0)
    }, 0);
}

console.log(landPerimeter([
    'XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO'
]))
console.log(landPerimeter([
    'XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO'
]))