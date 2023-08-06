/*

Package 1: 
If ticket number is less than 100 or equal, ticket price is: 100tk;

Package 2: 
If ticket number is more than 101 or equal, but less than 200 or equal, ticker price is 90tk, 
but for 100 tickets price is same as package 1.

Package 3: 
If you purchase more than 201 or equal, ticket price will be 70tk.
but package 1, and package 2 will apply to this package. 

Breakpoint the problem:


*/

function ticketCalculator(ticketNumbers) {
 const package1 = 100;
 const package2 = 90;
 const package3 = 70;

let sum = '';

 if(ticketNumbers >= 1 && ticketNumbers <= 100) {
        const calculation = `You're buying ${ticketNumbers} tickets, total you have to pay ${ticketNumbers * package1} TK`;
        sum = calculation;
        return sum;
    }else if (ticketNumbers >= 101 && ticketNumbers <= 200) {
        const for100Tickets = package1 * package1;
        const restTickets = ticketNumbers - package1;
        const forRestTickets = restTickets * package2;
        const total = for100Tickets + forRestTickets;
        const details = `You're buying ${ticketNumbers} tickets, So discount details below:
        For first 100 tickets ${for100Tickets} TK,
        For rest ${restTickets} tickets ${forRestTickets} TK,
        Total you have to pay: ${total}.`;
        
        sum = details;
        return sum;
    }else if (ticketNumbers >= 201){
        const for100Tickets = package1 * package1;
        const pkg2Applied = package1 * package2;
        const restTickets = ticketNumbers - 200;
        const forRestTickets = restTickets * package3;
        const total = for100Tickets + pkg2Applied + forRestTickets;
        const details = `You're buying ${ticketNumbers} tickets, So discount details below:
        For first 100 tickets ${for100Tickets} TK,
        For second 100 tickets ${pkg2Applied} TK,
        For rest ${restTickets} tickets ${forRestTickets} TK,
        Total you have to pay: ${total}.`;
        sum = details;
        return sum;
    } else {
        return 'Invalid Number!';
    }
}
const discountTicket = ticketCalculator(54);
console.log(discountTicket);