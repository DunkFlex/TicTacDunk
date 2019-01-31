const grid = document.getElementsByClassName ("prison");

function startGame(){
	document.turn="X";
	promptMessage(document.turn + " gets to initiate ");
	checkRow();
}

function myRefresh(){
	location.reload();
}

function promptMessage (setmsg){ 
	document.getElementById("message").innerText = setmsg;
}

// If player press the same prison tile and switching players after input-------------------------------
function nextMove(prison) {	
	 if(prison.innerText == ''){
 		prison.innerText = document.turn;
 		checkRow();
 		 switchPlayer();
 		} else {
 		 	promptMessage("CLICK SOMEWHERE ELSE!!!")
 		 }
	   }


function switchPlayer() {
	if(document.turn == "X"){
		document.turn= "O";
	}else {
		document.turn ="X";	
	}
		promptMessage(" It's " + document.turn + "'s turn")
	}
//-------winning category combinations: 8 combinations total -----------------------------------------------------------------

// NAME ASSIGNED TO BOXES
const gettingNumber0= document.getElementById ("s0")
const gettingNumber1= document.getElementById ("s1")
const gettingNumber2= document.getElementById ("s2")
const gettingNumber3= document.getElementById ("s3")
const gettingNumber4= document.getElementById ("s4")
const gettingNumber5= document.getElementById ("s5")
const gettingNumber6= document.getElementById ("s6")
const gettingNumber7= document.getElementById ("s7")
const gettingNumber8= document.getElementById ("s8")

function checkRow () {
	// console.log(gettingNumber0)
	// console.log(gettingNumber1)
	// console.log(gettingNumber2)
	// console.log(gettingNumber0.innerHTML=="X")
	// console.log(gettingNumber1=="X")
	// console.log(gettingNumber2=="X")

	if ( (gettingNumber0.innerHTML== "X" && gettingNumber1.innerHTML== "X" && gettingNumber2.innerHTML=="X")||
		 (gettingNumber3.innerHTML== "X" && gettingNumber4.innerHTML== "X" && gettingNumber5.innerHTML=="X")||
		 (gettingNumber6.innerHTML== "X" && gettingNumber7.innerHTML== "X" && gettingNumber8.innerHTML=="X")||
		 (gettingNumber0.innerHTML== "X" && gettingNumber3.innerHTML== "X" && gettingNumber6.innerHTML=="X")||
		 (gettingNumber1.innerHTML== "X" && gettingNumber4.innerHTML== "X" && gettingNumber7.innerHTML=="X")||
		 (gettingNumber2.innerHTML== "X" && gettingNumber5.innerHTML== "X" && gettingNumber8.innerHTML=="X")||
		 (gettingNumber0.innerHTML== "X" && gettingNumber4.innerHTML== "X" && gettingNumber8.innerHTML=="X")||
		 (gettingNumber2.innerHTML== "X" && gettingNumber4.innerHTML== "X" && gettingNumber6.innerHTML=="X")||
		 (gettingNumber0.innerHTML== "O" && gettingNumber1.innerHTML== "O" && gettingNumber2.innerHTML=="O")||
		 (gettingNumber3.innerHTML== "O" && gettingNumber4.innerHTML== "O" && gettingNumber5.innerHTML=="O")||
		 (gettingNumber6.innerHTML== "O" && gettingNumber7.innerHTML== "O" && gettingNumber8.innerHTML=="O")||
		 (gettingNumber0.innerHTML== "O" && gettingNumber3.innerHTML== "O" && gettingNumber6.innerHTML=="O")||
		 (gettingNumber1.innerHTML== "O" && gettingNumber4.innerHTML== "O" && gettingNumber7.innerHTML=="O")||
		 (gettingNumber2.innerHTML== "O" && gettingNumber5.innerHTML== "O" && gettingNumber8.innerHTML=="O")||
		 (gettingNumber0.innerHTML== "O" && gettingNumber4.innerHTML== "O" && gettingNumber8.innerHTML=="O")||
		 (gettingNumber2.innerHTML== "O" && gettingNumber4.innerHTML== "O" && gettingNumber6.innerHTML=="O")){		
		alert ("WOWOWOWOW WE HAVE A WINNER")
		
		}
	else if (
		(gettingNumber0.innerHTML=="X" || gettingNumber0.innerHTML=="O") &&
		(gettingNumber1.innerHTML=="X" || gettingNumber1.innerHTML=="O") &&
		(gettingNumber2.innerHTML=="X" || gettingNumber2.innerHTML=="O") &&
		(gettingNumber3.innerHTML=="X" || gettingNumber3.innerHTML=="O") &&
		(gettingNumber4.innerHTML=="X" || gettingNumber4.innerHTML=="O") &&
		(gettingNumber5.innerHTML=="X" || gettingNumber5.innerHTML=="O") &&
		(gettingNumber6.innerHTML=="X" || gettingNumber6.innerHTML=="O") &&
		(gettingNumber7.innerHTML=="X" || gettingNumber7.innerHTML=="O") &&
		(gettingNumber8.innerHTML=="X" || gettingNumber8.innerHTML=="O") ){
		alert ("Tied")		
	    }
	}


