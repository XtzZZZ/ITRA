var week = 'A';

var d = new Date();
var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var day = d.getDay();
var day = days[day];

if (week=='A') {
  switch (day) {
    case "Mon":
      var periodIII = 'No Lesson';
    case "Tue":
      var periodIII = 'Year 11 CompSci';
    case "Wed":
      var periodIII = 'Preparation';
    case "Thu":
      var periodIII = 'Year 10 CompSci';
    case "Fri":
      var periodIII = 'Year 12 CompSci';
  }
} else if (week=='B') {
  switch (day) {
    case "Mon":
      var periodIII = 'No Lesson';
    case "Tue":
      var periodIII = 'Year 12 CompSci'
    case "Wed":
      var periodIII = 'Year 13 CompSci';
    case "Thu":
      var periodIII = 'Year 10 CompSci';
    case "Fri":
      var periodIII = 'Year 11 CompSci'
  }
}

if (day=="Sat") {
  var periodIII = 'Weekend';
} else if (day=="Sun") {
  var periodIII = 'Weekend';
}

document.getElementById("periodIII").innerHTML = "Period 3"+" : "+ periodIII;