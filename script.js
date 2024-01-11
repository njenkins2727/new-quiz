const landingPg = document.getElementById('landing-pg');
const btnOne = document.getElementById('btn-1');

const intro = document.getElementById('intro');
const btnTwo = document.getElementById('btn-2');

const ready = document.getElementById('confirm');

const quizQuestions = document.getElementById('quiz-q');

//when i click btnOne, i am taken to intro 

// when i click btntwo, i am taken to question 

btnOne.addEventListener('click', function(){
    landingPg.classList.add("hide");
    intro.classList.remove("hide");
})

btnTwo.addEventListener('click', function(){
    intro.classList.add('hide');
    ready.classList.remove('hide');
})


