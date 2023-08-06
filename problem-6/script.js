// Calculate the sum of numbers within an array

function calcArray() {
    let arr = [84, 65, 45, 98, 102];
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`Sum of this array is: ${sum}`);
}
calcArray();

// Another way to solve the problem
function calcArrayB(arrB) {
    let sum = 0;
    for(let i = 0; i < arrB.length; i++) {
        sum = sum + arrB[i];
    }
    console.log(sum);
}

let arrB = [80.5, 86.38, 94.94, 102.35, 95.58];
calcArrayB(arrB);

// creating two dimensional array
let MathScore = [
    ['John Doe', 20, 60, 'A'],
    ['Jane Doe', 10, 52, 'B'],
    ['Petr Chess', 5, 24, 'F'],
    ['Ling Jess', 28, 43, 'A'],
    ['Ben Liard', 16, 51, 'B']
];
let lastRow = MathScore[MathScore.length -1];
let lastRowLastElemnt = lastRow[lastRow.length -1];
console.log(lastRowLastElemnt);

/*
Bonus intermediate challenge: 
Create a function that can return the sum of a particular column or row number in a table.
*/
function colRowSum(firstRow) {
    let sum = 0;
    for(let i = 0; i < firstRow.length; i++) {
        sum = sum + firstRow[i];
    }
    console.log(`First row element's sum is ${sum}`);
}

const twoDArr = [
    [85, 65, 90, 102, 50],
    [80, 21, 35, 74, 80],
    [145, 50, 42, 38, 75],
    [72, 25, 101, 34, 28]
];
const firstRow = twoDArr[0];
const lastRowThis = twoDArr[twoDArr.length -1];
// Call function
colRowSum(lastRowThis);


// Accessing first row, rows elements from 2d array
// const firstRow = twoDArr[0];
// const fRow1stElemnt = firstRow[0];
// const fRowLastElemnt = firstRow[firstRow.length -1]; // returns 50, last element of first row
// console.log(fRowLastElemnt);

// Acccessing last row from 2d array
// const lastRowThis = twoDArr[twoDArr.length -1];
// console.log(lastRowThis)

// Accessing column from 2d array
// const firstCol = twoDArr[0];
// console.log(firstCol)

// 2d array
const arr2d = [
    [25,25,50,50],
    [50,50,100,100],
    [100,100,150,150],
    [150,150,200,200],
    [200,200,250,250]
];

// Accesing specific column from an 2d array
function getColumn(arr, columnIndex) {
    let itemSum = 0;
    for(let i = 0; i < arr.length; i++) {
        itemSum = itemSum + arr[i][columnIndex];
    }
    return itemSum;
}
// Function call
const secondColumn = getColumn(arr2d, 3);
console.log(secondColumn);



// Create a function that reverses an array
const arrC = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];

// Function that reverse an array
function reverseArray(revArr) {
    let rev = [];
    for(let i = revArr.length -1; i >= 0; i--) {
        rev.push(revArr[i]);
    }
    return rev;
};
const result = reverseArray(arrC);
console.log(result);


// Sort an array from lowest to highest
const intArray = [20, 30, 40, 50, 80, 100];
const decArray = [14.15, 65.45, 50.55, 10.99];
const negArray = [-2.5, -2, -5, -0.6, -1.99]
// Sorting numeric array by ascending
function sortArray(arr) {
    arr.sort(function(a, b){
        return a - b;
    })
    return arr;
}
// call function
const sortedArray = sortArray(decArray);
console.log(sortedArray);


