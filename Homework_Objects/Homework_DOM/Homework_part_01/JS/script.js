console.log("-----<Homework DOM Part 1>-----");
let firstHeader = document.getElementById("myTitle");
console.log(firstHeader);
firstHeader.innerText = "This is the new cool page!"
console.log(firstHeader.innerText);

let paragraphs = document.getElementsByClassName("paragraph")[0];
console.log(paragraphs);
paragraphs.innerText = `This is the new first paragraph changed with JS`;
console.log(paragraphs.innerText);

let secondParagraph = document.getElementsByClassName("second")[0];
console.log(secondParagraph);
secondParagraph.innerText = "This is the new second paragraph changed with JS"
console.log(secondParagraph.innerText);

let newText = document.getElementsByTagName("text")[0];
console.log(newText);
newText.innerText = "This is the new text changed with JS"
console.log(newText.innerText);

let lastDiv = document.querySelectorAll(`div`)[2];
let divHeaderOne = lastDiv.firstElementChild;
divHeaderOne.innerText = 'I also changed this in JS!'
console.log(divHeaderOne.innerText);

let divHeaderTwo = divHeaderOne.nextElementSibling;
divHeaderTwo.innerText = `Finally the last text is changed in JS!`
console.log(divHeaderTwo.innerText);
