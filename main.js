"use strict";
// declare variables
var mainAudio = document.getElementById("bridgeAudio");
var audio = document.getElementById("myAudio");
var myVar;
var clickSound = "f";
var dMessage = 0;
var confirmMessage = "f";
var confirmMessage2 = 0;
var confirmMessage3 = false;
var messageShown1 = false;
var confirmMessage4 = false;
var inOrbit = false;
var didNavigate = false;
document.getElementById("disclaimerText").style.display = "block";
var sColor = "#3399ff";
var kColor = "Orange";
var uColor = "Red";

// clear disclaimer
function confirmDisclaimer() {
  	document.getElementById("disclaimer").style.display = "none";
  	document.getElementById("disclaimerConfirm").style.display = "none";
  	document.getElementById("disclaimerText").style.display = "none";
  	document.getElementById("disclaimerButton").style.display = "none";
  	loadGame();
}

// start game
function loadGame() {
	alert("Click OK To Begin The Game");
  	var x;
  	x = document.getElementById("myBridge");
  	x.src = "images/ReturnToDemonWorld.gif";
	setTimeout(function(){document.getElementById("myBridge").src = "images/bridge.gif";}, 6000);
	setTimeout(function(){startAudio();}, 6000);
	setTimeout(begin, 9000);
}

//main audio-Currently disabled
function startAudio() {
  //mainAudio.loop = true;
  //mainAudio.play();
}

//begin main dialog
function begin() {
	if (confirmMessage2 == 0) {
		dMessage = 0;
		createMessage2('Captain\'s Log', kColor, "Though the Enterprise's primary mission is peaceful exploration, the galaxy holds many surprises. To be prepared, we are conducting a mock battle with the U.S.S. Republic.");
		showMessage2();	
		setTimeout(begin, 500);
	} else if (confirmMessage2 == 1) {
		dMessage = 1;
		createMessage2('Lieutenant Uhura', uColor, "Captain Patterson reports the republic is in position and ready to begin, Captain.");
		showMessage2();
		setTimeout(begin, 500);
	} else if (confirmMessage2 == 2) {
		dMessage = 2;
		createMessage2('Mr. Spock', sColor, "The Republic is arming weapons and raising shields. I suggest we do the same, Captain.");
		showMessage2();
		setTimeout(begin, 500);
	} else if (confirmMessage2 == 3) {
		dMessage = 3;
		createMessage2('Mr. Sulu', kColor, "Raising Shields.");
		showMessage2();
		setTimeout(begin, 500);	
	} else if (confirmMessage2 == 4) {
		dMessage = 4;
		createMessage2('Captain Kirk', kColor, "Lieutenant Uhura, tell Captain Patterson that we respectfully decline this mock battle. Nobody likes this part of the game anyway.");
		showMessage2();
		setTimeout(begin, 500);	
	} else if (confirmMessage2 == 5) {
		dMessage = 5;
		createMessage2('Lieutenant Uhura', uColor, "Captain Patterson says, maybe next time. Everyone on his ship agrees that they would rather dive into the mission than to run around space chasing dots on a radar screen.");
		showMessage2();
		setTimeout(begin, 500);
	} else if (confirmMessage2 == 6) {
		dMessage = 6;
		createMessage2('Lieutenant Uhura', uColor, "Message coming in from Starfleet");
		myVar = setTimeout(showMessage2, 2000);
		setTimeout(begin, 500);
	} else if (confirmMessage2 == 7) {
		dMessage = 7;
		createMessage2('Captain Kirk', kColor, "On screen, Lieutenant");
		myVar = setTimeout(showMessage2, 1000);
		setTimeout(begin, 1000);
	} else if (confirmMessage2 == 8) {
		dMessage = 8;
  		createMessage2("Admiral", sColor, "Jim, The Enterprise is ordered to travel back to Pollux V. Because of your previous mission there, the Nauians have been accepted into the Federation and we have learned many technological advances from them. Great job to you and your crew.");
  		var x = document.getElementById("admiral");
  		var x2 = document.getElementById("message");
  		var x3 = document.getElementById("messageText");
  		var x4 = document.getElementById("confirm");
  		var x5 = document.getElementById("confirmButton");
  		x.style.display = "block";
  		x2.style.top = "338px";
  		x3.style.top = "348px";
  		x4.style.top = "284px";
  		x5.style.top = "287px";
  		myVar = setTimeout(showMessage2, 1000);
		setTimeout(begin, 500);
	} else if (confirmMessage2 == 9) {
		dMessage = 9;
		//var x = document.getElementById("admiral");
  		createMessage2("Admiral", sColor, "The colonists and the Nauians have been living together peacefully, but the Nauians are starting to come down with a mysterious illness. Starfleet wants you and your team to beam down and investigate. <br />Starfleet out.");
  		x.style.display = "block";
  		myVar = setTimeout(showMessage2, 1000);
		//setTimeout(begin, 500);
	} else {
		closeAll();
	}
}

// Close All Dialog Boxes from confirm button and advance script
function closeAll() {
 if (confirmMessage === "f") {
   //alert(clickSound); 
	switch (dMessage){
		case 0:
			confirmMessage2 = 1;
			break;
		case 1:
			confirmMessage2 = 2;
			break;
		case 2:
			confirmMessage2 = 3;
			break;
		case 3:
			confirmMessage2 = 4;
			break;
		case 4:
			confirmMessage2 = 5;
			break;
		case 5:
			confirmMessage2 = 6;
			break;
		case 6:
			confirmMessage2 = 7;
			break;
		case 7:
			confirmMessage2 = 8;
			break;
		case 8:
			confirmMessage2 = 9;
			break;
		case 9:
			confirmMessage2 = 10;
			if (inOrbit == false) {
            	admiral.style.display = "none";
            }
			var x2 = document.getElementById("message");
  			var x3 = document.getElementById("messageText");
  			var x4 = document.getElementById("confirm");
  			var x5 = document.getElementById("confirmButton");
			x2.style.top = "123px";
  			x3.style.top = "133px";
  			x4.style.top = "69px";
  			x5.style.top = "72px";
			break;
		case 10:
			confirmMessage2 = 11;
			var x;
  			x = document.getElementById("myBridge");
  			x.src = "images/transport2.gif";
  			admiral.style.display = "none";
  			setTimeout(tempEnding, 5100);
  			break;
  		case 11:
  			confirmMessage2 = 12;
  			break;
		case 12:
			confirmMessage2 = 13;
	}
    if (clickSound === "t") {
      audio.play();
    }
    var x = document.getElementById("Tools1");
    x.style.display = "none";
    x = document.getElementById("Tools2");
    x.style.display = "none";
    x = document.getElementById("Tools3");
    x.style.display = "none";  
    x = document.getElementById("message");
    x.style.display = "none";
    x = document.getElementById("messageText");
    x.style.display = "none";
    x = document.getElementById("confirmButton");
    x.style.display = "none";
    clickSound = "f";
  }
}

// Close all dialog - Not part of script
function closeAll2(){
	if (clickSound === "t") {
      audio.play();
    }
    var x = document.getElementById("Tools1");
    x.style.display = "none";
    x = document.getElementById("Tools2");
    x.style.display = "none";
    x = document.getElementById("Tools3");
    x.style.display = "none";  
    x = document.getElementById("message");
    x.style.display = "none";
    x = document.getElementById("messageText");
    x.style.display = "none";
    x = document.getElementById("confirmButton");
    x.style.display = "none";
    x = document.getElementById("cTool");
    x.style.display = "none";
    clickSound = "f";
}

// create the message
function createMessage(cName, messageColor, theMessage) {
  //alert(cName + messageColor + theMessage);
  //closeAll();
  var divMessage = document.getElementById("messageText");
  divMessage.style.color = messageColor;
  divMessage.innerHTML = "<center><b>" + cName + "</b></center><hr style:'border: 1px solid orange'><p>" + theMessage + "</p>";
  clickSound = "t";
  audio.play();
  var x = document.getElementById("messageText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  x = document.getElementById("message");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  x = document.getElementById("confirmButton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// create message  
function createMessage2(cName, messageColor, theMessage) {
  //alert(cName + messageColor + theMessage);
  //closeAll();
  var divMessage = document.getElementById("messageText");
  divMessage.style.color = messageColor;
  divMessage.innerHTML = "<center><b>" + cName + "</b></center><hr style:'border: 1px solid orange'><p>" + theMessage + "</p>";
}

// show the created message
function showMessage2() {
  clickSound = "t";
  var x = document.getElementById("messageText");
  x.style.display = "block";
  x = document.getElementById("message");
  x.style.display = "block";
  x = document.getElementById("confirmButton");
  x.style.display = "block";
}

// Show Checkov controls
function cControls() {
	closeAll2();
	//alert("Chekov here!");
	if (confirmMessage2 == 10) {
  		//closeAll2();
  		clickSound = "t";
  		audio.play();
  		var x = document.getElementById("cTool");
  		if (x.style.display === "none") {
	    	x.style.display = "block";
  		} else {
    		x.style.display = "none";
  		}
  	}
}

// Select Checkov tools
function cTool(){
	closeAll2();
	if (didNavigate == true) {
		createMessage2('Mr. Sulu', kColor, "We have already navigated");
		showMessage2();
	}
	if (didNavigate == false) {
		var x;
  		x = document.getElementById("myBridge");
  		x.src = "images/polluxnavigate.gif";
  		var y = document.getElementById("myScreen");
  		y.src = "images/polluxorbit.gif";
  		setTimeout(function(){ x.src = "images/bridge.gif";
			createMessage2('Mr. Spock', sColor, "We have arrived at Pollux V and are in standard orbit");
			admiral.style.display = "block";
			showMessage2(); }, 11000);
  		inOrbit = true;
  		didNavigate = true;
	}
}

// Select Spock
function sSelection() {
  closeAll2();
  //alert("Spock Here");
  if (confirmMessage2 == 10 && inOrbit == false) {
  	clickSound = "t";
    audio.play();
  	createMessage2('Mr. Spock', sColor, "I advise referring to the star map and setting a course for the Pollux system, sir.");
	showMessage2();
  }
  if (confirmMessage2 == 10 && inOrbit == true) {
  	clickSound = "t";
    audio.play();
  	createMessage2('Mr. Spock', sColor, "We are in standard orbit and ready to beam down. We are waiting on your order sir.");
	showMessage2();
  }
}

// Select Kirk Tools
function tools2Selection() {
	closeAll2();
	if (inOrbit == true){
	  	var x = document.getElementById("Tools1");
  		x.style.display = "none";
  		x = document.getElementById("Tools2");
  		x.style.display = "none";
  		x = document.getElementById("Tools3");
  		x.style.display = "none";
  		if (confirmMessage2 == 10) {
  			dMessage = 10;
  			createMessage2('Captain Kirk', kColor, "Spock, come with me. Mr. Scott, you have the conn.");
  			showMessage2();
  		} else {
  			closeAll();
  		}
  	} else {
  		createMessage2('Mr. Sulu', kColor, "We are not in orbit, sir");
		showMessage2();
  	}
}

// Show Kirk's contols
function kControls() {
  closeAll2();
  if (confirmMessage2 == 10) {
  	//alert("Kirk Here!");
  	clickSound = "t";
  	audio.play();
  	var x = document.getElementById("Tools1");
  	if (x.style.display === "none") {
    	x.style.display = "block";
  	} else {
    	x.style.display = "none";
  	}
  	var x = document.getElementById("Tools2");
  	
  	if (x.style.display === "none") {
    	x.style.display = "block";
  	} else {
    	x.style.display = "none";
  	}
  	var x = document.getElementById("Tools3");
  	if (x.style.display === "none") {
    	x.style.display = "block";
  	} else {
    	x.style.display = "none";
  	}
  }
}

// Select Kirk Tools
function kSelection() {
  	closeAll2();
  	clickSound = "t";
  	audio.play();
  	var x = document.getElementById("kSelection");
  	if (x.style.display === "none") {
    	x.style.display = "block";
  	} else {
    	x.style.display = "none";
  	}
}

 // Temporary Ending
function tempEnding() {
	document.getElementById("myBridge").src = "images/ending.gif";
	createMessage2('Game Over', uColor, "Rookie Mistake. You cannot transport while the shields are still up. As a safety precaution your crew has been transported to a safe spot on the ship. Starfleet has been notified of your near fatal mistake and you will be relieved of your duties. Better luck next time.");
	setTimeout(function(){showMessage2();}, 1500);
	dMessage = 13;
}
