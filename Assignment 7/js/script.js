// Arrays to store text for the beginner and advanced levels
var beginnerText = [
  "radiant echoes",
  "tranquil cascade",
  "mystical breeze",
  "ethereal mirage",
  "rotten peeling", 
  "enigmatic whispers",
  "luminous serenity",
  "celestial harmony",
  "whispering shadows",
  "serendipitous whirlwind"
];
var advancedText = [
  "A Symphony of Colors and Dreams!",
  "Lost in Translation?",
  "Serenade under the Starry Sky;",
  "Echoes of Laughter and Joy.",
  "%$ because data play aarrgh",
  "Dancing in the Moonlight!",
  "Eternal Sunshine of a Spotless Mind...",
  "Whispers of a Forgotten Time;",
  "Chasing Shadows in the Dark...",
  "A Journey Beyond the Horizon..."
];

// Variables to keep track of test-related information
var sec = 0; // Timer for counting seconds
var isBeginner; // Indicates if the beginner level is selected
var text; // Stores the text for the current test
var Interval; // Interval ID for the timer

// Function to start the test
function startTest() {
  // Reset the input field, result display, and timer
  document.getElementById("userText").value = "";
  document.getElementById("result").innerHTML = "<p></p>";
  document.getElementById("resultImg").src = "";
  sec = 0;

  // Determine the user's level choice and clear any previous timer intervals
  isBeginner = document.getElementById("beginner").checked;
  clearInterval(Interval);

  // Generate a random text for the chosen level
  var random = Math.floor(Math.random() * 10);
  text = isBeginner ? beginnerText[random] : advancedText[random];

  // Display the sample text and start the timer
  document.getElementById("sampleText").textContent = text;
  Interval = setInterval(timer, 1000);
}

// Function to end the test
function endTest() {
  var userText = document.getElementById("userText").value;

  // Clear the timer interval
  clearInterval(Interval);

  if (text == undefined || sec == 0) {
      // Handle the case when the test hasn't started yet
      document.getElementById("resultImg").src = "";
      document.getElementById("result").innerHTML = "Start the test first!";
  } else if (text == userText) {
      // Handle a successful test completion
      document.getElementById("resultImg").src = "./media/EmojiUp.jpg";
      document.getElementById("result").innerHTML = "<p>Good job. You typed the text correctly.<br>Your time was " + sec + " seconds.</p>";
  } else {
      // Handle the case when the entered text doesn't match the sample
      document.getElementById("resultImg").src = "./media/emojiDown.jpg";
      document.getElementById("result").innerHTML = '<p>Sorry, you entered the text incorrectly.<br>You should have typed "' +
      text + '"<br>You typed "' + userText + '"</p>';
  }

  sec = 0; // Reset the timer
}

// Function to increment the timer (called every second)
function timer() {
  sec++;
}
