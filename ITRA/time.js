function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    if (hour == 0) {
    hour = 12;
    } else {
    }
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    document.getElementById("digital-clock").innerText = hour + " : " + minute;
    setTimeout(Time, 1000);
   }
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
Time();