/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged_array = merge(nums1, nums2);
    return findMedian(merged_array);
};

//merge 2 sorted array
function merge(arr1, arr2){
    //create an empty array, take a look at the smallest values in each array
    let res = [];
    let i = 0 , j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            res.push(arr1[i]);
            i++
        }else{
            res.push(arr2[j]);
            j++;
        }
    }
    //append the rest of one of the array
    if( i < arr1.length){
        res = [...res, ...arr1.slice(i)];
    }
    else if(j < arr2.length){
        res = [...res, ...arr2.slice(j)];
    }
    return res;
}

// 0 1 2 3 
// 0 1 2
function findMedian(arr){
    if(arr.length > 0){
        if(arr.length % 2 == 0){
            let median_index = arr.length/2;
            return (arr[median_index - 1] + arr[median_index])/2;
        }else{
            let median_index = Math.floor(arr.length/2);
            return arr[median_index];
        }
    }
    else{
        return null;
    }
}