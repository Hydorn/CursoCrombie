'use strict';
function solution(n) {
    let output = 0;
    let hours = Math.trunc(n/60).toString().split("").forEach(elem => {output = output+Number(elem);});
    let minutes = (n%60).toString().split("").forEach(elem => {output = output+Number(elem);});
    console.log(output);
    return output;
}
solution(828);