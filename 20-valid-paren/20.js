/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const hashmap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    for(let i = 0; i < s.length; i++){
        if(hashmap[s[i]]){
            stack.push(hashmap[s[i]])
        }
        /// to look at the last element in the stack to see if it matches
        else if(s[i] === stack[stack.length - 1]){
        // remove the last element by popping it 
        stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0 ? true : false
};