//Human years
const myAge = 37;

//use as calculate
let earlyYears = 2;
earlyYears *= 10.5;

//new var
let laterYears = myAge - 2;

//calculate the number of dog years accounted for by later years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

//Human age in doggy years
let myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

//Name in lowercase
let myName = console.log('Virgill Pinas'.toLowerCase());

//Doggy years for human
console.log(`My Name is ${myName}. I a am ${myAgeInDogYears} old in dog years.`);