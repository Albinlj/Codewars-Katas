function decompose(n) {
    let fractions = [];
    let goal = eval(n);
    if (goal >= 1) {
        fractions = ['' + Math.floor(goal)];
        goal = goal - Math.floor(goal);
    };
    let sum = 0;
    let denom = 2;
    while (sum <= goal - 0.000000001) {
        if (1 / denom + sum <= goal) {
            fractions.push("1/" + denom);
            sum += 1 / denom;
            console.log(denom);
            console.log(sum);
        }
        denom++;
    }
    return fractions;
}


console.log(decompose('1/4'))
console.log('---')
console.log(decompose('12/3'))
console.log('---')
console.log(decompose('0.66'))