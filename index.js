let quotesBtn = document.querySelector('#quotes')
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

let jokesBtn = document.querySelector('#jokes')
jokesBtn.addEventListener('click', () => {
    fetch('https://v2.jokeapi.dev/joke/Misc,Programming?safe-mode&type=single')
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
