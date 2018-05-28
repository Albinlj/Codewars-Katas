function chooseBestSum(t, k, ls) {
    var highestSum = null;

    function townRecurse(townsSoFar, lastindex) {
        var townsSoFar = townsSoFar || [];
        if (townsSoFar.length === k) {
            let sum = townsSoFar.reduce((a, b) => a + b)
            if (sum < t && sum > highestSum)
                highestSum = sum;
            return;
        }
        for (var i = lastindex + 1 || 0; i < ls.length; i++) {
            townRecurse(townsSoFar.concat(ls[i]), i);
        }
    }


    townRecurse();
    return highestSum
}



// My failed attempt at recursion. After reading another users solution i attempted to recreate it above. 

// function chooseBestSum(t, k, ls) {
//     var origLen = ls.length;

//     function getOptions(arr, journeys) {
//         if (arr.length > origLen - k) {
//             var newJourneys = [];
//             if (journeys.length > 0) {
//                 return journeys.reduce(function (total, journey, index) {
//                     return total + arr.reduce(function (total, route, index) {
//                         total.push(journey.concat(route));
//                         return total;
//                     }, [])
//                 }, null)
//             } else {
//                 arr.reduce(function (total, route, index) {
//                     let splicedArr = arr;
//                     newJourneys = [splicedArr.splice(index - 1, 1)];
//                     return total + getOptions(splicedArr, newJourneys);
//                 })
//             }
//         } else {
//             return journeys;
//         }

//     }

//     return getOptions(ls, []);
// }

console.log(chooseBestSum(14, 5, [1, 2, 3, 4, 5, 6, 7, 8, 9]));