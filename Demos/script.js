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

/*
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

*/

//objects
/*
const student={

    firstName: 'Ajit',
    lastName: 'Auti',
    age: 2023 - 1995,
    does: 'coding',
    friends: ['vilas','ajay', 'jay']
}

console.log(student);

console.log(student.does);

const nameKey = 'Name';

console.log(student['first'+nameKey]);

const interestedData = prompt('what do you want to know about the student: firstname, lastname, age, does, friends')


if (student[interestedData]){
    console.log(student[interestedData]);
} else {
    console.log('input value is not present in object');
}

console.log(`${student.firstName} has ${student.friends.length} friends, his best friend is ${student.friends[1]}`)

*/
//object methods

// function that is attached to an object is a method
/*
const student=
{

    firstName: 'Ajit',
    lastName: 'Auti',
    birthYear: 1995,
    does: 'coding',
    friends: ['vilas','ajay', 'jay'],
    hasDrivingLicence: true, 
    calcAge: function(){
        console.log(this);
        return 2023 - this.birthYear;
    }
}
const student2=
{

    firstName: 'Prajkta',
    lastName: 'Auti',
    birthYear: 1993,
    does: 'coding',
    friends: ['poo','jay', 'rutu'],
    hasDrivingLicence: false, 
    // calcAge: function(){
    //     return 2023 - this.birthYear;
    // }
    calcAge: function(){
        this.age = 2023 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.age} years old person, she has ${this.hasDrivingLicence ? 'a' : 'no' }  driving licence `
    }
}

console.log(student.calcAge()); 
console.log(student2.calcAge()); 
console.log(student2)
console.log(student2.age);

// console.log(`${student2.firstName} is a ${student2.age} years old person, he has a driving licence ${student2.hasDrivingLicence}`);


console.log(student2.getSummary());
// console.log(student['calcAge'](1995));
*/


// const years = new Array(1991,2004,2008,2020);

// const ages = []

// for(let i = 0; i < years.length; i++){
//      ages.push(2023 - years[i]) 
// }

// console.log(ages);

// const student=[

// "firstName",
// "lastName",
// "age",
// "does",
// ['vilas','ajay', 'jay']
// ]
// console.log(student.length);
//  for (let i = student.length -1; i >=0; i--){
// console.log(i, student[i]);

//  }

//  for(let exercise = 1; exercise < 5; exercise++){
//     console.log(`=====Starting exercise ${exercise}===============`);

//     for(let rep = 1; rep <= 5; rep++){
//         console.log(`Exercise ${exercise}: Lifing weights repetion ${rep}`);
//     }
//  }

// stopp the loop when dice is 6
// let dice = Math.trunc(Math.random() * 6) +1;
// // console.log(dice);

// while(dice !== 6){
//     console.log(`Dice printed number is not 6 but its ${dice}`);
//     dice = Math.trunc(Math.random() * 6) +1;
//     if (dice === 6){
//         console.log('Loop is ending value 6');    }
// }

const temperture = [3,-2,-6,-1,'error', 9,13,17,15,9,5]

//find temp amplitude = diff highesht temp - lowest tmp

// let maxTemp = Number.NEGATIVE_INFINITY;
// let minTemp = Number.POSITIVE_INFINITY;
// //const tempAmplitude = Number.POSITIVE_INFINITY;


// for (let i = 0; i <temperture.length; i++){
//     const currentTemp =  temperture[i]

//     if (typeof currentTemp === 'number' && currentTemp > maxTemp){
//         maxTemp = currentTemp
//     }
//     if (typeof currentTemp === 'number' && currentTemp < minTemp){
//         minTemp = currentTemp
//     }
// }


// const tempAmplitude = maxTemp - minTemp;
// console.log(maxTemp);
// console.log(minTemp);
// console.log(tempAmplitude);



/*

const calcTempAmplitude = function(temps) {
    let max = temps[0];
    let min = temps[0];

    for( let i = 0; i < temps.length; i++){

        const currentTemp = temps[i];

        if(typeof currentTemp !== 'number') continue;

        if (currentTemp > max){
            max = currentTemp;
        } 
      
        if (currentTemp < min){
            min = currentTemp;
        } 
     
    }

    const tempA = max - min;
    return tempA;
}

console.log(calcTempAmplitude(temperture))

*/

// function now receive 2 arrays with temps
// // merge two arrays 
// const tempertureNew = [6,-7,-4,-6,'error', 11,13,17,15,20,5]
// const calcTempAmplitude = function(t1,t2) {
//     const temps = t1.concat(t2);
//     let max = temps[0];
//     let min = temps[0];

//     for( let i = 0; i < temps.length; i++){

//         const currentTemp = temps[i];

//         if(typeof currentTemp !== 'number') continue;

//         if (currentTemp > max){
//             max = currentTemp;
//         } 
      
//         if (currentTemp < min){
//             min = currentTemp;
//         } 
     
//     }

//     const tempA = max - min;
//     return tempA;
// }

// console.log(calcTempAmplitude(temperture,tempertureNew))

// const data1 = [17, 21 ,23]

// const printForcast = function(arr){

//     for(let i = 0; i <= arr.length; i++){
//         const currentTemp =  arr[i];
//         const day = i +1;

//         const tempString = `${currentTemp} in ${day} day,`
//     }
//  return tempString
// }


// const printForcast2 = function(arr){
//     let str = ''
//     for(let i = 0; i < arr.length; i++){
//        str += `... ${arr[i]} C in ${i} days `
//     }

//     return str
// }

// const tempStr = printForcast2(data1);
// console.log(tempStr);


// scope

// let myName = 'ajit';

// function first(){

//     const age = 30;

//     if (age >= 30){
//         const decade = 3;
//         var millenial = true;
//     }


// function second(){
//     const job = 'student';

//     console.log('====================================');
//     console.log(`${myName} is a ${age} old ${job}`);
//     console.log('====================================');
// }

// second()

// }

// first();

/*
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed = this.speed + 10;
    console.log(`${this.make} car speed after acceleration is ${this.speed}`);
}
Car.prototype.brake = function(){
    this.speed = this.speed - 5;
    console.log(this.speed);
}

const BMW = new Car("Racecar", 100)
const Mercedes = new Car("Sportscar", 400)

BMW.accelerate()

*/

// ES6 Classes

// class by function declaration

// const PersonCls = class {

// }

// class normal
/*
class PersonCls {
    constructor(firstName, lastName, birthYear){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(`${this.firstName} age is => ${2022 - this.birthYear}`);
    }
}

const Ram = new PersonCls("Ram","Yadav", 1990);
Ram.calcAge();

PersonCls.prototype.greet = function (){
    console.log(`Hi from prototype method is => ${this.firstName}`);
}
console.log('====================================');
console.log('Classes are not hoisted');
console.log('====================================');
Ram.greet();

console.log('====================================');
console.log(PersonCls.prototype === Ram.__proto__);
console.log('====================================');
console.log('====================================');
console.log(Ram.__proto__);
console.log('====================================');
*/

// getters and setters

const account = {
    owner: 'AJit',
    movements: [100,200,300,400],

get latest(){
    return this.movements.slice(-2).pop();
},
set latest(move){
    return this.movements.push(move);
},
set latestatFirst(money){
    return this.movements.unshift(money)
}
}
console.log(account.lastest);
account.latest = 800
console.log(account.movements);
account.latestatFirst = 600
console.log(account.movements);


// classes ctr get and set

class PersonCls {
    constructor(firstName, lastName, birthYear){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(`${this.firstName} age is => ${2022 - this.birthYear}`);
    }

    get caAge(){
        return 2023 - this.birthYear;
    }

    static hey(){
       console.log("Hey there");
       console.log(this); 
    }
}

const Ram = new PersonCls("Ram","Yadav", 1990);
Ram.calcAge();

console.log(Ram.caAge);
PersonCls.hey();
// Ram.hey(); //script.js:725 Uncaught TypeError: Ram.hey is not a function
// static method are not available to the instances of the class eg=> Ram is instance of PersonCl