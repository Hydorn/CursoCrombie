function solution(inputString) {
    let answer = inputString;
    if(!inputString.includes('(')){
      return inputString;
    } else { 
      answer = splitString(answer);
      answer[1] = reverseString(answer[1]);
      return solution(answer[0]+answer[1]+answer[2]);
    }
  }
  function reverseString(inputString){
    let n = inputString.length;
    let answer = [];
    for(let i=0; i<n; i++){
      answer[i] = inputString[i]
    }
    answer.reverse();
    return answer.join('');
  }
  function splitString(inputString){
    let n = inputString.length;
    let i;
    let parenthesesStart, parenthesesEnd;
    let answer = [];
  
    parenthesesStart = inputString.lastIndexOf('(');
    i = parenthesesStart;
    while(parenthesesStart<n){
      if(inputString[i]==')'){
        parenthesesEnd = i;
        break;
      }
      i++;
    }
    answer[0] = inputString.slice(0, parenthesesStart);
    answer[1] = inputString.slice(parenthesesStart+1 , parenthesesEnd);
    answer[2] = inputString.slice(parenthesesEnd+1);
    return answer;
  }