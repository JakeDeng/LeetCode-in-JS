/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    return twoSumHashMap(nums,target);
};

//BruteForce
var twoSumBruteForce = function(nums, target){
    for(let i = 0; i<nums.length;i++){
        let first = nums[i];
        for(let j = i; j<nums.length;j++){
            let second = nums[j];
            if(first + second == target && i != j){
                //Found target
                return [i,j];
            }
        }
    }
    return [];
}

//Hash Map
var twoSumHashMap  = function(nums, target){
    const twoSumMap = new Map();

    //check up the hash map
    for(let j = 0; j<nums.length;j++){
        let remain = target - nums[j];
        if(twoSumMap.has(remain) && j !== twoSumMap.get(remain)){
            return [j, twoSumMap.get(remain) ];
        }else{
            twoSumMap.set(nums[j],j);
        }
    }
}

//test
var target = 6;
var nums = [3,2,4];

console.time("addTwoSum");

console.log(twoSum(nums, target));

console.timeEnd("addTwoSum");