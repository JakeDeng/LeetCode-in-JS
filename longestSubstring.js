/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let startIndex = 0;
    let count = 0;
    
    const stringHash = new Map();

    for(let i = 0; i < s.length; i++){
        count++;
        let char = s[i];
        if(stringHash.has(char) && stringHash.get(char) >= startIndex){
            //repeat character, update startIndex
            let val = stringHash.get(char);
            //rollback the count
            count = count - (val - startIndex);
            startIndex = val; 
        }
        //length = index +1 
        stringHash.set(char, i+1);
        maxLength = Math.max(maxLength, count);
    }
    return maxLength;
};

//test
let string = "dvdf";
console.log(lengthOfLongestSubstring(string))