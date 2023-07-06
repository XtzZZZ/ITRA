var week = 'A';

var d = new Date();
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var day = days[d.getDay()];

if (week=='A') {
  switch (day) {
    case "Mon":
      var periodI = 'No Lesson';
    case "Tue":
      var periodI = 'Year 13 CompSci';
    case "Wed":
      var periodI = 'Year 10 CompSci';
    case "Thu":
      var periodI = 'Year 12 CompSci';
    case "Fri":
      var periodI = 'Year 10 CompSci';
  }
} else if (week=='B') {
  switch (day) {
    case "Mon":
      var periodI = 'No Lesson';
    case "Tue":
      var periodI = 'Year 13 CompSci'
    case "Wed":
      var periodI = 'Year 13 CompSci';
    case "Thu":
      var periodI = 'Preparation';
    case "Fri":
      var periodI = 'Preparation'
  }
}

if (day=="Sat") {
  var periodI = 'Weekend';
} else if (day=="Sun") {
  var periodI = 'Weekend';
}

document.getElementById("periodI").innerHTML = "Period 1"+" : "+periodI;