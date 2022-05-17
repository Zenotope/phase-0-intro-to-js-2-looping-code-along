// Code your solutions in this file
let names = ["Charlie", "Samip", "Ali"]
let events = "surprise"

function writeCards(names, events){
   let thankYouCards = []
    for (let i = 0; i < names.length; i++){
       thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`);
    }
    return thankYouCards
}

function countDown(x){
    while (x >= 0){
        console.log(x--)}
}