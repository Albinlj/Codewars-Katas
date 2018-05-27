function landPerimeter(arr) {
    return "Total land perimeter: " + arr.reduce(function (borderTotal, string, y) {
        return borderTotal += string.split("").reduce((stringBorderTotal, letter, x) => {
            var bordersToAdd = 0;
            if (letter == "X") {
                if (x == 0 || string.substr(x - 1, 1) == "O") bordersToAdd++;
                if (x == string.length - 1 || string.substr(x + 1, 1) == "O") bordersToAdd++;
                if (y == 0 || arr[y - 1].substr(x, 1) == "O") bordersToAdd++;
                if (y == arr.length - 1 || arr[y + 1].substr(x, 1) == "O") bordersToAdd++;
            }
            return stringBorderTotal + bordersToAdd;
        }, 0)
    }, 0);
}