//    ------- Homework 01-Objects --------
console.log(`------- Homework 01-Objects --------`);

// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs


let animal = {
    animalName: `Oskar`,
    animalKind: `Dog`,
    animalSpeak: function(text){
        return `${this.animalKind} says: Hello my name is ${this.animalName}`; //keyword THIS refers to the object tha it is a 
    }
}

console.log(animal);
let animalSays = animal.animalSpeak(`Hello my name is ${this.animalName}!`);
console.log(animalSays);


// ----- Homework 02-Objects ------
console.log(`----- Homework 02-Objects ------`);

// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

function Book(inputTitle, inputAuthor, inputReadingStatus){
    this.title = inputTitle;
    this.author = inputAuthor;
    
    this.readStatus = function(inputReadStatus){
        if (inputReadStatus === true){
            return `Already read "${inputTitle}" by ${inputAuthor}.`
        }
        else {
            return `You still need to read "${inputTitle}" by ${inputAuthor}.`
        }

    }
}

let book01 = new Book(`Hunger Games`, `Suzanne Collins`, true);
console.log(book01.readStatus(true));
let book02 = new Book(`Murder on the Orient Express`, `Agatha Christie`, false);
console.log(book02.readStatus(false));