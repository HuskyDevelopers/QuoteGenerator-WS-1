/**
 * Accessing and setting up the elements we need to track
*/
let displayText = document.getElementById("displayText")
let quoteAPIurl = "https://freequote.herokuapp.com/"
let jokeAPIurl = "https://official-joke-api.appspot.com/random_joke"


async function displayQuote() {
    //Connect to the API and GET a random quote
    let response = await fetch(quoteAPIurl)
    let data = await response.json()
    displayText.innerText = data.quote
    console.log(data)
}

function displayJoke() {
    //Connect to the API and GET a random joke
    fetch(jokeAPIurl)
        .then(response => response.json())
        .then(data => {
            //update the display text to show the joke
            displayText.innerText = data.setup + "\n\n" + data.punchline 
            console.log(data)
        })
}


/**
 * Created by:
 * Uconn Husky Developers
 * Solange Wright
 * Serene Feng
 * Allan Lian
 * Arjun Iyer 
 * Neel Chakravartty
 * Abhimanyu Sukumaran 
 * Rohan Parikh
 * Aditi Dubey
 * Rashana Weerasinghe
 * Sneha Koripella
 * Michasl osais
 * Rahul Bhagwani
 * Aaron Selenica
 * James Bruder
 * Arvind Kasiliya
 * Susan Chen
 */