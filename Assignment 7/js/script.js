//Part 1: Set tutor variables that need to be global (the variables we need)
var startTime;
var level = 1; //Level of difficulty
var beginnerMSG = "A sailor was swabbing the deck of a ship.";
var advancedMSG = "His axe hit his hand and he screamed *&%$!!";
 
//**************ONLOAD Event ************************* (assigned on the body in html) */
//Part 2: Establish click events for the typing levels
function setup() {
    document.getElementById("beginner").onclick =
        function () {
            level = 1;
        };
 
    document.getElementById("advanced").onclick =
        function () {
            level = 2;
        };
}
 
//Part 3: Write the handler for startIt()
//****************startIt handler: Begins the test**************/
function startIt() {
    //Task 1: Clear out previous session
    var inputTxt = document.getElementById("typist_text");
    inputTxt.value = "";
    var starImage = document.getElementById("star_img");
    starImage.src = "media/empty.png";
 
    //Task 2: Get the start time
        var day = new Date();
        startTime = day.getSeconds();
   
    //Task 3: Create a message for the user to type
    if(level==1) {
        msgType = beginnerMSG;
    }
    else {
        msgType = advancedMSG;
    }
   
    //Task 4: Display the test
    var textMsgTxt = document.getElementById("textMsgField");
    textMsgTxt.value = msgType;
 
    //Task 5: Clear out the previous game results
    document.getElementById("answer").innerHTML = "";
}
 
//Part 4: Write the handler for stopIt()
//************stopIt handler: Ends the test*************/
function stopIt() {
    //Task 1: Compute the elapsed time
    var day = new Date();
    var endTime = day.getSeconds();
    var elapsedTime = endTime-startTime;
 
    //Task 2: Grab the entered text and the test
    var typistTxt = document.getElementById("typist_text").value;
    var textMsgTxt = document.getElementById("textMsgField");
 
    //Task 3: Build a response based on scenarios
    var msg = "";
    var starImage = document.getElementById("star_img");
 
        //Scenario 1: User hit the stop button but failed to enter text
    if(typistTxt == "" || textMsgTxt.value == "") {
        msg += "You didn't type anything silly.";
    }
 
        //Scenario 2: User typed correctly
    else if(typistTxt == textMsgTxt.value) {
        msg += "Good Job. You typed the text correctly." + "<br>Your time was " + (elapsedTime) + " seconds.";
        starImage.src = "media/EmojiUp.jpg";
    }
 
        //Scenario 3: User typed text incorrectly
    else {
        msg += "Entered incorrectly." + "<br>You should have typed \"" + textMsgTxt.value + "\"" + "<br>You typed \"" + typistTxt + "\"";
        starImage.src = "media/emojiDown.jpg";
    }
 
    //Task 4: Display the test results
    document.getElementById("answer").innerHTML = msg;
}