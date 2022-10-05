function solution(inputString) {
    let matrix = [[],[]]
    let n = inputString.length;
    let k = 0;
    for(let i=0; i<n; i++){
        if(!matrix[0].includes(inputString[i])){
            matrix[0].push(inputString[i]);
            matrix[1][k]= 1;
            k++;
        }
        else{
            let index = matrix[0].indexOf(inputString[i]);
            matrix[1][index]++;
        }
    }
    console.log(n, n%2, unEven(matrix[1]));
    if (n%2==0 && unEven(matrix[1])==0) return true;
    if (n%2!=0 && unEven(matrix[1])==1) return true;
    else return false;
}
function unEven(number){
    let n = number.length;
    let unEvenCount = 0;
    while(n--){
        if(number[n]%2!=0) unEvenCount++;
    }
    return unEvenCount;
}

solution("abbcabb");