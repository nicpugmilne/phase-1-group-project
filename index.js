// got the fetches up and running! They're just console logged for now so that I could verify that we were appropriately receiving the data


fetch('https://api.kanye.rest/')
.then (response => response.json())
.then (data => console.log(data))
.catch(error => console.log(error + ' error message from Kanye Rest'));

console.log('hi');

fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit')
.then (response => response.json())
.then (data => console.log(data))
.catch(error => console.log(error + ' error message from Jokes API'))