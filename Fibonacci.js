// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233..
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n> 1
// Input: n = 3  --->>>>>Output:2

//using recurssion
const Fibonacci = (num) =>{
    if(num <= 1){
        return num;
    }else{
        return Fibonacci(num -1) + Fibonacci(num-2);
    }
}

console.log(Fibonacci(3));


const FibonacciArray = (n) =>{
    let arr = [0,1];

    for(let i = 2; i<= n; i++){
        arr.push(arr[i-1] + arr[i-2]);
    }

    return arr;
}

console.log(FibonacciArray(5));