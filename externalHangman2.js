// JavaScript source code

// Array with a selection of words for the hangman game:
var wordForHangmanGame = ["spectacular", "knowledge", "umbrella", "eyesight", "lineage", "cursor"];

// A variable for theCorrectWord:
var correctWord = "";

// A variable for displaying the progress in gueesing the word:
var arrayUserFillsOut = []; 

// A variable containing the empty spaces for the word:
var emptyWord = "";

// A variable to keep count of letters entered by user:
var countLetterEntered = 0;

// A variable for the letter entered by the user:
/* var elaborateLetter = document.getElementById("newLetter");
elaborateLetter.innerHTML = document.getElementById("newLetter").value;
*/
// elaborateLetter.size = "10";
// elaborateLetter.name = "Letter";

// An array with the images for the hangman graphics:
var imgs = [ "0.jpg" , "1.jpg" , "2.jpg" , "3.jpg", "4.jpg", "5.jpg" ] ;

// A decoy array for temporary storage of images:
var preload = new Array() ;



// A function to create an empty word the length of the correct word:

// function displayEmptyWord(wordIn)
function createEmptyWord(wordIn)
{
	var lengthOfWordSelected = 0;
	var arrayToBeOutput = [];
	lengthOfWordSelected = wordIn.length;
	for(i=0; i<lengthOfWordSelected; i++)
    {
		arrayToBeOutput[i] = "_";
	}

	return arrayToBeOutput;
}

// function to react when user enters a letter:
function reactToEnterLetter()
{
	// Check if letter is correct:
	// if()
	countLetterEntered = countLetterEntered + 1;
}

/* function soll()
{
	window.alert("This Is Italian");
	 return "Ciao bella";
}
*/

/*
function poll()
{
	// var form = document.getElementById("pizza");
	// var i;
	// var frustration = "";
	window.alert("What is going on?");
	// wordDiv.innerHTML = "floeirueorufklfheiorueoruoiruo";

	// Call the function 'selectRandomWordFromArray(arrayInput)' passing
	// the wordForHangmanGame[] array as a paramter into it, which is 
	// defined in the 'init()' funcion.
	// It will be exciting to see how things go.  Maybe that variable is 
	// global. The function is to return the chosen word.  Its variable
	// is also defined in the 'init()' function.
	// theCorrectWord = selectRandomWordFromArray(wordForHangmanGame);
}

/*
function displaySelectedWord()
{
	return "spectacular";
}
*/ 

function selectRandomWordFromArray(arrayInput)
{
	// Create variables and initialize them:
	var lengthOfArray = 0;
	var indexOfArray = 0;
	var outputString = "";

	// Determine the length of the array:
	lengthOfArray = arrayInput.length;

	// Determine the index of the string to select 
	// using a random generator:
	indexOfArray = Math.floor(Math.random()*lengthOfArray);

	// Assign the element of the array in the position indexOfArray
	// to the variable 'outputString':
	outputString = arrayInput[indexOfArray];

	return outputString;
	// 
}

// A function for displaying an image:
function displayImage(index_of_image)
{
  /*pic.src = imgs[ i ] ;
  ( i === ( imgs.length -1 ) ) ? i=0 : i++ ;
  setTimeout( rotate , 1000 ) ; 
  */
  pic.src = imgs[index_of_image];
} 


function init()
{

	var str;
	// var theCorrectWord;

	var obj1 = document.getElementById("firstDiv");
	var obj2 = document.getElementById("secondDiv");
	var obj3 = document.getElementById("thirdDiv");
	var obj4 = document.getElementById("fourthDiv");
	var objProgressWord = document.getElementById("paragraphProgressOfWord"); 
	var fifthDiv = document.getElementById("fifthDiv");
	
	// Select random word from the array wordForHangmanGame[]:
    // theCorrectWord = selectRandomWordFromArray(wordForHangmanGame);

	// document.getElementById("btn").onclick = soll;

	// Put images in place for use in program:
    var preload = new Array() ;
    for( i = 0 ; i < imgs.length ; i++ )
    {
      preload[ i ] = new Image() ;
      preload[ i ].src = imgs[ i ] ;
    }
    i = 5 ;
    displayImage(i) ;

	document.getElementById("firstBtn").addEventListener("click", function(){
    
	// Reinitialisations:
	paragraphProgressOfWord.innerHTML = "";
	arrayUserFillsOut = "";
	countLetterEntered = 0;
	displayImage(0); // reinitialize the hangman graphics.

	// Call function to select a word randomly from an array:
	correctWord = selectRandomWordFromArray(wordForHangmanGame);

	fifthDiv.innerHTML = correctWord;

	arrayUserFillsOut = createEmptyWord(correctWord);

	  for(i=0; i<correctWord.length; i++)
	  {
		paragraphProgressOfWord.innerHTML += " " + arrayUserFillsOut[i];
	  } 

	// progressingWord = "";
	});

	// Function to react to letter being entered:
	document.getElementById("btnLetter").addEventListener("click", function(){
	    var elaborateLetter = document.getElementById("newLetter");
		// localStorage.valuableDiamond = "The Monk Diamond";
		elaborateLetter.innerHTML = document.getElementById("newLetter").value;
		// elaborateLetter.innerHTML = "I hope you are fine!";
		// alert(elaborateLetter.innerHTML);
		// alert("Are you OK?");
		// alert(localStorage.valuableDiamond);
		// document.getElementById("showTheLetter").innerHTML = elaborateLetter.innerHTML;
		sixthDiv.innerHTML = document.getElementById("newLetter").value;
	});

}
document.addEventListener("DOMContentLoaded", init, false);

