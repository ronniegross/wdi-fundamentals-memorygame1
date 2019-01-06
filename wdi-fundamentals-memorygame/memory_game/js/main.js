// console.log("Up and running!");
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

// var cards = ["queen", "queen", "king", "king"];
var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png',
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png',
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png', 
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png',
	}
];
var cardsInPlay = [];

var wins = 0;

var checkForMatch = function()	{
	if (cardsInPlay.length > 2)	{
		reset()};
	if (cardsInPlay.length > 1)	{
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
			wins += 1;
			updateCounter();
			// console.log("You found a match!");
		} else {
			// console.log("Sorry, try again.");
			alert("Sorry, try again.");
		}
	}
	
}

var updateCounter = function()	{
	var stringEnd = (wins === 1) ? "time" : "times";
	document.getElementById('counter').innerHTML = "You have won " + wins + " " + stringEnd;
}

var flipCard = function()	{
	var cardID = this.getAttribute('data-id');
	// var cardOne = cards[0];
	// cardsInPlay.push(cardOne);
	// console.log("User flipped " + cardOne);

	// var cardTwo = cards[2];
	// cardsInPlay.push(cardTwo);
	// console.log("User flipped " + cardTwo);

	// if (cardsInPlay.length === 2) {
	// 	if (cardsInPlay[0] === cardsInPlay[1])	{
	// 		alert("You found a match!");
	// 	} else	{
	// 		alert("Sorry, try again.");
	// 	}
	// }
	this.setAttribute('src', cards[cardID].cardImage);
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
}
// flipCard(0);
// flipCard(2);

var createBoard = function()	{
	for (var i = 0; i < cards.length; i++)	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
	updateCounter();
};

createBoard();

var reset = function() {
	// reset cards in play to be an empty array
	// after comparison in check for match call reset 
	// show revert back to blank card face
	cardsInPlay = [];
	var gameBoard = document.getElementById('game-board');
	while (gameBoard.firstChild)	{
		gameBoard.removeChild(gameBoard.firstChild);
	}
	createBoard();
}










