function add(x, y) {
    var a = x;
    var b = y;
    while ((a & b) != 0) {
        var xor = a ^ b;
        var and = a & b;
        var shiftedAnd = and << 1;
        a = xor;
        b = shiftedAnd;
    }
    return a | b;
}