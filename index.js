const textArea = document.getElementById('text-container')
const img = document.querySelector('#image');

// Quotes code below

const quotesBtn = document.querySelector('#quotes')

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
    span.textContent = '"'+ quote.quote + '" - K. West'

    textArea.append(blkQuote)
    blkQuote.append(span)
}

//All about jokes

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

//Goat stuff below
const goatsBtn = document.querySelector('#goats')
const h1 = document.querySelector('h1')

goatsBtn.addEventListener('click', () => {
    fetch('http://localhost:3000/goats')
    .then(response => response.json())
    .then(data => createGoat(data))
})

function createGoat(goat){
    const randomIndex = Math.floor(Math.random()*goat.length);
    img.alt = 'Goat Image';
    img.className = "fade-in-image"
    img.src = goat[randomIndex].image;
    h1.style.color = 'transparent'
}

document.addEventListener('keydown', (e) => {
    if (e.code === "Space"){
        fetch('http://localhost:3000/goats')
        .then(response => response.json())
        .then(data => goatSpam(data))
    }
})

function goatSpam(goats){
    const goatDiv = document.createElement('div');
    goatDiv.style.position = 'absolute';
    goatDiv.style.maxHeight = '100%';
    goatDiv.style.maxWidth = '100%';
    document.body.append(goatDiv);
    goats.forEach((goat, i) => {
        setTimeout(() => {
            const floatingGoat = document.createElement('img');
            floatingGoat.src = goat.image
            const spaceW = screen.height - floatingGoat.height;
            const spaceH = screen.width - floatingGoat.width;
            floatingGoat.style.top = Math.random() * spaceW + "px";
            floatingGoat.style.left = Math.random() * spaceH + "px";
            floatingGoat.classList.add('floatingGoat')
            goatDiv.append(floatingGoat);
            floatingGoat.addEventListener('mouseover', (e) => {
            e.target.remove()
            })
        }, i * 350);
    })
}

// New goat submission form. Using this to create new goat images more easily
const form = document.querySelector('#new-goat-submission');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = document.getElementById('img-url').value;
    const data = { image: inputValue };
    fetch('http://localhost:3000/goats', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      form.reset();
      img.src = inputValue;
      h1.style.color = 'transparent'
});

// Below is what I've been playing with to try get the counting to stop, but I haven't got it working yet. Each click is still creating new sets of goats :sweat_smile:

// const creatingGoats = false;
//  function goatSpam(goats){
//     const goatDiv = document.createElement('div');
//     goatDiv.style.position = 'absolute';
//     goatDiv.style.maxHeight = '100%';
//     goatDiv.style.maxWidth = '100%';
//     document.body.append(goatDiv);
//     let i = 0;
//     for (let goat of goats){
//         if (creatingGoats === false){
//             i++
//             setTimeout(() => {
//                 const floatingGoat = document.createElement('img');
//                 floatingGoat.src = goat.image
//                 const spaceW = screen.height - floatingGoat.height;
//                 const spaceH = screen.width - floatingGoat.width;
//                 floatingGoat.style.top = Math.random() * spaceW + "px";
//                 floatingGoat.style.left = Math.random() * spaceH + "px";
//                 floatingGoat.classList.add('floatingGoat')
//                 goatDiv.append(floatingGoat);
//                 floatingGoat.addEventListener('mouseover', (e) => {
//                 e.target.remove()
//                 })
//             }, i * 350); 
//         } else {
//             creatingGoats = false;
//             break;
//         }
//     }
//     creatingGoats = true;
// }