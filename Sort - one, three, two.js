function sortByName(arr) {
    var sortedTextArr = arr.map((element) => textify(element)).sort();
    return arr.sort((a, b) => sortedTextArr.indexOf(textify(a)) - sortedTextArr.indexOf(textify(b)));
}

function textify(number) {
    var digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
    var tens = ["zeroty", "tenty", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    function evalTens(tenArr) {
        //Takes an array of 2 digits 
        let num = tenArr[0] * 10 + tenArr[1];
        if (num == 0) return "";
        if (num < 20) return digits[num];
        if (tenArr[1] == 0) return tens[tenArr[0]];
        else return tens[tenArr[0]] + digits[tenArr[1]];

    }

    //split the number into an array with each digit as its own element
    var arr = number.toString().split("").map((element) => parseInt(element));

    switch (arr.length) {
        case 0:
            return null;
        case 1:
            return digits[arr[0]];
        case 2:
            return evalTens([arr[0], arr[1]]);
        case 3:
            return digits[arr[0]] + " hundred " + evalTens([arr[1], arr[2]]);
        default:
            return "error";
    }
}