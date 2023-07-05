var week = 'A';

var d = new Date();
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var day = d.getDay();
var day = days[day];

if (week=='A') {
  switch (day) {
    case "Mon":
      var periodIV = 'No Lesson';
    case "Tue":
      var periodIV = 'Year 13 CompSci';
    case "Wed":
      var periodIV = 'Year 10 CompSci';
    case "Thu":
      var periodIV = 'Year 12 CompSci';
    case "Fri":
      var periodIV = 'Preparation';
  }
} else if (week=='B') {
  switch (day) {
    case "Mon":
      var periodIV = 'No Lesson';
    case "Tue":
      var periodIV = 'Year 13 CompSci'
    case "Wed":
      var periodIV = 'Year 12 CompSci';
    case "Thu":
      var periodIV = 'Year 10 CompSci';
    case "Fri":
      var periodIV = 'Year 12 CompSci'
  }
}

if (day=="Sat") {
  var periodIV = 'Weekend';
} else if (day=="Sun") {
  var periodIV = 'Weekend';
}

document.getElementById("periodIV").innerHTML = "Period 4"+" : "+ periodIV;