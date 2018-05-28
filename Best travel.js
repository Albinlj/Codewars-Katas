function chooseBestSum(t, k, ls) {
    let options = [];


    function getOptions(arr, journeys) {
        if (arr.length > ls.length - k) {
            var newJourneys = [];
            if (journeys.length > 0) {
                journeys.reduce(function (total, journey, index) {
                    console.log("at journey " + journey + " with index " + index);
                    arr.reduce(function (total, route, index) {
                        console.log("at route " + route + " with index " + index);
                        newJourneys.push(journey.concat(route));
                        let splicedArr = arr;
                        newJourneys = [splicedArr.splice(index, 1)];
                        return getOptions(splicedArr, newJourneys);
                    })
                })
            } else {
                arr.reduce(function (total, route, index) {
                    let splicedArr = arr;
                    newJourneys = [splicedArr.splice(index, 1)];
                    return getOptions(splicedArr, newJourneys);
                })
            }
        } else {
            return journeys;
        }

    }

    return getOptions(ls, []);
}

// function getAllOptions(arr, options) {
//     if (arr.length > ls.length - k) {
//         return arr.reduce(function (total, value) {
//             valueArr = [value];
//             return total.concat(getAllOptions(valueArr));
//         })
//     } else {
//         return (arr);
//     }
console.log(chooseBestSum(100, 2, [5, 6, 7]));