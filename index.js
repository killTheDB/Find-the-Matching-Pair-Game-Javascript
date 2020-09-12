const cards = document.querySelectorAll(".card");
const scoredisplay = document.querySelector(".scoretext");
console.log(cards);

//variables
var isFlipped = false;
var firstCard;
var secondCard;
var score = 0;

cards.forEach((card) => card.addEventListener("click", flip));


function flip() {
  // console.log("Card flipped");
  // console.log(this);
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);

    checkIt();
  }
}

function checkIt() {
  //   console.log("Checking...");
  if (firstCard.dataset.image === secondCard.dataset.image) {
    score += 10;
    scoredisplay.innerHTML = "";
    const h = document.createElement("h3");
    const text = document.createTextNode(`Score : ${score}`);
    h.appendChild(text);
    scoredisplay.appendChild(h);
    success();
  } else {
    fail();
  }
}

function success() {
  //   console.log("Success");
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  //   console.log("Failed");
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO: shuffle

(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
  });

})();
