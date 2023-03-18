const btnEl = document.getElementById('btn')
const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')

const apiURL = "https://api.quotable.io/random"

async function getQuote(){
    try {
        btnEl.innerText = "Loading...";
        btnEl.desabled = true;
        quoteEl.innerText = 'Getting Quote...';
        authorEl.innerText = 'Updating...';
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const authorContent = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = '~ ' + authorContent;
        btnEl.innerText = "Get a quote";
        btnEl.desabled = false;

        console.log(data);
    } catch (error) {
        console.log(error);
        quoteEl.innerText = 'An error happend, try again later';
        authorEl.innerText = 'An error happend';
        btnEl.innerText = "Loading...";
        btnEl.desabled = false;
    }
    
}
getQuote ();

btnEl.addEventListener("click", getQuote)