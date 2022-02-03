document.getElementById("name").innerHTML = "Oryngul, CS-2117N"

const d = new Date();
document.getElementById("year").innerHTML = "Year: " + d.getFullYear();
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("weekday").innerHTML = "Today is: " + weekday[d.getDay()];
document.getElementById("day").innerHTML = "Date: " + d.getDate();
document.getElementById("month").innerHTML = "Month: " + d.getMonth();
document.getElementById("time").innerHTML = "Time is: " + d.toLocaleTimeString();

function myfun() {
    var a = document.getElementById('number').value;
    var b = document.getElementById('numbers').value;
    document.getElementById('result').innerHTML = (a*b)
}
function myfun2() {
    var a = document.getElementById('number').value;
    var b = document.getElementById('numbers').value;
    document.getElementById('result').innerHTML = (a/b)
}