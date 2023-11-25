/*
console.log(document.querySelector('.message').textContent)

document.querySelector('.message').textContent = 'Correct Number ! ';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent  = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value;
*/

var screteNumber = (Math.trunc(Math.random()*20) + 1);

let score = 20;




document.querySelector('.check').addEventListener('click' , function() {
  const guess = Number (document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if(!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  } else if(score < 1 ) {
    document.querySelector('.message').textContent = 'YOU Lose !';  
  }else if(guess === screteNumber ) {

    document.querySelector('.message').textContent = 'Correct Number !';
    score++;

    document.querySelector('.score').textContent = score;  
    
    document.querySelector('body').style.backgroundColor = "green";
    
    document.querySelector('.number').textContent = screteNumber;
    
    document.querySelector('.number').style.width = '30rem';
} else if(guess > screteNumber ) {
    document.querySelector('.message').textContent = 'Too High !';
     score = score - 1;
     document.querySelector('.score').textContent = score;
} else if(guess < screteNumber) {
    document.querySelector('.message').textContent = 'Too Low !';
     score = score - 1;  
     document.querySelector('.score').textContent = score;
}
});

document.querySelector('.again').addEventListener('click' , function() {
    screteNumber = (Math.trunc(Math.random()*20) + 1);
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.message').textContent = 'Start Quessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "Black";
    document.querySelector('.number').style.width = '15recm';
});
