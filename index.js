

// on click -- function?
// add X if it's X turn
// add O if it's O turn
//make sure there isnt anything there already
//check for winner each time -call function
// keep going until all boxes are full... hard code nine?

//winnercheck function
//Eight if statements to compare results?
//highlight boxes? display winner
//call a highlight and alert function pass in boxes needing to be highlighted.


let infoDiv = document.getElementById("infoDiv"); // infoDiv set for later Dom Manipulation
let boxes = document.querySelectorAll(".box"); //number of boxes counter for loops and checks
let turnFlag = 1; // set turn flag to 1 as it's X turn... Odd X , even O (because mod 0)
let winFlag = 0;  // game not yet won set flag


//function to check for the winner
function whosDawinner(bOne, bTwo, bThree) {
    //set a winner class for CSS control
    bOne.classList.add("winner");
    bTwo.classList.add("winner");
    bThree.classList.add("winner");
    //infoDiv.classList.add("winner");
    infoDiv.innerHTML = bOne.innerHTML + " is a winner"; // manipulate text display winner

    //change infoDiv class into a bootstrap alert 
    infoDiv.classList.add("alert"); 
    infoDiv.classList.add("alert-primary");
    infoDiv.classList.add("container-fluid");


    winFlag = 1; // setthe win flag to 1 to prevent further game manipulation
}

//function for checking winner
//runs after each box is clicked
function daWinnerCheck() {

    //set all box grids to a value for manipulation and comparison
    const grd1 = document.getElementById("grid1");
    const grd2 = document.getElementById("grid2");
    const grd3 = document.getElementById("grid3");
    const grd4 = document.getElementById("grid4");
    const grd5 = document.getElementById("grid5");
    const grd6 = document.getElementById("grid6");
    const grd7 = document.getElementById("grid7");
    const grd8 = document.getElementById("grid8");
    const grd9 = document.getElementById("grid9");

    //block of if statements to compare if a winner has been hit and then call whosDaWinner function

    //if the first grid ROW has and item, check they are all the same
    if ((grd1.innerHTML !== "") && (grd1.innerHTML === grd2.innerHTML) && (grd1.innerHTML === grd3.innerHTML)) {
        whosDawinner(grd1, grd2, grd3);
    }
    
    //if the second grid ROW has an item, check they are all the same
    if ((grd4.innerHTML !== "") && (grd4.innerHTML === grd5.innerHTML) && (grd4.innerHTML === grd6.innerHTML)) {
        whosDawinner(grd4, grd5, grd6);
    }

    //if the third grid ROW has an item, check they are all the same
    if ((grd7.innerHTML !== "") && (grd7.innerHTML === grd8.innerHTML) && (grd7.innerHTML === grd9.innerHTML)) {
        whosDawinner(grd7, grd8, grd9);
    }

    //if the first grid COLUMN has an item, run compare
    if ((grd1.innerHTML !== "") && (grd1.innerHTML === grd4.innerHTML) && (grd1.innerHTML === grd7.innerHTML)) {
        whosDawinner(grd1, grd4, grd7);
    }

    //if the second grid COLUMN has an item, run compare
    if ((grd2.innerHTML !== "") && (grd2.innerHTML === grd5.innerHTML) && (grd2.innerHTML === grd8.innerHTML)) {
        whosDawinner(grd2, grd5, grd8);
    }

    //if the third grid COLUMN has an item, run compare
    if ((grd3.innerHTML !== "") && (grd3.innerHTML === grd6.innerHTML) && (grd3.innerHTML === grd9.innerHTML)) {
        whosDawinner(grd3, grd6, grd9);
    }

    //if the first DIAGONAL has an item, run compare
    if ((grd1.innerHTML !== "") && (grd1.innerHTML === grd5.innerHTML) && (grd1.innerHTML === grd9.innerHTML)) {
        whosDawinner(grd1, grd5, grd9);
    }
    //if the second DIAGONAL has an item, run compare
    if ((grd3.innerHTML !== "") && (grd3.innerHTML === grd5.innerHTML) && (grd3.innerHTML === grd7.innerHTML)) {
        whosDawinner(grd3, grd5, grd7);
    }
    
    //If the turnflag count reaches the same as the length AND the winflag ws never triggered. It's a tie. 
    if (turnFlag == boxes.length && winFlag ==0) {

    //set infoDiv same as winner function but different color scheme
        infoDiv.innerHTML = "Game is a Tie!";
        infoDiv.classList.add("alert"); 
        infoDiv.classList.add("alert-success");
    }


}


//outside of function should run all the time

// run for number of boxes... should be 9

for (var i = 0; i < boxes.length; i++) {

    //for all boxes onclick function

    boxes[i].onclick = function () {

        if (winFlag == 0) {   // flag checks if the win has occured and locks play


            if (this.innerHTML !== "X" && this.innerHTML !== "O") { // confirms that the square is empty

                if (turnFlag % 2 !== 0) {  //if the turnFlag is odd (starts with 1) do this

                    console.log(turnFlag + " - Turn #"); //test output
                    console.log(winFlag + " - winFlag"); // test output

                    this.innerHTML = "X";    //Add X to square
                    infoDiv.innerHTML = "O Turn Now"; // display next turn
                    daWinnerCheck();        // check for the winner is called.
                    turnFlag += 1;           // increase turnFlag for mod comparison change
 
                } else {                    // if the turnflag is even execute O turn items

                    console.log(turnFlag + " - Turn #"); // test output
                    console.log(winFlag + " - winFlag"); // test output

                    this.innerHTML = "O"; //add O to square
                    infoDiv.innerHTML = "X Turn Now"; // display next turn
                    daWinnerCheck();             // check for winner function called
                    turnFlag += 1;        //increase the turn flag/counter
                };
            };

        }; // end Win check
    };

};



// function to clear out ttgame grid
function playAgain() {

    //for all boxes
    for (var i = 0; i < boxes.length; i++) {
        
        boxes[i].classList.remove("winner");  // remove the winner class if present and set inner HTML to null
        boxes[i].innerHTML = "";

    }

    //reset the infoDiv and clear all class info
    infoDiv.innerHTML = "Click a Square to Start!";
    infoDiv.className = "";

    //set intial flags back to default values.
    turnFlag = 1;
    winFlag = 0;
} 