const prizeMoney = [
  1,
  5,
  10,
  25,
  50,
  75,
  100,
  200,
  300,
  400,
  500,
  750,
  1000,
  5000,
  10000,
  25000,
  50000,
  75000,
  100000,
  200000,
  300000,
  400000,
  500000,
  750000,
  1000000
];
// Initialize an empty array to hold the selected values.
let selectedValues = [];
// Initialize the number of boxes
let boxNumber = 1;

// Initialize the number of turns
let turnNumber = 0;

let bankerHasAnOffer = false;

const gameTable = document.getElementById("game-board");
const valueTable = document.getElementById("money-table");
let gameBox = document.getElementsByClassName("game-box");
let valueBox = document.getElementsByClassName("value-box");
const dealButton = document.getElementById("deal-button");
const noDealButton = document.getElementById("no-deal-button");

const mappingFunctionToValueTable = function(val) {
  let newCell = document.createElement("div");
  newCell.textContent = val.toLocaleString();
  newCell.setAttribute("class", "value-box");
  valueTable.appendChild(newCell);
};

const mappingFunctionToGameBox = function(val) {
  let newCell = document.createElement("div");
  newCell.textContent = boxNumber;
  newCell.setAttribute("class", "game-box");
  newCell.setAttribute("id", val);
  gameTable.appendChild(newCell);
  boxNumber++;
};

//Shuffle values in prizeMoney array
function getShuffledArray(arr) {
  let newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
}

// Set randomized prize money into values on Game Board
let randomPrizeMoney = getShuffledArray(prizeMoney);
randomPrizeMoney.forEach(function(item) {
  mappingFunctionToGameBox(item);
});

// Map game values onto the Values Table at the side
prizeMoney.forEach(function(item) {
  mappingFunctionToValueTable(item);
});

// Get the Turn Number display
let turnNumberDisplay = document.getElementById("turn-number");
let messageDisplay = document.getElementById("message-display");

// Setting a function to call when Box is clicked.
function clickBox() {
  // Convert string to number
  numberValue = parseInt(this.id);
  // Add selected value to selected value array
  selectedValues.push(numberValue);
  // Add commas for thousands seperator
  this.innerText = numberValue.toLocaleString();
  this.classList.add("opened-box");
  // Increment the Turn Number every time a box is clicked.
  turnNumber++;
  turnNumberDisplay.innerText = turnNumber;
  // Cancelling out the opened box on the value table
  for (i = 0; i < valueBox.length; i++) {
    if (this.innerText === valueBox[i].innerText) {
      valueBox[i].classList.add("strike-box");
    }
  }
  checkGame();
}

// Adding Event Listener on each game box to listen for click event
for (i = 0; i < gameBox.length; i++) {
  gameBox[i].addEventListener("click", clickBox);
}

let playerDealDecision;

// Add Event Listener to Deal or No Deal Buttons to listen for click
dealButton.onclick = function() {
  if (bankerHasAnOffer === true) {
    playerDealDecision = true;
    dealCheck();
  }
};

noDealButton.onclick = function() {
  if (bankerHasAnOffer === true) {
    playerDealDecision = false;
    dealCheck();
  }
};

// Create Game Logic
// Create Function to Log Deal or No Deal Value and proceeed or end the game depending on the choice.
const dealCheck = function() {
  if (playerDealDecision === true) {
    console.log("true");
  } else {
    bankerHasAnOffer = false
    console.log("game continues")
  }
};

const checkGame = function() {
  // Reduce the total amount in the array to a single value for easy calculation
  let totalPrizeMoney = prizeMoney.reduce(function(a, b) {
    return a + b;
  });

  let totalSelectedValues = selectedValues.reduce(function(c, d) {
    return c + d;
  });
  if (turnNumber === 0) {
    messageDisplay.innerText = "Choose a box.";
  } else if (
    turnNumber === 7 ||
    turnNumber === 12 ||
    turnNumber === 16 ||
    turnNumber === 20
  ) {
    // Set the offerValue to be the average remaining value.
    let offerValue =
      (totalPrizeMoney - totalSelectedValues) / (25 - turnNumber);
    messageDisplay.innerText =
      "The banker called! He offered you $" +
      parseInt(offerValue).toLocaleString();

    bankerHasAnOffer = true;
  }
};
