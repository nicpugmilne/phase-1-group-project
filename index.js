const quotesBtn = document.querySelector('#quotes')
const textArea = document.getElementById('text-container')
quotesBtn.addEventListener('click', () => {

fetch('https://api.kanye.rest/')
.then (response => response.json())
.then (data => getQuote(data))
})

function getQuote(quote){
    if (textArea.hasChildNodes()){
        textArea.removeChild(textArea.firstChild);
        createQuote(quote);
    } else {
        createQuote(quote);
    }
}

function createQuote(quote) {
    const blkQuote = document.createElement('blockquote')
    const span = document.createElement('span')

    blkQuote.className = 'text'
    span.textContent = quote.quote

    textArea.append(blkQuote)
    blkQuote.append(span)
}

const jokesBtn = document.querySelector('#jokes')
jokesBtn.addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Misc,Pun,Programming?safe-mode&type=single')
    .then (response => response.json())
    .then (data => getJoke(data))
    .catch(error => console.log(error + ' error message from Jokes API'))
})

function getJoke(joke){
    if (textArea.hasChildNodes()){
        textArea.removeChild(textArea.firstChild);
        createJoke(joke);
    } else {
        createJoke(joke);
    }
}

function createJoke(joke){
    const blkQuote = document.createElement('blockquote')
    const span = document.createElement('span')

    blkQuote.className = 'text'
    span.textContent = joke.joke
    textArea.append(blkQuote)
    blkQuote.append(span)
}

const goatsBtn = document.querySelector('#goats')
goatsBtn.addEventListener('click', () => {
    fetch('http://localhost:3000/goats')
    .then(response => response.json())
    .then(data => createGoat(data))
})

function createGoat(goat){
    const randomIndex = Math.floor(Math.random()*goat.length)
    const img = document.querySelector('#image')
    img.alt = 'Goat Image'
    img.src = goat[randomIndex].image
}