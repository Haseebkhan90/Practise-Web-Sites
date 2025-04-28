
var body = document.getElementsByTagName('body')[0]
var colors = ['Maroon ', 'Orange', 'Teal', 'Navy', 'Chocolate', 'Green', 'Pink']
var score = document.getElementsByClassName('main')[0]
var count  = 0;


for (let i = 0; i < 30; i++) {
    var randomNum = Math.floor(Math.random() * colors.length)
    var divElm = document.createElement('div')
    divElm.className = 'card';
    divElm.style.backgroundColor = colors[randomNum]
    score.style.backgroundColor = colors[randomNum]
    divElm.addEventListener('click', showConsole)
    body.appendChild(divElm);
    
}


function showConsole(e) {
    divElm = e.target.style.backgroundColor
    if (e.target.style.backgroundColor === score.style.backgroundColor) {
        score.innerHTML = ++count
        randomNum = Math.floor(Math.random() * colors.length)
        divElm.style.backgroundColor = colors[randomNum]
        
    }else{
        randomNum = Math.floor(Math.random() * colors.length)
        divElm.style.backgroundColor = colors[randomNum]
        alert("you Loose")
    }

    console.log(e.target.style.backgroundColor)

}

