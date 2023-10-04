// document.querySelector('.message').textContent = 'Correct Number !'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 20


 
const finalNumber =  Math.floor(Math.random() * 20) + 1;
//const finalNumber = 14;
console.log(finalNumber);

let score = 20;

document.querySelector('.check').addEventListener('click', function() {
   const guessValue = Number(document.querySelector('.guess').value);
   console.log(typeof guessValue);

   if (!guessValue){
   document.querySelector('.message').textContent = 'No number entered'
   } else if (guessValue < finalNumber){
    if (score > 0){
        document.querySelector('.message').textContent = 'too Lower';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = `You Lost the game.. the number was ${finalNumber}`; 
        document.querySelector('.number').textContent = finalNumber;
    }
   
   }else if (guessValue > finalNumber){
    if (score > 0){
        document.querySelector('.message').textContent = 'too Higher';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = `You Lost the game.. the number was ${finalNumber}`; 
        document.querySelector('.number').textContent = finalNumber;
    }
   
}else {
    document.querySelector('.message').textContent = 'You won !!!'
    score = score +2;
    document.querySelector('.number').textContent = finalNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
   }
})

