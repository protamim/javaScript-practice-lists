// Check leap year
/* 
Any year that is evenly divisible by 4 is a leap year: 
for example, 1988, 1992, and 1996 are leap years.
*/
function leapYear(year) {
    let remainderCheck = year % 4;
    
    if(remainderCheck == 0) {
        console.log(`${year} is leap year!`);
    }else {
        console.log(`${year} is not leap year!`);
    }
}
// Function call
leapYear(2023);

// Check a number even or odd, create it using a function
/*
Hints: Any number that divide by 2 if remainder is 0 that is a even number.
Otherwise that is odd number.
*/
function isEven(num) {
    if((num % 2) == 0) {
        console.log(`${num} is Even Number!`)
    }else {
        console.log(`${num} is Odd Number!`)
    }
}
// Function call
isEven(55);

// Convert hours to minutes
/**
 * User will input hours, the program should return mins based hours
 */
function hoursToMinutes(hours) {
    let oneHour = 60;
    let hourMinutes = oneHour * hours;
    console.log(`${hours} hours = ${hourMinutes} minutes.`);
}
//Function call
hoursToMinutes(7);

/**
 Calculate Sum of all odd numbers of an array
 */
 var num = [28, 22, 777, 807, 405, 111, 77, 90, 88, 84];
 var sum = 0;
 function findOddNum() {
    for(var i = 0; i < num.length; i++) {
        if((num[i] % 2) == 0) {
            continue;
        }else {
            sum += num[i];
        };
    }
    console.log(sum);
 };
findOddNum();