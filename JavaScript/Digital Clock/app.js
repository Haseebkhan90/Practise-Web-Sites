
        var currentDate = new Date();
        var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        var hrSpan = document.getElementById('hr');
        var minSpan = document.getElementById('min');
        var secSpan = document.getElementById('sec');
        var ampmSpan = document.getElementById('ampm');
        var dayDiv = document.getElementById('day');
        var monthDiv = document.getElementById('month');
        var yearDiv = document.getElementById('year');
        var weekDiv = document.getElementById('week');

        setInterval(function () {
            var now = new Date();

            if (now.getHours() > 12) {
                hrSpan.innerText = now.getHours() - 12;
            } else if (now.getHours() === 0) {
                hrSpan.innerText = 12;
            } else {
                hrSpan.innerText = now.getHours();
            }

            minSpan.innerText = now.getMinutes();
            secSpan.innerText = now.getSeconds();
            ampmSpan.innerText = now.getHours() >= 12 ? 'PM' : 'AM';
            dayDiv.innerText = now.getDate();
            monthDiv.innerText = now.getMonth() + 1;
            yearDiv.innerText = now.getFullYear();
            weekDiv.innerText = dayNames[now.getDay()];
        }, 1000);