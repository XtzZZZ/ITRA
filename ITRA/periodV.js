var week = 'A';

var d = new Date();
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
var day = d.getDay();
var day = days[day];

if (week=='A') {
  switch (day) {
    case "Mon":
      var periodV = 'No Lesson';
    case "Tue":
      var periodV = 'Year 13 CompSci';
    case "Wed":
      var periodV = 'PSHE';
    case "Thu":
      var periodV = 'Year 11 CompSci';
    case "Fri":
      var periodV = 'Preparation';
  }
} else if (week=='B') {
  switch (day) {
    case "Mon":
      var periodV = 'No Lesson';
    case "Tue":
      var periodV = 'Year 10 CompSci'
    case "Wed":
      var periodV = 'PSHE';
    case "Thu":
      var periodV = 'Year 12 CompSci';
    case "Fri":
      var periodV = 'Year 10 CompSci'
  }
}

if (day=="Sat") {
  var periodV = 'Weekend';
} else if (day=="Sun") {
  var periodV = 'Weekend';
}

document.getElementById("periodV").innerHTML = "Period 5"+" : "+periodV;