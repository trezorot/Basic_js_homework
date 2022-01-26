console.log(`Homework_LOOPS`);

console.log(`---- Exercise 1 -----`);

let arrayOfStrings = ['Harry', 'Potter', 'is', 'a', 'fantastic', 'movie','!'];

function bigString(array) {
    let string = []
    for(let i = 0; i < array.length; i++) {
        if(i < array.length - 2){
            string += array[i] + ' ';
        }
        else string += array[i];
    }
    return string
}
console.log(bigString(arrayOfStrings));


console.log(`---- Exercise 2 -----`);

let odd = [];
let even = [];
for(let j = 1; j <= 20; j++) {
    if(j % 2 === 0) {
        even += j + "\n";
    }
    else odd += j + " ";
}

console.log(even);
console.log(odd);

console.log(`---- Exercise 3 ----`);

mixedArray = ["Kate", "", true, 25, 3, 8, 88, "1", 2, null, -38, 858, 0, -1, NaN];

function sumOfNumbers(newArray) {
    let minNum = Infinity;
    let maxNum = -Infinity;
    for (let i = 0; i < newArray.length; i++){
        if(typeof newArray[i] == 'number'){
            if (newArray[i] < minNum){
                minNum = newArray[i];
            }
            if (newArray[i] > maxNum){
                maxNum = newArray[i];
            }
        }
    }
    return `Max number is: ${maxNum}, Min number is: ${minNum} and the sum of these two numbers is: ${maxNum + minNum}.`
}
console.log(sumOfNumbers(mixedArray));


console.log(`----- Exercise 4 -----`);

let firstNames = ["Katerina", "Ivana", "Maja", "Bisera", "Viktorija", "Sanja"];
let lastNames = ["Donevska", "Stojadinovska", "Aleksikj", "Ilievska-Bojkovski", "Kovacevska", "Stojkovska"];

function fullNames(){
    let fullName = [];
    for(let j = 0; j < firstNames.length; j++){
        fullName.push(`${j+1}. ${firstNames[j]} ${lastNames[j]}`)
    }
    return fullName
}
console.log(fullNames());
