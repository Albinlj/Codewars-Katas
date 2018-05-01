function getPINs(observed) {
    // TODO: This is your job, detective!
    var dictionary = [
        [8, 0], //0
        [1, 2, 4], //1
        [1, 2, 3, 5], //2
        [2, 3, 6], //3
        [1, 4, 5, 7], //4
        [2, 4, 5, 6, 8], //5
        [3, 5, 6, 9], //6
        [4, 7, 8], //7
        [5, 7, 8, 9, 0], //8
        [6, 8, 9] //9
    ];

    afs = observed.split('').map(a => dictionary[a]);

    console.log('splittad: ' + afs.join(' - '))

    return afs.reduce(function (accumulatorA, currentValueA) {
        return currentValueA.reduce(function (accumulatorB, currentValueB) {
            return accumulatorB + accumulatorA.map((a) => a + currentValueB);
        })
    });
}

console.log(getPINs("01"));
// console.log('0: ' + getPINs("01")[0]);
// console.log('1: ' + getPINs("01")[1]);
// console.log('2: ' + getPINs("01")[2]);