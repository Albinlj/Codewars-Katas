function deepReverse(l) {
    if (!Array.isArray(l))
        return l;
    let arr = []
    l.reduceRight((total, element, index) => arr.push(deepReverse(element)), []);
    return arr;
}

console.log(deepReverse(["a", 2, "c", 4]));
console.log(deepReverse(["a", "b"]));
console.log(deepReverse([1, ["a", "b"], 4]));
console.log([1, [2, 3]]);