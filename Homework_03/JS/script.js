console.log(`------ Exercise 1 -------`);
function tellStory(name, mood, activity){
console.log(`This is ${name}. ${name} is a nice person. Today he is ${mood}. He is ${activity} all day. The end.`);
}

tellStory("Dragan", "sad", "crying");
tellStory();

function tellAnotherStory(array = [`Aleksandar`, `happy`, `dancing`, `He`]) {
    console.log(`This is ${array [0]}. ${array [0]} is a nice person. Today ${array [3]} is ${array [1]}. ${array [3]} is ${array [2]} all day. The end.`);
} 

tellAnotherStory();
tellAnotherStory(array = [`Katerina`, `excited`, `singing`, `She`]);
tellAnotherStory(array = [`Milovan`, array [1], array [2], `it`]);



// Exercise 2
console.log(`------- Exercise 2 -------`);
//write a function that will take an array of 5 numbers as an argument and return the sum. print it in the console or in alert.
//BONUS: write another function called validateNumber() that checks if a number is a valid number and call it for every number. if one of the numbers of the array is invalid show an error message instead of a result.

function arrayOfNumbers(fiveNumbers = [1, 3, 5, 7, 9]){
    let sum = 0;
    for(let i = 0; i < fiveNumbers.length; i++) {
        sum += fiveNumbers[i];
    }  
        return sum;  
}
let resultSum = arrayOfNumbers();
console.log(resultSum);

// BONUS
console.log(`------- BONUS EXERCISE -------`);

function validateNumber(number){
    if(typeof number === 'number'){
        return true;
    }
    else return false;
}

validateNumber();
console.log(validateNumber(`kate`));
