'use strict';
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    let x = [yourLeft, yourRight];
    let y = [friendsLeft, friendsRight];
    x = x.sort((a,b)=> a-b);
    y = y.sort((a,b)=> a-b);
    if (x[1] == y[1] && x[0]==y[0]) return true;
    else return false
}
console.log(solution(25,10,102,25));
