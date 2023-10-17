//1uzduotis
const actorname = 'Arnoldssfsfsf'
const actorsurname = 'Schwartzneger'

if (actorname.length < actorsurname.length) {
  console.log(actorname);
}else console.log (actorsurname);
 



//antra uzduotis//
const vardas = 'Juozas'
const pavarde = 'Zigmantas'
const birthdate = 1991
const currentyear = 2023
const age = currentyear - birthdate

console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${age} metai `);

//trecia uzduotis
const x = 'Arnoldas';
const y = 'Schwarznegeris';
const w = x.substring(0,3) + y.substring(0,3) 
console.log(w)


//ketvirta uzduotis
const john = "Once upon a time in hollywood";
const pakeistas = john.replace(/o/g, "*")
console.log (pakeistas)

//penkta uzduotis


const randomNumber = Math.floor();
console.log(randomNumber);

//sesta
function getRandomInt(min, max) {
    // Use Math.floor to round down to the nearest integer
    // Add 1 to include the max value in the possible range
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const min = 1; // Minimum value
const max = 4; // Maximum value
const randomInteger = getRandomInt(min, max);
const random2 = getRandomInt(min, max);

console.log(randomInteger,random2);
//This getRandomInt function generates a random integer between the specified min (inclusive) and max (inclusive) values. Make sure to replace min and max with the range you need for your application.


//septinta


//astunta

 
const firstString = "Johny";
const secondString = "Bravo";

if (firstString.length > 0 && secondString.length > 1) {
  const newString = firstString[0] + secondString[0];
  console.log(newString);  
} 

//devinta

function generateRandomString(length) {
    const symbols = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * symbols.length);
      result += symbols.charAt(randomIndex);
    }
    return result;
  }
  
  const randomString = generateRandomString(3);
  console.log(randomString);


