function deepCompare(o1, o2) {
    if (typeof o1 != typeof o2)
        return false;

    for (var key in o1) {
        //See if the property is a property of the object, and not of its prototype.
        if (o1.hasOwnProperty(key)) {
            if (o1[key] === null)
                return false;
            let valType = typeof (o1[key].valueOf());
            //Call recursively if the keyvalue is an object
            if (valType === "object") {
                // if (Array.isArray(o1[key]))
                // ;
                if (!deepCompare(o1[key], o2[key]))
                    return false;
            } else {
                if (o1[key] !== o2[key] || valType === "undefined")
                    return false;
            }
        }
    }
    return true;
};

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