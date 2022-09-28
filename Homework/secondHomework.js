/*
1- Find min value of array.
2- Get the student with the highest note from an grade of student (each student has his own name and grade)
3- Sort an array
4- Given an array of chars show the UPPERCASES.
*/

// 1 //////////////////////////////////////////////////////////////////////

let arr = [10,9,8,7,6,5,4,3,2,1];
let findMin = (arr)=>{
    let min = arr[0];
    for (const item of arr) {
        if(item<min) min = item;
    }
    console.log(min);
    return min;
}

findMin(arr);

// 2 //////////////////////////////////////////////////////////////////////
let students = [{name: "Ema", grade:8},
                {name: "Leo", grade:9}, 
                {name: "Juan", grade:10},  
                {name: "Giuliano", grade:10},   
                {name: "Carlos", grade:6}, 
                {name: "Marco", grade:7}]
/*
function maxGrade(students){
    let n = students.length;
    let max = students[0].grade;
    maxName = students[0].name;

    for (const student of students) {
        if(student.grade>max){
            max = student.grade;
            maxName = student.name;
        }
    }
    console.log(maxName);
    return maxName;
}
*/

function maxGrade2(students){
    let n = students.length;
    let max = students[0].grade;
    let bestStudents = [];
    for (const student of students) {
        if(student.grade>max){
            max = student.grade;
        }
    }
    for (const student of students) {
        if(student.grade == max){
            bestStudents.push(student.name);
        }
    }
    console.log(bestStudents);
}
maxGrade2(students);

// 3 //////////////////////////////////////////////////////////////////////
/* Swap */
function swap(a,b){
    let aux;
    aux = a;
    a = b;
    b = a;
}
/* Selection sort */
function selecSort(arr){
    let n = arr.length;
    let min;
    let aux;

    for (let i=0; i<n; i++){        
        min = i;
        for (let j=i+1; j<n; j++){        
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
    }
}
/*
selecSort(arr);
console.log(arr);
*/

/* Bubble Sort */
function bubbleSort(arr){
    let n = arr.length;
    let aux;
    for (let i=0; i<n; i++){
        for (let j=1; j<n-i; j++){
            if(arr[j]<arr[j-1]){
                aux = arr[j];
                arr[j] = arr[j-1];
                arr[j-1]=aux;
            }
        }
    }
}
/*
bubbleSort(arr)
console.log(arr);
*/

// 4 //////////////////////////////////////////////////////////////////////
let chars = ["a", "b", "X", "c","Z", "ñ","!","$","K"];
function uppercases(chars){
    let n = chars.length;
    for(let i=0; i<n; i++){
        if(chars[i]>="A" && chars[i]<="Z"){
            console.log(chars[i]);
        }
    }
}
uppercases(chars);


/*
let arr1 = [1,3,5,7,9,11,12,13,14];
let arr2 = [0,2,4,6,8,10];

function merge(arr1, arr2){
    let n =  arr1.length;
    let m =  arr2.length;
    let i,j,k;
    let newArr = [];
    i=j=k=0;
    while(n>0 && m>0){
        console.log(i, j, k);
        if(arr1[i]<=arr2[j]){
            newArr[k] = arr1[i];
            i++;
            k++;
            n--;
        } else {
            newArr[k] = arr2[j];
            j++;
            k++;
            m--;
        }
    }
    console.log(newArr);
}

merge(arr1,arr2);
*/

