// const { fullName, strCompare, strIndexOf } = require("./thirdHomework.js");
import { fullName, strCompare, strIndexOf } from './thirdHomework.js';

const arr = ["carlos", "perro", "auto", "terremoto"];
const str = "auto";

const person = {
  name: "Emanuel",
  lastName: "Villanueva",
};

console.log(strIndexOf(arr, str));
fullName(person);
