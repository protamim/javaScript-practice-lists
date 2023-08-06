/*
= Problem practice:
*/ 
//
// Get input from users
// var input1 = parseInt(prompt('Enter the first Number'));
// var input2 = parseInt(prompt('Enter the second Number'));
// var input3 = parseInt(prompt('Enter the third Number'));

// function make_avg(input1, input2, input3) {
//     var sum = input1 + input2 + input3;
//     var avg = sum / 3;
//     return avg;
// }
// Call function
// var result = make_avg(input1, input2, input3);
// document.write(result);

// Calculating an array average
function make_avg() {
  var intArr = [58, 44, 88, 90, 210, 54, 63, 70, 72, 84, 52];
  var sum = 0;
  for(var i = 0; i < intArr.length; i++) {
    sum += intArr[i];
  }
  var avg = sum / intArr.length;
  return avg;
}

// Call the function
var result = parseInt(make_avg());
console.log(result);


// At a glance js Object
const student = {
  name: 'Zakaria',
  class: 12,
  height: 5.6,
  subject: 'Math'
}
// get key's value
// console.log(student['name']);
//Accessing an object property value
// console.log(student.name);
// Assign value to existing property
// var replacedName = student['name'] = 'Talukdar';
// console.log(replacedName);

// loop throw an object
var objValue = '';
for(let x in student) {
  objValue += `${x} = ${student[x]}, `;
}
console.log(objValue);

