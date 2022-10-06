'use strict';
function solution(inputString) {
    let arr = inputString.split('.');
    inputString = inputString.replaceAll('.','');
    let nStr = inputString.length;

    //Everything is a number
    for(let i=0; i<nStr; i++){
       if((isNaN(Number(inputString[i])))) return false; 
    }

    // Length
    let n = arr.length;
    if (n!=4) return false;

    // Length of each array
    console.log(arr);
    for(let i=0; i<n;i++){
        
        console.log(arr[i].length);
        if(!arr[i].length) return false;
    }

    //Range of numbers
    while(n--){
        if(Number(arr[n])>255 || Number(arr[n])<0) return false;
        if(Number(arr[n])<10 && arr[n].length!=1) return false;
    }
    return true;
}

console.log(solution("0..1.0")); 