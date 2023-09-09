const obj = {name: 'Talukdar', job: 'Computer Operator', company: {hours: 10, name: 'Handincraft'}};

const jsonString = JSON.stringify(obj);
const jsonParse = JSON.parse(jsonString);
console.log(jsonParse)