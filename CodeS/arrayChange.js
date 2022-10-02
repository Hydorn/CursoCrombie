'use strict';
function solution(inputArray) {
    let n = inputArray.length;
    let counter = 0;
    let i = 0;
    for(let i=0; i<n; i++){
        while(inputArray[i+1]<=inputArray[i] && i<n-1){
            console.log(inputArray);
            inputArray[i+1]++;
            counter++;
        }
    }
    console.log(counter);
    return counter;
}
solution([1,1,1]);