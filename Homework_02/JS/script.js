// Homework

console.log(`--------< HOMEWORK >--------`);

let input1 = prompt(`Enter Your Year of Birth`);
console.log(input1);
let yearOfBirth = parseInt(input1);
console.log(typeof(yearOfBirth));

let zodiac = (yearOfBirth - 4) % 12

if(zodiac < 1){
    console.log(`Your Chinese Zodiac sign is Rat!`); 
}
else if(zodiac >=1 && zodiac <2){
    console.log(`Your Chinese Zodiac sign is Ox!`);
}
else if(zodiac >=2 && zodiac <3){
    console.log(`Your Chinese Zodiac sign is Tiger!`);
}
else if(zodiac >=3 && zodiac <4){
    console.log(`Your Chinese Zodiac sign is Rabbit!`);
}
else if(zodiac >=4 && zodiac <5){
    console.log(`Your Chinese Zodiac sign is Dragon!`);
}
else if(zodiac >=5 && zodiac <6){
    console.log(`Your Chinese Zodiac sign is Snake!`);
}
else if(zodiac >=6 && zodiac <7){
    console.log(`Your Chinese Zodiac sign is Horse!`);
}
else if(zodiac >=7 && zodiac <8){
    console.log(`Your Chinese Zodiac sign is Goat!`);
}
else if(zodiac >=8 && zodiac <9){
    console.log(`Your Chinese Zodiac sign is Monkey!`);
}
else if(zodiac >=9 && zodiac <10){
    console.log(`Your Chinese Zodiac sign is Rooster!`);
}
else if(zodiac >=10 && zodiac <11){
    console.log(`Your Chinese Zodiac sign is Dog!`);
}
else if(zodiac >=11 && zodiac <12){
    console.log(`Your Chinese Zodiac sign is Pig!`);
}
else{ 
    console.log(`Error!`);
}


// Drug nacin na koj moze da se resi zadacava!


// let input1 = prompt(`Enter Your Year of Birth`);
// console.log(input1);
// let yearOfBirth = parseInt(input1);
// console.log(typeof(yearOfBirth));

// let zodiac = (yearOfBirth - 4) % 12

// if(zodiac === 0){
//     console.log(`Your Chinese Zodiac sign is Rat!`); 
// }
// else if(zodiac ===1){
//     console.log(`Your Chinese Zodiac sign is Ox!`);
// }
// else if(zodiac ===2){
//     console.log(`Your Chinese Zodiac sign is Tiger!`);
// }
// else if(zodiac ===3){
//     console.log(`Your Chinese Zodiac sign is Rabbit!`);
// }
// else if(zodiac ===4){
//     console.log(`Your Chinese Zodiac sign is Dragon!`);
// }
// else if(zodiac ===5){
//     console.log(`Your Chinese Zodiac sign is Snake!`);
// }
// else if(zodiac ===6){
//     console.log(`Your Chinese Zodiac sign is Horse!`);
// }
// else if(zodiac ===7){
//     console.log(`Your Chinese Zodiac sign is Goat!`);
// }
// else if(zodiac ===8){
//     console.log(`Your Chinese Zodiac sign is Monkey!`);
// }
// else if(zodiac ===9){
//     console.log(`Your Chinese Zodiac sign is Rooster!`);
// }
// else if(zodiac ===10){
//     console.log(`Your Chinese Zodiac sign is Dog!`);
// }
// else if(zodiac ===11){
//     console.log(`Your Chinese Zodiac sign is Pig!`);
// }
// else{ 
//     console.log(`Error!`);
// }