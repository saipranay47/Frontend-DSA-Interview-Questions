const SecondLargest = (arr) => {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};


function SecondLargest2 (arr) {
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

console.log(SecondLargest2([1, 2, 4, 8, 3, 7, 2, 7, 2, 1, 9, 8]));
