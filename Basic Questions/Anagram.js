// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.
// Input: (5 = "anagram"), (t = "nagaram"); ----> Output: true;
// Input: (s = "rat"), (t = "car"); ------------> Output: false;


//using inbuilt functions
const isValidAnagram = (s,t) =>{
    s = s.split("").sort().join();
    t = t.split("").sort().join();

    return s == t;
}

console.log(isValidAnagram("anagram", "nagaram"));
console.log(isValidAnagram("rat", "car"));


//using objects to store count 
const isAnagram = (s,t) =>{
    if(s.length != t.length){
        return false;
    }

    let count_s = {};
    let count_t = {};

    for(let i = 0; i< s.length; i++){
        count_s[s[i]] = (count_s[s[i]] || 0) + 1;
        count_t[t[i]] = (count_t[t[i]] || 0) + 1;
    }

    for(const key in count_s){
        if(count_s[key] != count_t[key]){
            return false;
        }
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));