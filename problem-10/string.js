// Find out best friend, if a friend name is long than other is a best friend.
function bestFriend(friends){
    let bigName = '';
    let forCompare = 0;
    for(let i = 0; i < friends.length; i++){
        const name = friends[i];
        const nameLength = friends[i].length;
       if(nameLength > forCompare) {
        forCompare = nameLength;
        bigName = `${name} is my best friend!`;
       }
    };
    return bigName;
}
const friends = ['Tanvir', 'Shamima', 'Shakila', 'Zakaria', 'Meghla'];
const best = bestFriend(friends);
console.log(best);
