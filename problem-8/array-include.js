// Remove duplicate item from an array
function removeDuplicateItem (items) {
    const unique = [];
    for(let i = 0; i < items.length; i++) {
        const number = items[i];
        if (unique.includes(number) === false) {
            unique.push(number);
        }
    }
    return unique;
}
const duplicateItems = [50, 70, 50, 102, 70, 102, 77, 88, 77, 88];
const removeDuplicate = removeDuplicateItem(duplicateItems);
console.log(removeDuplicate);

const num = [80, 45, 98, 25, 70, 98, 80, 25, 70, 70, 98, 80];
const includes = num.includes(80); // returns boolean
console.log(includes);

// lowest price phone selection from an array
function lowestPhone(phones) {
    let lowest = phones[0];
    for(let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.price < lowest.price) {
            lowest = phone;
        }
    }
    return lowest;
}
const phones = [
    {name: 'Xiomi', camera: 32, storage: 128, price: 16000, display: 6.5, color: 'Black'},
    {name: 'Oppo', camera: 48, storage: 64, price: 25000, display: 6, color: 'silver'},
    {name: 'Google', camera: 58, storage: 128, price: 41000, display: 5.8, color: 'gold'},
    {name: 'Realme', camera: 100, storage: 32, price: 30030, display: 6, color: 'Silver Black'},
    {name: 'Vivo', camera: 50, storage: 128, price: 17800, display: 6.5, color: 'Black'},
    {name: 'Samusung', camera: 64, storage: 64, price: 20300, display: 6, color: 'white'},
    {name: 'Itel', camera: 58, storage: 128, price: 27000, display: 6.5, color: 'Black'},
    {name: 'Iphone', camera: 120, storage: 128, price: 18000, display: 6, color: 'Deep Purple'}
];
const mySelection = lowestPhone(phones);
console.log(mySelection);


// Lowest price with good camera phone selection
function goodCamera(phones) {
    let lowestButGood = phones[0];
    for(let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.price < lowestButGood.price) { // I will solve it later
            lowestButGood = phone;
        }
    }
    return lowestButGood;
}
const lowestWithGoodCam = goodCamera(phones);
// console.log(lowestWithGoodCam);