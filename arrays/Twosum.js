
// Ques 4 - Two Sum

// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

//brute force
const bruteTwosum = (arr,target) =>{
    let ans = [];

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                ans.push(i);
                ans.push(j);
                return ans;
            }
        }
    }

    return ans;
}

console.log(bruteTwosum([2,7,11,15], 9));
console.log(bruteTwosum([3,2,4], 6));

//using js objects
const pointerTwosum = (arr,target) =>{
    let obj = {};

    for(let i = 0; i < arr.length; i++){
        if(abj[target - arr[i]]){
            return [abj[target - arr[i]], i];
        }else{
            obj[arr[i]] = i;
        }
    }

    return [];
}
console.log("using object");
console.log(bruteTwosum([2, 7, 11, 15], 9));
console.log(bruteTwosum([3, 2, 4], 6));