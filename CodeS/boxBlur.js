'use strict';

function solution(image) {
    let newImg = [];
    let n = image[0].length;
    let m = image.length;
    let i,j;
    i = j = 0;
    while(){
        while(){
            
        }
    }
    return newImg;
}

function matrixProm(arr, n, m){
    let partialSum = 0;
    for(let i=n; i<n+3; i++){
        for(let j=m; j<m+3; j++){
            partialSum += arr[j][i];
        }
    }
    return Math.trunc(partialSum/9);
}
const image = [[36,0,18,9], 
                [27,54,9,0], 
                [81,63,72,45]];

    

// console.log(image[0][0], image[0][1]);
solution(image);
//console.log(matrixProm(image, 0, 0));
//console.log(matrixProm(image, 0, 1));