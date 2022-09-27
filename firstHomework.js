'use strict';

/////////////// ENUNCIADO

// SOLO TE DEJA PASAR SI SOS MAYOR DE 18 //
// SI TENES ENTRE 18-20 TENES QUE TENER DOCUMENTO //
// SI SOS MAYOR DE 20 TE DEJA PASAR DIRECTO //


const partyPeople = {
  person1: {
    age: 20,
    hasDocument: false,
  },
  person2: {
    age: 19,
    hasDocument: false,
  },
  person3: {
    age: 16,
    hasDocument: false,
  },
  person4: {
    age: 22,
    hasDocument: false,
  },
}

console.log(partyPeople);

let partyArray = Object.values(partyPeople);
let N = partyArray.length;

for(let i=0; i<N; i++){
  console.log(`------------- Persona numero ${i+1}-----------------\n`);
  validatePartyAccess(partyArray[i]);
}

function validatePartyAccess(person){
  if(person.age<18){
    console.log(`No pasas, volvé cuando tengas más de 18\n`);
  } else if(person.age<21){
    if(person.hasDocument) {
      console.log(`Todo en orden, podés pasar\n`);
    } else {
      console.log(`Mil disculpas pero sin documento no te puedo dejar pasar\n`);
    }
  } else {
    console.log(`Adelante caballero\n`);
  } 
}

/*          > SOLUCION 2 <

class partyCrowd{
    constructor(age, hasDocument){
      this.age = age;
      this.hasDocument = hasDocument;
    }
  
    validatePartyAccess(){
      if(this.age<18){
        console.log(`No pasas, volvé cuando tengas más de 18\n`);
      } else if(this.age<21){
        if(this.hasDocument) {
          console.log(`Todo en orden, podés pasar\n`);
        } else {
          console.log(`Mil disculpas pero sin documento no te puedo dejar pasar\n`);
        }
      } else {
        console.log(`Adelante caballero\n`);
      }
    }
  }
  
  const myParty = [];
  
  myParty[0] = new partyCrowd(20, false);
  myParty[1] = new partyCrowd(19, false);
  myParty[2] = new partyCrowd(16, false);
  myParty[3] = new partyCrowd(23, false);
  
  let n = myParty.length;
  for(let i=0; i<n; i++){
    console.log(`------------- Persona numero ${i+1}-----------------\n`);
    myParty[i].validatePartyAccess();
  }