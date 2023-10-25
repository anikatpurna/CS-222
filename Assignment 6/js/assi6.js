function calculateTable() {
  clearTable();
  var miles = document.getElementById("distance").value;
  var pace = document.getElementById("pace").value.split(":");
  var table = document.getElementById("table");

  var markup = table.innerHTML;
  var hrs = 0;
  var min = 0;
  var sec = 0;

  pace[0] = parseInt(pace[0]);
  pace[1] = parseInt(pace[1]);

  for (var i = 1; i <= miles; i++) {
    var time = "";
    console.log(i);

    if (i > miles) {
      var extra = Math.round((miles - i + 1) * (60 * pace[0] + pace[1]));
      sec += extra;
      console.log(extra);
    } else {
      min += pace[0];
      sec += pace[1];
    }

    if (sec >= 60) {
      min++;
      sec -= 60;
    }
    if (min >= 60) {
      hrs++;
      min -= 60;
    }

    time = (hrs > 0 ? (hrs < 10 ? "0" : "") + hrs + ":" : "") +
      (min < 10 ? "0" : "") +
      min +
      ":" +
      (sec < 10 ? "0" : "") +
      sec;
    markup +=
      "<tr><td>" + (i > miles ? miles : i) + "</td><td>" + time + "</td></tr>";
  }

  table.innerHTML = markup;
}

//clear the table
function clearTable() {
  document.getElementById("table").innerHTML =
    "<tr> <th>Miles</th> <th>Time</th> </tr>";
}
