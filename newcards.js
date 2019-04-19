const createBtn = document.querySelector("#create");
const userOutput = document.querySelector("#output");
const cardArr = [];
let cardCount = 1;

const appendCard = (card) => {

}

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

  //below deletes card
  button.addEventListener('click', (e) => {
    let cardNum = e.target.id.split('-');
    cardArr.forEach((card) => {
      if (cardNum[2] === card.id.split('-')[2]) {
        userOutput.removeChild(card);
      }
    })

  });

  //below appends card and it's contents
  newCard.appendChild(textArea);
  newCard.appendChild(button);
  userOutput.appendChild(newCard);
  cardArr.push(newCard);
  cardCount++;
  userInput.value = " ";
  userInput.focus();
});