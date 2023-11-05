//my age
const myAge = 27;
//The first two years of a dog's life
let earlyYears = 2;
earlyYears *= 10.5;
//Since we already accounted for the first two years, take myAge variable and subtract 2 from it.
let laterYears = myAge - 2;
//Multiply laterYears variable by 4 to calculate the number of dog years accounted for by your later years.
laterYears *= 4;


//These print out the ages that we've calculated. 10.5 x 2 = 21 and 27 - 2 = 25, then 25 x 4 does = 100.
console.log(earlyYears);
console.log(laterYears);


let myAgeInDogYears = earlyYears + laterYears;
//Assigning a variable called myName to my name written as a string. While .toLowerCase() is meant to print the code in lower case characters.
let myName = 'Rajiv M'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in humans years which is ${myAgeInDogYears} in dog years`);