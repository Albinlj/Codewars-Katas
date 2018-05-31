function properFractions(den) {
    let reducedProperCount = 0;
    for (enu = 1; enu < den; enu++) {
        let isReduced = true;
        for (i = 2; i <= enu; i++) {
            if (den % i === 0 && enu % i === 0) {
                isReduced = false;
                break;
            }
        }
        if (isReduced == true)
            reducedProperCount++;
    }
    return reducedProperCount;
}

console.log(properFractions(1));
console.log(properFractions(2));
console.log(properFractions(5));
console.log(properFractions(15));
console.log(properFractions(25));
console.log(properFractions(10000));