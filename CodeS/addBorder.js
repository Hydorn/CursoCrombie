function solution(picture) {
    let n= picture[0].length;
    let border = [];

    for(let i=0; i<picture.length; i++){
        picture[i] = "*"+picture[i]+"*";
    }
    for(let i=0; i<n+2; i++){
        border.push('*');
    }

    border = border.join("");
    picture.unshift(border);
    picture.push(border);
    return picture;
}
/*
let arr = [1,2];
arr.unshift(0);
arr.push(3);
console.log(arr);
*/
solution(["abc",
"ded"]);