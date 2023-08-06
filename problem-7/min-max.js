// Write a function that will take 3 numbers will return the max number
const num1 = 102;
const num2 = 80;
const num3 = 150;
// function that will return the max number
function getMaxNum(a, b, c) {
    if(a > b && a > c) {
       return `${a} is max number than ${b} and ${c}`;
    }else if (b > a && b > c) {
      return `${b} is max number than ${a} and ${c}`;
    }else {
       return `${c} is max number than ${a} and ${b}`;
    }
}
const maxNumber = getMaxNum(num1, num2, num3);
console.log(maxNumber);

// Write a function that will take 3 numbers will return the min number
const num4 = 150;
const num5 = 87;
const num6 = 77;
// Function that will return the min number
function getMinNum(e, f, g) {
    if (e < f && e < g) {
        return `${e} is min number than ${f} and ${g}`
    } else if (f < e && f < g) {
        return `${f} is min number than ${e} and ${g}`
    } else {
        return `${g} is min number than ${e} and ${f}`
    }
}
// Function call
const minNumber = getMinNum(num4, num5, num6);
console.log(minNumber);


// Write a function that will take 3 numbers will return the min number using min() function
const num7 = 81;
const num8 = 10;
const num9 = 94;

function getMin(h, i, j) {
     return Math.min(h, i, j);
}
const min = getMin(num7, num8, num9);
console.log(min);


// Find out max number from an array
function maxNumInArray(arr) {
    let largest = arr[0];
    for(let i = 0; i < arr.length; i++) {
        const index = i;
        const element = arr[index];
        if(element > largest) {
            largest = element;
        }
    }
    return largest;
}
const numbers = [50, 60, 15, 65, 70];
const maxInArray = maxNumInArray(numbers);
console.log(maxInArray);

// Min

function minNumberA(array) {
    let lowest = array[0];
    for(let i = 0; i < array.length; i++) {
        const index = i;
        const element = array[index];
        if(element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
const num = [90, 40, 85, 65, 75];
const minNum = minNumberA(num);
console.log(minNum);
