




var quoteOutput = [
    '"Hello!"' ,
    '"Do not take life too seriously. You will not get out alive. \n\n--Elbert Hubbard"',
    '"The best revenge is massive success. \n\n--Frank Sinatra"',
    '"Resentment is like drinking poison and waiting for your enemies to die.\n\n --Nelson Mandela"',
    '"You miss 100% of the shots you dont take . \n\n--Wayne Gretzy"',
    '"The best revenge is massive success. \n\n--Frank Sinatra "',
    '"Its not what happens to you, but how you react to it that matters.\n\n--Epictetus"'
];

function newQuote() {
var randomIndex = Math.floor(Math.random() * quoteOutput.length);
document.getElementById("quoteOutput").innerText = quoteOutput[randomIndex];
}


