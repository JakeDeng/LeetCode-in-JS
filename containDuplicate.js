/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(numMap.has(nums[i])){
            return true;
        }else{
            numMap.set(nums[i],0);
        }
    }
    return false;
    
};