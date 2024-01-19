/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let count = {};
    
    for(let i = 0; i < arr.length; i++){
        if(!count[arr[i]]){
            count[arr[i]] = 1;
        }
        else {
            count[arr[i]] += 1
        }
    }


    // console.log(count)
    // console.log(Object.values(count).length)

    // console.log(new Set(Object.values(count)).size)

    const val = Object.values(count)
    const removeDup = [... new Set(val)]

    return val.length === removeDup.length ? true : false
};