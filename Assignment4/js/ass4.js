var convertResult;
var holdUnits;

//inside the input, it holds inches and centimeters
function setUnits(input) {
  //units convertion
  if (input == "Centimeters") {
    holdUnits = "Inches";
    document.getElementById("label").innerHTML = "Centimeters";
    } else {
    holdUnits = "Centimeters";
    document.getElementById("label").innerHTML = "Inches";
  }
  return holdUnits;
}

function convert(){
  if(holdUnits=="Inches"){
    convertResult = document.getElementById("measurement").value * .393;
    document.getElementById("answer").innerHTML = convertResult + " Inches";
  } else {
    convertResult = document.getElementById("measurement").value * 2.54;
    document.getElementById("answer").innerHTML = convertResult + " Centimeters";

  }
  
}
