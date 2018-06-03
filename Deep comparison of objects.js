function deepCompare(ob0, ob1) {
    if (ob0 === ob1) return true;
    if (ob0 == null || ob1 == null) return false;
    if (typeof ob0 !== "object") return false;
    if (Array.isArray(ob0) !== Array.isArray(ob1)) return false;
    let ob0keys = Object.keys(ob0);
    if (ob0keys.length !== Object.keys(ob1).length) return false;
    return ob0keys.every((val) => {
        return deepCompare(ob0[val], ob1[val])
    })
}


let a = {
    key0: null,

    key1: "strut",
    key2: "brax",
    key3: 15
}
let b = {
    key1: "strut",
    key2: "brax",
    key3: 15
}
let c = {
    key1: "strut",
    key2: "brax",
    key3: 13
}

console.log(deepCompare(a, b));
console.log(deepCompare(a, c));
console.log(deepCompare(b, c));