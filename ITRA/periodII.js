var week = 'A';

var d = new Date();
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var day = d.getDay();
var day = days[day];

if (week=='A') {
  switch (day) {
    case "Mon":
      var periodII = 'No Lesson';
    case "Tue":
      var periodII = 'Year 11 CompSci';
    case "Wed":
      var periodII = 'Preparation';
    case "Thu":
      var periodII = 'Year 10 CompSci';
    case "Fri":
      var periodII = 'Year 12 CompSci';
  }
} else if (week=='B') {
  switch (day) {
    case "Mon":
      var periodII = 'No Lesson';
    case "Tue":
      var periodII = 'Year 12 CompSci'
    case "Wed":
      var periodII = 'Year 13 CompSci';
    case "Thu":
      var periodII = 'Year 10 CompSci';
    case "Fri":
      var periodII = 'Year 11 CompSci'
  }
}

if (day=="Sat") {
  var periodII = 'Weekend';
} else if (day=="Sun") {
  var periodII = 'Weekend';
}

document.getElementById("periodII").innerHTML = "Period 2"+" : "+ periodII;