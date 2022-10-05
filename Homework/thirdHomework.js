"use strict";
function strCompare(str1, str2) {
  let n1, n2;
  n1 = str1.length;
  n2 = str2.length;
  if (n1 > n2) {
    return str1;
  } else if (n2 > n1) {
    return str2;
  } else return "Tienen el mismo tamanio";
}

function fullName(obj) {
  console.log(`Full Name: ${obj?.name} ${obj?.lastName}`);
}

function strIndexOf(arr, str) {
  let n = arr.length;
  while (n--) {
    if (str.toLowerCase() == arr[n].toLowerCase()) {
      return n;
    }
  }
  return -1;
}

// module.exports = { fullName, strCompare, strIndexOf };
export {fullName, strCompare, strIndexOf};
