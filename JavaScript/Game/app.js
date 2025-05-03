var body = document.getElementsByTagName('body')[0];
var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange',
    'Purple', 'Pink', 'Brown',
    'Gray', 'Cyan', 'Magenta', 'Lime', 'Maroon',
    'Navy', 'Olive', 'Teal', 'Turquoise', 'Coral',
    'Crimson', 'Gold', 'Indigo', 'Ivory', 'Khaki',
    'Lavender', 'Salmon', 'Sienna', 'Tan', 'Violet'];
var scoreBox = document.getElementsByClassName('main')[0];
var count = 0;

// Set initial target color
var targetColor = colors[Math.floor(Math.random() * colors.length)];
scoreBox.style.backgroundColor = targetColor;
scoreBox.innerHTML = "Score: 0";

// Create 30 color cards
for (let i = 0; i < 50; i++) {
    let randomNum = Math.floor(Math.random() * colors.length);
    let divElm = document.createElement('div');
    divElm.className = 'card';
    divElm.style.backgroundColor = colors[randomNum];
    divElm.addEventListener('click', showConsole);
    body.appendChild(divElm);
}

function showConsole(e) {
    let clickedColor = e.target.style.backgroundColor;

    if (clickedColor === scoreBox.style.backgroundColor) {
        count++;
        scoreBox.innerHTML = "Score: " + count;
    } else {
        alert("You Lose");
    }

    // Change both clicked card and target color
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    e.target.style.backgroundColor = newColor;

    targetColor = colors[Math.floor(Math.random() * colors.length)];
    scoreBox.style.backgroundColor = targetColor;

    console.log("Clicked:", clickedColor, "New Target:", targetColor);
}
