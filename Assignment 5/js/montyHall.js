var choosenDoor;
var winningDoor;
var blankDoor;
var message = " "; //hold things for us
var turns = 0; //number of terms

function randomize() {
  winningDoor = Math.floor(Math.random() * 3); //Returns the greatest integer less than or equal to its numeric argument.
}

function chooseDoor(choosenDoor) {
  var x;

  if (choosenDoor == blankDoor && turns > 0 && turns <2) {
    message =
      "The door you picked is empty, <br> choose one of the two doors available";
  } else {
    if (turns == 0) {
      if (choosenDoor == winningDoor) {
        x = Math.floor(Math.random() * 2);
      }

      for (var i = 0; i < 3; i++) {
        if (i != winningDoor && i != choosenDoor) {
          blankDoor = i;
          if (x == 0) {
            break;
          }
        }

      }
      document.images[blankDoor].src = "./media/blank.png";
      message =
        "You selected door " +
        (choosenDoor + 1) +
        "<br> Door " +
        (blankDoor + 1) +
        " does not have the car and has been removed." +
        " Would you like to stay your original door? <br> Choose one of the two doors available.";
      turns++;
    } else if (turns == 1) {
      if (choosenDoor == winningDoor) {
        document.images[choosenDoor].src = "./media/mhcar.png";
        message = "Congratulations, you win a billion dollar car!!!";
      } else {
        document.images[choosenDoor].src = "./media/mhlostCar.png";
        message = "Try again! Wish you good luck!";
      }
      message += "<br><br> Click one of the doors to play again.";
      turns++;
    } else {
      for (let i = 0; i < 3; i++) {
        document.images[i].src = "./media/mhdoor" + (i + 1) + ".png";
        winningDoor = Math.floor(Math.random() * 3);
        turns = 0;
        message = "Please pick a door.";
      }
    }
  }
  document.getElementById("instructions").innerHTML = message;
}
