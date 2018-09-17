var prizeMoney = [
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

const gameTable = document.getElementById("game-board");
const valueTable = document.getElementById("money-table");
let gameBox = document.getElementsByClassName("game-box");

const mappingFunctionToValueTable = function(val) {
  let newCell = document.createElement("div");
  newCell.textContent = val;
  newCell.setAttribute("class", "value-box");
  valueTable.appendChild(newCell);
};

const mappingFunctionToGameBox = function(val) {
  let newCell = document.createElement("div");
  newCell.textContent = val;
  newCell.setAttribute("class", "game-box");
  newCell.setAttribute("id", val);
  gameTable.appendChild(newCell);
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

for (i = 0; i < gameBox.length; i++) {
  gameBox[i].addEventListener("click", function() {
    console.log("clicked");
  });
}
