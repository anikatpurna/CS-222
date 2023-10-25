function convert() {
  var length = document.getElementById("input").value;
  var elements = document.getElementsByName("unit");
  var unit, convertedLength, convertedUnit;

  for (var i = 0; i < elements.length; i++) {
      console.log(elements[i].value);
      if (elements[i].checked) {
          convertedUnit = elements[i].value;
      }
  }

  if (convertedUnit == "Inches") {
      convertedLength = length/2.54;
      unit = "Centimeters";
  } else if (convertedUnit == "Centimeters") {
      convertedLength = length*2.54;
      unit = "Inches";
  }

  document.getElementById("output").textContent = length + " " + unit + " converts to " + convertedLength.toFixed(1) + " " + convertedUnit;
}

function changeUnit() {
  var elements = document.getElementsByName("unit");
  var unit;

  for (var i = 0; i < elements.length; i++) {
      console.log(elements[i].value);
      if (!elements[i].checked) {
          unit = elements[i].value;
      }
  }

  document.getElementById("convertFrom").textContent = unit;
}