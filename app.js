/**
 * Accessing and setting up the elements we need to track (text)
 */

let displayText = document.getElementById("displayText")

/**
 * Get our API links
 */
let quoteAPIurl = "https://freequote.herokuapp.com/"
let jokeAPIurl = "https://official-joke-api.appspot.com/random_joke"

async function displayQuote() {
    let response = await fetch(quoteAPIurl)
    let data = await response.json()
    displayText.innerText = data.quote
    console.log(data)
}

async function displayJoke() {
    let response = await fetch(jokeAPIurl)
    let data = await response.json()
    displayText.innerText = data.setup + "\n\n" + data.punchline
    console.log(data)
}

