'use strict'; 
function solution(n, firstNumber) {
    if(firstNumber<n/2) return n/2 + firstNumber;
    else return firstNumber - n/2;    
}
solution(10,2);