'use strict';
function solution(nCols, nRows, col, row) {
    col = nCols-col+1;
    row = nRows-row;
    return col*row;
}
solution(16,11,5,3);