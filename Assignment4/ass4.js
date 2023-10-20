var output;
var holdNumber;
function convert(){
  if(holdNumber==1){
   output = document.getElementById("measurement").value*.393 ;
   document.getElementById("answer").innerHTML =document.getElementById("measurement").value + " Centimeters" + " converts to " + output + " Inches"
  }
  else{
    output = document.getElementById("measurement").value*2.54 ;
   document.getElementById("answer").innerHTML = document.getElementById("measurement").value + " Inches" + " converts to " + output + " Centimeters"
  }
}
function setUnits(units){
  if(units==1){
    document.getElementById("label").innerHTML="Centimeters";
    holdNumber = 1;

  }
  else{
    document.getElementById("label").innerHTML="Inches";
    holdNumber = 2;
    
  }
  return holdNumber;
}

