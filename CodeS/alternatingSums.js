'use strict';
function solution(a) {
    let n = a.length;
    let sum1 = 0, sum2 = 0;
    
    for(let i=0; i<n; i++){
        if(i%2==0){
            sum1 = sum1 + a[i];
        } else { 
            sum2 = sum2 + a[i];
        }
    }
    console.log(sum1, sum2);
    return [sum1, sum2];
}

solution([50, 60, 60, 45, 70]);