module.exports = function check(str, bracketsConfig) {
    let strings = [];

    for (let i=0; i<bracketsConfig.length; i++) {
        strings.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    while (subStringExists(str, strings) != -1) {
        str = subStringExists(str, strings);
    }

    return (str.length) ? false : true;
}

function subStringExists(str, strings) {
    let i=0;
    for (i=0; i<strings.length; i++) {
        let index = str.indexOf(strings[i]);

        if (index >= 0) {
            str = str.replace(strings[i], "");

            return str;
        }
    }

    return -1;
}