function decompose(n) {
    let goal = eval(n);
    if (goal >= 1) return goal;
    let fractions = [];
    let sum = 0;
    let denom = 1;
    while (sum !== goal) {
        if (1 / denom + sum <= goal) {
            fractions.push("1/" + denom);
            sum += 1 / denom;
            console.log(denom);

        }
        denom++;
    }
    return fractions;
}


console.log(decompose('3/4'))
console.log('---')
console.log(decompose('12/3'))
console.log('---')
console.log(decompose('0.66'))