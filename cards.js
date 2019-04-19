
const createBtn = document.querySelector("#create");
const userOutput = document.querySelector("#output");
const cardArr = [];
const deleteBtns = [];
let cardCount = 1;


createBtn.addEventListener("click", () => {

  const userInput = document.querySelector("#userInput").value;
  userOutput.innerHTML += `
      <article class="card" id="card--${cardCount}">
        <div>${userInput}</div>
        <div>
            <button id="delete--${cardCount}" onclick="removeCard('output', 'card--${cardCount}')">Delete This Card</button>
        </div>
      </article>
  `
  let newCard = document.querySelector(`#card--${cardCount}`);
  let newDeleteBtn = document.querySelector(`#delete--${cardCount}`);
  deleteBtns.push(newDeleteBtn);
  cardArr.push(newCard);
  cardCount++;
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