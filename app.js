const form = document.querySelector('form');

const randomNumberGuess = Math.floor(Math.random()*100)+1;

const result = document.querySelector('.result')

const userGuess = form.guessnumber.value


console.log(randomNumberGuess);

// const guessnumber = document.querySelector("#guessnumber");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    ;

    resultOutput(result)
})




//first it ask the user to input a number 

//on clicking the submit button, it checks if the number guessed is same as the randomNumberGuess

//if true it returns the number guess is corerect 

//if false it returns the number but indicate the number guess and also display not correct