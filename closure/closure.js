/**
    Suppose you want to use a variable for counting something, and you want to the variable 
    to be available to all functions.
**/

// let counter = 0;
// function add(){
//     return counter += 1;
// }
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());


/*
There is a problem with the solution above: Any code on the page can change the counter,
without calling add().

The counter should be local to the add() function, to prevent other code from changing it:
*/


//  A JavaScript inner function can solve this.
// function add() {
//     let counter = 0;
//     function plus() {counter += 1;}
//     plus();   
//     return counter;
// }
/*
    This could have solved the counter dilemma, if we could reach the plus() function from the outside.
    We also need to find a way to execute counter = 0 only once.
    We need a closure.
*/

const add = (function(){
    let counter = 0;
    return function(){counter += 1; return counter}
})();

// console.log(add());
// console.log(add());
// console.log(add());

// Another way of closure
function stopWatch(){
    let counter = 0;
    return function(){
        counter += 1;
        return counter;
    }
}

const watch = stopWatch();
console.log(watch());
console.log(watch());
console.log(watch());
console.log(watch());
console.log(watch());
console.log(watch());

const watch2 = stopWatch();
console.log(watch2())


