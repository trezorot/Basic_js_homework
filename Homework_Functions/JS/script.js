console.log(`------ Homework_Function_01 -----`);

function typeOfInput(parametar){
    return typeof(parametar);
}

let something;

console.log(typeOfInput(888));
console.log(typeOfInput(false));
console.log(typeOfInput(something));
console.log(typeOfInput("Show this"));
console.log(typeOfInput(students = [`Katerina`, `Ivana`, `Erika`, `Milena`]));


console.log(`----- Homework_Function_02 -----`);

let accountAmount = 8000;
let amountWithdrawn = parseInt(prompt(`Enter the amount you would like to withdraw?`));
atm(amountWithdrawn);
function atm(amount){
    if(amount > accountAmount) {
        alert(`Not enough money!`);
    } else {
        alert(`You withdrew ${amount} denars, now you have ${accountAmount - amount} denars on your account`)
    }
}


console.log(`----- Homework_Function_03 -----`);

function humanToDog(year) {
    console.log(`${year} years in human years is ${year * 7} years in dog years.`);
    console.log(`${year} years in dog years is ${year / 7} years in human years.`);
}

humanToDog(14);


console.log(`----- Exercise_Function_01 -----`);

function celsiusToFahrenheit(degrees) {
    console.log(`${degrees} degrees Celsius is ${degrees * 1.8 + 32} degrees in Fahrenheit.`);
    console.log(`${degrees} degrees Fahrenheit is ${ 5/9 * (degrees - 32) } degrees in Celsius.`)
}

celsiusToFahrenheit(43);


console.log(`----- Exercise_Function_02 -----`);

function calculateAge(birthYear, currentYear) {
    console.log(`You are ${currentYear - birthYear} years old.`);
}

calculateAge(1989,2009);
calculateAge(1991,2022);
calculateAge(2000,2021);

console.log(`----- Bonus -----`);

function currentYear(birthYear, myAge) {
    console.log(`I was born in ${birthYear} and I am ${myAge} years old, therefore it is ${birthYear + myAge} now.`);
}

currentYear(1991,30);
currentYear(1984,25);
currentYear(1995,15);


// Winter break exercises - functions 
console.log(`------ Winter break exercises ------`);
console.log(`---- Exercise 1 -----`);

// let minutes = parseInt(prompt(`Convert minutes to seconds`));
// function minutesToSeconds(seconds) {
//     console.log(`${minutes} minutes are ${minutes * 60} seconds.`);
// }
// minutesToSeconds();
function minutesToSeconds(minutes) {
    console.log(`${minutes} minutes are ${minutes * 60} seconds.`)
}
minutesToSeconds(5);
minutesToSeconds(8);
minutesToSeconds(2);

console.log(`----- Exercise 2 -----`);

function nextNumber(number) {
    return `The wanted result is ${number + 1}.`;
}

nextNumber(8);
nextNumber(17);
nextNumber(21);


console.log(`----- Exercise 3 -----`);

function hoursToSeconds(hours) {
    console.log(`${hours} hours is ${(hours * 60) * 60} seconds.`);
}
hoursToSeconds(1);
hoursToSeconds(8);
hoursToSeconds(286);


console.log(`----- Exercise 4 -----`);

function result(num1,num2) {
    console.log(`The remainder of ${num1} and ${num2} is ${num1%num2}.`);
}
result(15,3);
result(8,5);
result(21,4);

console.log(`----- Exercise 5 -----`);

function farm(chickens,cows,pigs) {
    console.log(`The farmer has ${chickens} chickens, ${cows} cows and ${pigs}pigs. The total number of legs of all the animals is ${chickens * 2 + cows * 4 + pigs * 4}.`);
}
farm(2,2,2);
farm(5,10,20);
farm(28,34,78);

console.log(`----- Exercise 6 -----`);

string1 = "Katerina"
string2 = "Sonja"
function stringCount(par1,par2) {
        return par1.length === par2.length;
}
console.log(stringCount(string1,string2));


console.log(`----- Exercise 7 -----`);

function singularOrPlural(word) {
    if(word[word.length - 1] === "s"){
        console.log(`The word is plural.`);
    } else{
        console.log(`The word is singular.`);
    }
} 
singularOrPlural(`papers`);
singularOrPlural(`cake`);

console.log(`----- Exercise 8 -----`);

strOne = "Harry"
strTwo = "Ronald"

function caseInsensitive(one, two){
    return one.toUpperCase() === two.toUpperCase();
}
console.log(caseInsensitive(strOne, strTwo));

console.log(`----- Exercise 9 -----`);

function months(number) {
    switch (number) {
        case 1: return "January"
        case 2: return "February"
        case 3: return "March"
        case 4: return "April"
        case 5: return "May"
        case 6: return "June"
        case 7: return "Jully"
        case 8: return "August"
        case 9: return "September"
        case 10: return "October"
        case 11: return "November"
        case 12: return "December"
    }

}
console.log(months(5));
console.log(months(10));
console.log(months(2));

console.log(`----- Exercise 10 -----`);

function testTruthyOrFalsy(value){
    return value ? console.log(`The parameter is truthy.`) : console.log(`The parameter is falsy.`);
    // if(value) return "Trurhy"
    // else return "Falsy"
}

testTruthyOrFalsy(NaN);
testTruthyOrFalsy(`Kate`);
testTruthyOrFalsy(true);