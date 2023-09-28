/*
let js = "amazing"
console.log(40 +8 + 23 -10);

const PI = 3.142
let nameYear = "parley"

//'country', 'continent' and 'population'
//Assingment 1

let country = 'India';
let continent = 'Asia';
let population = 2000000000;
let isIsland = false;
let language;
// let isIsland

var x = 10

{
    var x = 2
}

console.log("value of x",x)

let y = 10

{
    let y = 2
}

console.log("value of y",y)

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(typeof(isIsland));
console.log(language);
*/


/*
//operator
const ageNow = 2050
const ageAjit = ageNow -1995
const ageShaila = ageNow -1969
console.log("ajtt age",ageAjit, ageShaila);
console.log("ajtt age multi divide",ageAjit *2, ageAjit /2);
// 2 to the power of 3
console.log(2**3);

const firstName = 'Ajit'
const lastName  ='Auti'
console.log(firstName +' '+ lastName);

// operator precedence
// below 10+5 happens first then the value will be assigned to variables
let h  =  10+5; // 15
h +=10;  // h = h + 10
h *= 4 // h = h *4
h++
h--
h--
console.log(h);

console.log(ageAjit >= ageShaila);

const comparAge = ageAjit <= ageShaila
console.log(comparAge);

*/

// const ageNow = 2050
// const ageAjit = ageNow -1995
// const ageShaila = ageNow -1969
// // math operator first than comparison
// console.log(ageNow -1995 > ageNow -2018);

// const firstName = 'Jonas'
// const job = 'teacher'
// const birthYear = 1991
// const year = 2034

// const jonas = "I'm " + firstName + ',a ' +(year - birthYear) +' years old' + job + '!';

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`
// console.log(jonasNew);

// console.log(`hey i am ${job}`);

// console.log(`lorem6
// adfsdfs
// asdfasdf`);

/*
type conversion and coercion
*/
/*
const inputYear = '1995'
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) +28);

console.log(Number('ajit'));

console.log(typeof(NaN));

//type coersion

console.log('23' - '10' -3);
console.log('23' + '10' + 3);
*/
/*
const hadDriverLicense = true;
const hasGoodVision = true;

console.log(hasGoodVision && hadDriverLicense);
console.log(hasGoodVision || hadDriverLicense);

const isTired = true

const shouldDrive = hasGoodVision && hadDriverLicense;

if (hasGoodVision && hadDriverLicense && !isTired){
    console.log('Sarah should drive');
}else{
    console.log('Sarah should not drive');
}

const age =23

const drink = age >= 18 ? 'wine' : 'water'

console.log(drink)

console.log(` I like to drink ${age>=18 ? 'wine' : 'water'} as a person`);

*/
/*
function fruitProccessor (apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} orange`
    return juice;
}

const juiceToDrink = fruitProccessor(5, 0)
console.log(juiceToDrink);

console.log(fruitProccessor(5, 0));

const appleOrangjuice = fruitProccessor(5, 10)
console.log(appleOrangjuice);
*/


/*
const age1 = calcAge(1995)

// const age2 = calcAge2(1995)

// script.js:159 Uncaught ReferenceError: Cannot access 'calcAge2' before initialization
// in declarative function or anonymous funtion canot be called before they are created coz of //hoisting
// const age2 = calcAge2(1995)

//function declartion
function calcAge(birthYear){
    return 2023 - birthYear;
}

//function expression
const calcAge2 =function calcAge(birthYear){
    return 2023 - birthYear;
}
const age2 = calcAge2(1995)
console.log(`age from age1 function ${age1} and age2 from the anonymous funtion ${age2}`);
*/

/*

//arrow functions

const calcAge2 =function calcAge(birthYear){
    return 2023 - birthYear;
}

const calcAge3 = birthYear => 2023 - birthYear

const age3 = calcAge3(1995)
console.log(age3);

const yearsUntilRetirement = (birthYear, firsName) => {
    const age = 2023 - birthYear;
    const retiredAfter = 60 - age;
    return retiredAfter;
}

const retireAge = yearsUntilRetirement(1995)
console.log(`I will retire after ${retireAge} years of working`);

const yearsUntilRetirement1 = (birthYear, firsName) => {
    const age = 2023 - birthYear;
    const retiredAfter = 60 - age;
    return `${firsName} will retire after ${retiredAfter} years now!!`;
}

const retireAge1 = yearsUntilRetirement1(1992, 'Linesh')
console.log(retireAge1);

*/


//function inside the function
/*
const cutPieces = function(fruit){
    return fruit * 4;
}

function fruitProccessor (apples, oranges){
    console.log(`apple fruit passed ${apples} and orange fruit passed ${oranges}`);

    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)

    const juice = `Juice with ${applePieces} apples and ${orangePieces} orange`
    return juice;
}

function calculatePiecesToCut(){
    // console.log(`apple fruit passed ${apples} and orange fruit passed ${oranges}`);
    const apples = parseInt(document.getElementById('apples').value)
    const oranges = parseInt(document.getElementById('oranges').value)

    const applePieces = cutPieces(apples)
    const orangePieces = cutPieces(oranges)

    const juice = `Juice with ${applePieces} apples and ${orangePieces} orange`
   // return juice;
   document.getElementById('result').innerText = juice
}

const juiceToDrink = fruitProccessor(5, 10)
console.log(juiceToDrink);
*/

//Arrays

const people = ['Linda', 'Dp', 'Vinit', 'Jay']
console.log(people);

const years = new Array(1991,2004,2008,2020);
//console.log(years);

//console.log(people[0]);

//console.log(people.length);

console.log(people[people.length -1]);

people[2] = 'Bandu'
console.log(people)

const ajit = ['ajit', 'auti', 21]
console.log(ajit);

const lastName = 'patil'
const ajit2 = ['ajit', lastName, 21, people]
console.log(ajit2);

//exercise
// we have a array of birthyear and we want to calculte their ages

const calcAge2 =function calcAge(birthYear){
    return 2023 - birthYear;
}

const yearNew = [1990,1969,1964,1995,1993]

// console.log(calcAge2(yearNew));

console.log(calcAge2(yearNew[2]));

console.log(calcAge2(yearNew[yearNew.length -1]));

const age1 = calcAge2(yearNew[3])
console.log(age1);

const ages = [calcAge2(yearNew[1]),calcAge2(yearNew[2]),calcAge2(yearNew[yearNew.length -1])]
console.log(ages);

const newLength = people.push('ajit')
console.log(people);
console.log(newLength);

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("demo").innerHTML = people.toString();
})

//add elt at first place
people.unshift('Ray')
console.log(people);

// removes last elements
people.pop();

// popped will give the element removed from array and the last element will be removed
const popped = people.pop();
console.log(people);
console.log(popped);

// shift will remove the first element and shifted will give the element removed
const shifted = people.shift()
console.log(people);
console.log(shifted);

console.log(people.indexOf('Dp'));  // OP 1
console.log(people.indexOf('Jay')); // OP -1 (element not in array)

// includes uses strict equality operator so type must me same
console.log(people.includes('Jay'));
console.log(people.includes('Dp'));

people.push(23)

console.log(`modified array to check includes ${people}`);
console.log(`modified array to check includes value ${people.includes('23')}`);
console.log(`modified array to check includes value when its a number is: ${people.includes(23)}`);

if (people.includes('Peter')){
    console.log(` You have a friend called Peter`);
}else if (people.includes('Linda')){
    console.log(` You have a friend called Linda`);
}else {
    console.log('dont have any friends in array');
}

