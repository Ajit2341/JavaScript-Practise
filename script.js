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