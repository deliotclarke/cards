
const createBtn = document.querySelector("#create");
const userOutput = document.querySelector("#output");
const cardArr = [];
const deleteBtns = [];
let cardCount = 1;


createBtn.addEventListener("click", event => {

  const userInput = document.querySelector("#userInput").value;
  userOutput.innerHTML += `
      <article class="card" id="card--${cardCount}">
        <div>${userInput}</div>
        <div>
            <button id="delete--${cardCount}">Delete This Card</button>
        </div>
      </article>
  `
  let newCard = document.querySelector(`#card--${cardCount}`);
  let newDeleteBtn = document.querySelector(`#delete--${cardCount}`);
  deleteBtns.push(newDeleteBtn);
  cardArr.push(newCard);
  cardCount++;
});

// deleteBtns.forEach((btn) => {
//   let splitbtn = e.target.id.split("-");
// })

// use the article that they are selected in as a parent to removeChild()

