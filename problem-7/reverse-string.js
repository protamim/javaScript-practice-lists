// reverse a string
function reverseString(text) {
    let reverse = '';
    for(let i = text.length -1; i >= 0; i--) {
        reverse = reverse + text[i];
    }
    return reverse;
}
const gann = 'I\'m good boy';
const reverseStr = reverseString(gann);
console.log(reverseStr);


// reverse words
function reverseWords(str) {
    let reversedStr = '';
    const words = str.split(' ');
    for(let i = words.length -1; i >= 0; i--) {
        const element = words[i];
        reversedStr =`${reversedStr} ${element}`;
    }
    return reversedStr;
}
const myStr = 'We\'re Muslim and we pray salaat 5 times in a day';
const revWords = reverseWords(myStr);
console.log(revWords);