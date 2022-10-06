'use strict';
function solution(inputArray) {
    let max = 0;
    let n = inputArray.length;
    for(let i=1; i<n;i++){
        let difference = inputArray[i]-inputArray[i-1];
        if (difference<0) difference=difference*-1;
        if(difference>max) max = difference;
    }
    return max;
}

console.log(solution([2, 4, 1, 0]));