/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const hashmap = {
        "I": 1,
        "IV": 4,
        "V": 5,
        "X": 10,
        "IX": 9,
        "L": 50,
        "C": 100,
        "XL": 40,
        "XC": 90,
        "D": 500,
        "CD": 400,
        "M": 1000,
        "CM": 900
    };
    let output = 0;
    for(let i = 0; i < s.length; i++) {
        if (hashmap[s[i]+s[i+1]]) {
            output += hashmap[s[i]+s[i+1]]
            i += 1
        } else {
            output += hashmap[s[i]];
        }
    }
    return output;
};