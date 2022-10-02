'use strict';
function solution(a, b) {
    let n = a.length;
    let count1 = 0;
    let count2 = 0
    while(n--){
        if(a[n] != b[n]) count1++;
    }
    a.sort((a,b)=>a-b)
    b.sort((a,b)=>a-b);
    n = a.length
    while(n--){
        if(a[n] != b[n]) count2++;
    }
    if(count1<3 && count2==0) return true;
    else return false;
}

let a = [1,2]
let b = [1,2]
console.log(a==b);