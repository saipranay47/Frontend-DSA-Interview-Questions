// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x= 121  ------->> Output: true
// Input: x = 10  ------->> Output: false

const isPalindrome = (number) =>{
    if(number < 0){
        return false;
    }

    let reversed = number.toString().split("").reverse().join("");

    return reversed == number;
}

console.log(isPalindrome(121))