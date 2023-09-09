// Get returns numbers that divisible by 10
const numbers = [52, 50, 40, 184, 650, 87, 770]

const divisibleBy10 = numbers.filter(divide => (divide % 10) == 0);
console.log(divisibleBy10);

// Console the Instuctor Name that has the position senior using filter()
const instuctor = [
    {name: 'Nodi', age: 26, position: 'Junior'},
    {name: 'Aklima', age: 21, position: 'Senior'},
    {name: 'Zakaria', age: 23, position: 'Junior'},
    {name: 'Tamim', age: 24, position: 'Senior'}
];

const seniorInstuctor = instuctor.filter(senior => senior.position == 'Senior');
console.log(seniorInstuctor);
