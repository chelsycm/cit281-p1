/* CIT 281 Project 1 
Name: Chelsy Cortes
*/
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
} 
function getRandomLetters(){
    let amount= Math.floor(Math.random()* 7); 
    let letters= 'abcdefghijklmnopqrstuvwxyz';
    let text= ' ';
    for (let i = 0; i<amount; i++){
        let randomLetter= letters[getRandomInteger(0,26)];
        text += randomLetter
    }
    return text;
}
console.log(getRandomLetters());
