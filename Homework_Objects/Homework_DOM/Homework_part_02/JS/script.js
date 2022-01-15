let arrayOfNumbers = [1, 3, 5, 7, 9];
let listOfNumbers = document.getElementById('listOfNumbers');

let arraySum = 0;
let arrayString = '';

for (let i = 0; i < arrayOfNumbers.length; i++) {
    listOfNumbers.innerHTML += `<li>${arrayOfNumbers[i]}</li>`;
    arraySum += arrayOfNumbers[i];
    if (i < arrayOfNumbers.length - 1) arrayString += `${arrayOfNumbers[i]} + `
    else arrayString += `${arrayOfNumbers[i]} = ${arraySum}`
}

let sumOfNumbers = document.getElementById('sumOfNumbers');
sumOfNumbers.innerHTML = `The total sum of numbers in this array is ${arrayString}`