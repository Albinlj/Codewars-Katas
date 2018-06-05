String.prototype.toAlternatingCase = function () {
    return this.replace(/[a-zA-z]/gi, (match) => match.toUpperCase() === match ? match.toLowerCase() : match.toUpperCase());
}