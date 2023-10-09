// Ques 5 - Best Time to Buy and Sell Stocks

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.

// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4]; ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];    -->>>>> Output: 0;

//Brute force
const maxProfit = (arr) => {
    let max = 0;
    for(let i = 0; i< arr.length; i++){
        for(let j = i+1; j< arr.length; j++){
            let profit = arr[j] - arr[i];

            if(profit > max){
                max = profit;
            }
        }
    }

    return max;
}

console.log("Brute force : "+maxProfit([7, 1, 5, 3, 6, 4]));


//Greedy 
const greedyMaxProfit = (arr) => {
    let min = 0;
    let profit = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }

        if(arr[i] - min > profit){
            profit = arr[i] - min;
        }
    }

    return profit;
}

console.log("Greedy : " + maxProfit([7, 1, 5, 3, 6, 4]));