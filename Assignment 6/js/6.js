function calculateTable() {

  var distValue = document.getElementById("distance").value;
  var paceValue = document.getElementById("pace").value.split(":");
  var tableData = document.getElementById("table");

  
   
  for (var i = 1; i <= parseInt(distValue); i++) {
    var hour = 0;
    var min = 0;
    var sec = 0;
    var RowTable = tableData.insertRow();
    var ColTable = RowTable.insertCell();
    var ColTable1 = RowTable.insertCell();

    min = parseInt(paceValue[0]) * i;
    sec = parseInt(paceValue[1]) * i;

    if (min >= 60) {
      hour = hour + Math.floor(min / 60);
      min = min % 60;
    } 
    if (sec >= 60) {
      min = min + Math.floor(sec / 60);
      sec = sec % 60;
    }

    ColTable.innerHTML = i + " ";

    var timeStr = "";
    if (hour >= 1) {
      if (hour < 10) {
        timeStr = "0 " + hour + ":";
      } else {
        timeStr = timeStr + hour + ":";
      }
    }
    if (min < 10) {
      timeStr = timeStr + "0" + min + ":";
    } else {
      timeStr = timeStr + min + ":";
    }
    if (sec < 10) {
      timeStr = timeStr + "0" + sec;
    } else {
      timeStr = timeStr + sec;
    }
    ColTable1.innerHTML = timeStr;
  }
}
//clear the table
function clearTable() {
  document.getElementById("table").innerHTML = "<tr> <th>Miles</th> <th>Time</th> </tr>";
}
