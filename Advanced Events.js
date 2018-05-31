function Event() {
    var myHandlers = [];
    this.subscribe = function () {
        Array.from(arguments).forEach(function (arg) {
            if (typeof arg === 'function')
                myHandlers.push(arg);
        })
    }

    this.unsubscribe = function () {
        let args = Array.from(arguments);
        args.forEach(function (arg) {
            for (let i = myHandlers.length - 1; i >= 0; i--) {
                if (myHandlers[i] == arg) {
                    myHandlers.splice(i, 1);
                    break;
                }
            }
        })
    }

    this.emit = function () {
        let tempHandlers = myHandlers.slice();
        tempHandlers.forEach((handler) => handler.apply(this, arguments));
    }
}