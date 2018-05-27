function encodeResistorColors(ohmsString) {
    let colors = {
        0: "black",
        1: "brown",
        2: "red",
        3: "orange",
        4: "yellow",
        5: "green",
        6: "blue",
        7: "violet",
        8: "gray",
        9: "white"
    }
    let nums = ohmsString.slice(0, ohmsString.indexOf(" ")).replace("k", "000").replace("M", "000000");
    if (nums.includes("."))
        nums = nums.replace(".", "").slice(0, nums.length - 2);
    var prefix = nums.slice(0, 2).split("").map((element) => colors[element]);
    return [
        prefix[0],
        prefix[1],
        colors[nums.slice(2).length],
        "gold"
    ].join(" ");
}