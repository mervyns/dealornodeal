// Create variables for each element of the Jumbotron to make it easier to change the content after
const jumbotronDisplay = document.getElementById("jumbotron");
const jumbotronDisplayTitle = document.getElementById("jumbotron-title");
const jumbotronDisplayContent = document.getElementById("jumbotron-content");
const jumbotronDisplayImage = document.getElementById("jumbotron-image");
const jumbotronDisplayButton = document.getElementById("jumbotron-button");

const showJumbotronWithBankerCall = function() {
  jumbotronDisplayTitle.innerText = "RING RING RING";
  jumbotronDisplayContent.innerText =
    "You have an incoming call from the banker";
  jumbotronDisplayImage.src = "./img/incomingcall.gif";
  jumbotronDisplayButton.innerText = "Answer the call";
  jumbotronDisplayButton.onclick = function() {
    hideJumbotron();
  };
  jumbotronDisplay.style.display = "inline-block";
  jumbotronDisplay.classList.add("heartbeat");
};

const hideJumbotron = function() {
  jumbotronDisplay.style.display = "none";
  answerBankerCall();
};

// Jumbotron function to call when a box that has a certain value
const jumbotronDisplayOpenForValue = function() {
  jumbotronDisplayTitle.innerText = "";
  jumbotronDisplayContent.innerText = "";
  jumbotronDisplay.classList.remove("heartbeat");
  jumbotronDisplayButton.innerText = "OK.";
  jumbotronDisplayButton.onclick = function() {
    jumbotronDisplay.style.display = "none";
  };
  jumbotronDisplay.style.display = "inline-block";
  setTimeout(function() {
    jumbotronDisplay.style.display = "none";
  }, 5000);
};

// Jumbotron function to call when opened 1000000 box
const jumbotronDisplayOpen1000000 = function() {
  jumbotronDisplayTitle.innerText = "";
  jumbotronDisplayContent.innerText = "";
  jumbotronDisplay.classList.remove("heartbeat");
  jumbotronDisplayButton.innerText = "OK.";
  jumbotronDisplayButton.onclick = function() {
    jumbotronDisplay.style.display = "none";
  };
  jumbotronDisplay.style.display = "inline-block";
  setTimeout(function() {
    jumbotronDisplay.style.display = "none";
  }, 5000);
};

// Function for showing Jumbotron with Winning Page
const showJumbotronWithWinningPage = function(boxNumber, boxId) {
  jumbotronDisplayTitle.innerText = "OPEN YOUR BOXXXXXXX";
  jumbotronDisplayContent.innerText = "OPEN IT!!!!!";
  jumbotronDisplayImage.src = "./img/openbox.gif";
  jumbotronDisplayButton.innerText = "Open Box Number " + boxNumber;
  jumbotronDisplayButton.onclick = function() {
    showWinningAmountAndAskToPlayAgain(boxId);
    jumbotronDisplayImage.src = "";
  };
  jumbotronDisplay.style.display = "inline-block";
};

// Function to call if player accepted the Banker Offer, End game and let player choose to play again
const acceptedBankerAmountEndGameAndAskToPlayAgain = function(
  bankeramount,
  boxId
) {
  const lastBoxToBeOpened = document.getElementsByClassName("initial-box");
  jumbotronDisplayTitle.innerText = "Congratulations!";
  jumbotronDisplayTitle.style.color = "#ff0000";
  jumbotronDisplayTitle.style.fontWeight = "bold";
  jumbotronDisplayTitle.style.fontSize = "25px";
  jumbotronDisplayContent.innerText =
    "You accepted the banker amount of $" +
    parseInt(bankeramount).toLocaleString() +
    ". Your original box actually contained $" +
    parseInt(boxId).toLocaleString();
  jumbotronDisplay.classList.remove("heartbeat");
  jumbotronDisplayContent.classList.add("bounce-in-top");
  jumbotronDisplayContent.style.fontSize = "30px";
  jumbotronDisplayContent.style.fontWeight = "bold";
  jumbotronDisplayImage.src = "./img/makeitrain.gif";
  jumbotronDisplayImage.parentNode;
  jumbotronDisplayContent.style.color = "#ff0000";
  jumbotronDisplayButton.innerText = "Click here to play again!";
  jumbotronDisplayButton.onclick = function() {
    window.location.reload();
  };
  jumbotronDisplay.style.display = "inline-block";
};

// Function to show winning amount at end of game and ask to play again
const showWinningAmountAndAskToPlayAgain = function(boxId) {
  jumbotronDisplayTitle.innerText = "The amount you won is";
  jumbotronDisplayTitle.style.fontSize = "40px";
  jumbotronDisplayImage.src="./img/makeitrain.gif"
  jumbotronDisplayContent.innerText = parseInt(boxId).toLocaleString();
  jumbotronDisplayContent.classList.add("tracking-in-contract-bck-top");
  jumbotronDisplay.classList.remove("heartbeat");
  jumbotronDisplayContent.style.fontSize = "90px";
  jumbotronDisplayContent.style.fontWeight = "bold";
  jumbotronDisplayContent.style.color = "#ff0000";
  jumbotronDisplayButton.innerText = "Click here to play again!";
  jumbotronDisplayButton.onclick = function() {
    window.location.reload();
  };
};
