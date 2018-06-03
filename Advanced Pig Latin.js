function translate(sentence) {
    return sentence
        .split(/([\W\s]+)/)
        .reduce((tot, val, i, arr) => {
            if (/[a-zA-Z]/.test(val)) {
                for (let i = 0; i < val.length; i++) {
                    if (/[AaEeIiOoUu]/.test(val.charAt(i))) {
                        if (i == 0) {
                            val = val.concat('way');
                            break;
                        } else {
                            let isUppercase = val.charAt(0) === val.charAt(0).toUpperCase();
                            val = [
                                isUppercase ? val.charAt(i).toUpperCase() : val.charAt(i),
                                val.slice(i + 1),
                                val.slice(0, i).toLowerCase(),
                                "ay"
                            ].join("");
                            break;
                        }
                    }
                }
            }
            return tot.concat(val);
        }, "");
};

console.log(translate('hello'));
console.log(translate('hello world'));
console.log(translate('Hello World'));;
console.log(translate('Pizza? Yes Please!!'));
console.log(translate('How are you?'));
console.log('How are you?');