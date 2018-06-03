function translate(sentence) {
    return sentence
        .split(/([\W\s]+)/)
        .reduce((tot, val, i, arr) => {
            if (/[a-zA-Z]/.test(val)) {
                valArray = val.split('');
                for (let i = 0; i < valArray.length; i++) {
                    if (/[AaEeIiOoUu]/.test(valArray[i])) {
                        if (i == 0) {
                            val = val.concat('way');
                            break;
                        } else {
                            let isUppercase = valArray[0] === valArray[0].toUpperCase();
                            val = [
                                isUppercase ? valArray[i].toUpperCase() : valArray[i],
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