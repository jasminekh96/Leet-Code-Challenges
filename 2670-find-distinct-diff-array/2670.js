/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const output = [];
    for(let i = 0; i < nums.length ; i++){
    let prefix = {};
    let suffix = {};
    // track prefix
    for(let p = 0; p <= i; p++){
        if(!prefix[nums[p]]) {
            prefix[nums[p]] = 1
        }
    }
    // track suffix
    // console.log(Object.keys(prefix).length)
    for(let s = i + 1; s < nums.length; s++) {
    if(!suffix[nums[s]]){
    suffix[nums[s]] = 1
        }
    }
    output.push(Object.keys(prefix).length - Object.keys(suffix).length);
}
return output;
};