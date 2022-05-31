// got the fetches up and running! They're just console logged for now so that I could verify that we were appropriately receiving the data
let quotesBtn = document.querySelector('#quotes')
const textArea = document.getElementById('text-container')
quotesBtn.addEventListener('click', (e) => {

fetch('https://api.kanye.rest/')
.then (response => response.json())
.then (data => createQuote(data))

// replaceQuote()
})

// function replaceQuote() {
//     if(textArea.contains(blkQuote)) {
//     blkQuote.remove()
//     createQuote()
// }
//     else 
//     createQuote()
//     }

function createQuote(quote) {

    const blkQuote = document.createElement('blockquote')
    const span = document.createElement('span')

    blkQuote.className = 'text'
    span.textContent = quote.quote

    textArea.append(blkQuote)
    blkQuote.append(span)
}
fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit')
.then (response => response.json())
.then (data => console.log(data))
.catch(error => console.log(error + ' error message from Jokes API'))