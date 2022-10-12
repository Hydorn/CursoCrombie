'use strict';
function solution(inputArray) {
    let jump = 1;
    inputArray.sort((a,b)=>a-b);
    let n = inputArray.length;
    let i = 0;
    while(inputArray[i]%jump==0 || i<n){
        if(inputArray[i]%jump==0){
            jump++;
            i=0;
        } else i++;
    }
    console.log(jump);
}

solution([1000, 999]);