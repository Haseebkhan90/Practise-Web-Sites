// const hrSpan = document.getElementById('hr');
// const minSpan = document.getElementById('min');
// const secSpan = document.getElementById('sec');
// const ampmSpan = document.getElementById('ampm');
// const dateDiv = document.getElementById('date');

// const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// function formatTime(unit) {
//     return unit < 10 ? "0" + unit : unit;
// }

// function updateClock() {
//     const now = new Date();
//     let hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();
//     let ampm = "AM";

//     if (hours >= 12) {
//         ampm = "PM";
//         if (hours > 12) hours -= 12;
//     }
//     if (hours === 0) hours = 12;

//     hrSpan.innerText = formatTime(hours);
//     minSpan.innerText = formatTime(minutes);
//     secSpan.innerText = formatTime(seconds);
//     ampmSpan.innerText = ampm;

//     const day = dayNames[now.getDay()];
//     const date = now.getDate();
//     const month = monthNames[now.getMonth()];
//     const year = now.getFullYear();

//     dateDiv.innerText = `${day}, ${month} ${date}, ${year}`;
// }

// setInterval(updateClock, 1000);
// updateClock(); // run once immediately
var currentDate = new Date();

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(dayNames[currentDate.getDay()]);
console.log('getMonth:', currentDate.getMonth());
console.log('getFullYear:', currentDate.getFullYear());
console.log('getHours:', currentDate.getHours());
console.log('getMinutes:', currentDate.getMinutes());
console.log('getMilliseconds:', currentDate.getMilliseconds());
console.log('getTime:', currentDate.getTime());

var futureDate = new Date('June 11, 2028 15:30:00');
console.log('date 2', futureDate.getMinutes());

var mNow = currentDate.getTime();
var mFuture = futureDate.getTime();
var diff = mFuture - mNow;
diff = diff / (1000 * 60 * 60 * 24 * 30 * 12);

console.log(Math.round(diff));

var hrSpan = document.getElementById('hr');
var minSpan = document.getElementById('min');
var secSpan = document.getElementById('sec');

console.log(hrSpan.innerText);

// callback function
setInterval(function () {
    var now = new Date();
    
    if (now.getHours() > 12) {
        hrSpan.innerText = now.getHours() - 12;
    }
    else if (now.getHours() === 0) {
        hrSpan.innerText = 12;
    }
    else {
        hrSpan.innerText = now.getHours();
    }

    minSpan.innerText = now.getMinutes();
    secSpan.innerText = now.getSeconds();
}, 1000);

