// Write a program to get total vowel count from String ?
// Input: "hello world"
// Output: 3

const vowelCount = (str) =>{
    let count = 0;
    for(let i = 0; i< str.length; i++){
        let char = str[i].toLowerCase();
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            count ++;
        }
    }

    return count;
}

console.log(vowelCount("HellO World"));