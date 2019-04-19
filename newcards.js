const createBtn = document.querySelector("#create");
const userOutput = document.querySelector("#output");
const cardArr = [];
const deleteBtns = [];
let cardCount = 1;


createBtn.addEventListener("click", () => {

  let userInput = document.querySelector("#userInput");

  //below creates card
  let newCard = document.createElement('div');
  newCard.id = `card--${cardCount}`;
  newCard.className = "card";
  let textArea = document.createElement('p');
  textArea.textContent = userInput.value;
  let button = document.createElement('button');
  button.id = `delete--${cardCount}`;
  button.textContent = "DELETE ME, BRO";
  button.addEventListener('click', () => {
    console.log('delete stuff.... figure it out');
  });

  //below appends card and it's contents
  newCard.appendChild(textArea);
  newCard.appendChild(button);
  userOutput.appendChild(newCard);
  deleteBtns.push(button);
  cardArr.push(newCard);
  cardCount++;
  userInput.value = " ";
  userInput.focus();
});

const removeCard = (parentID, childID) => {
  let child = document.getElementById(childID);
  let parent = document.getElementById(parentID);
  parent.removeChild(child);
}

// deleteBtns.forEach((btn) => {
//   let splitbtn = e.target.id.split("-");
// })

// use the article that they are selected in as a parent to removeChild()?

// removeElement("output", "card--")