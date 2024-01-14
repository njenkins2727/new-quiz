const landingPg = document.getElementById('landing-pg');
const btnOne = document.getElementById('btn-1');

const intro = document.getElementById('intro');
const btnTwo = document.getElementById('btn-2');

const ready = document.getElementById('confirm');
const btnThree = document.getElementById('btn-3');

const btnFour = document.getElementById('btn-4')
const btnFive= document.getElementById('btn-5')

const quizSection = document.getElementById('quiz-q');

const quizTitle = document.getElementById('q-title');
const quizChoice = document.getElementById('q-text');

const youLose = document.getElementById('you-lose');

const scoreboard = document.getElementById('scoreboard');
const showResult = document.getElementById('result-span');

const losses = document.getElementById('losses');
let lossSpan = document.getElementById('loss-span');
let count = 0;

const playAgain = document.getElementById('play-again');

const gameOverStatement = document.getElementById('owe-statement')

const question = [
    {
        title: "What is my favourite food?",
        answers: [
          { text: "Curried beans", correct: false },
          { text: "Lamb saganaki", correct: false },
          { text: "Coconut curry", correct: true },
          { text: "Burrito bowl", correct: false }
        ]
      },
      {
          title: "What console is my ideal?",
            answers: [
              { text: "Gameboy colour", correct: false },
              { text: "Playstation", correct: true },
              { text: "Xbox", correct: false },
              { text: "Nintendo switch", correct: false }
            ]
      },
      {
        title: "What is my favourite niche interest?",
          answers: [
            { text: "Bouldering", correct: true },
            { text: "Binge shows", correct: false },
            { text: "Beatbox", correct: true },
            { text: "Chess", correct: false }
          ]
    },
    {
        title: "What was the year I was born?",
          answers: [
            { text: "1998", correct: false },
            { text: "2000", correct: false },
            { text: "2001", correct: false },
            { text: "2002", correct: true }
          ]
    },
    {
        title: "What is my favourite Cartoon Network show? ",
          answers: [
            { text: "Regular Show", correct: false },
            { text: "Adventure Time", correct: true },
            { text: "Amazing World Of Gumball", correct: false },
            { text: "Steven Universe", correct: false }
          ]
    },
    {
        title: "What is my current job?",
          answers: [
            { text: "Mechanic", correct: false },
            { text: "Customer service", correct: false },
            { text: "Event staff", correct: true },
            { text: "Web developer", correct: false }
          ]
    },
    {
        title: "What is my Lolas name?",
          answers: [
            { text: "Violin", correct: false },
            { text: "Violet", correct: false },
            { text: "Vicki", correct: false},
            { text: "Viole", correct: true }
          ]
    },
    {
        title: "What is the best live performance I've seen?",
          answers: [
            { text: "Shock One", correct: false },
            { text: "Grand Beatbox Battle 2023", correct: false },
            { text: "Golden Features (Xmas eve)", correct: false },
            { text: "Tyler the Creator", correct: true }
          ]
    },
    {
        title: "How many times have I left W.A?",
          answers: [
            { text: "2", correct: true },
            { text: "4", correct: false },
            { text: "3", correct: false },
            { text: "1", correct: false }
          ]
    },
    {
        title: "What was the first answer to this quiz?",
          answers: [
            { text: "Bouldering", correct: false },
            { text: "Adventure Time", correct: false },
            { text: "Playstation", correct: false },
            { text: "Coconut Curry", correct: true }
          ]
    },

     
]

btnOne.addEventListener('click', function(){
    landingPg.classList.add("hide");
    intro.classList.remove("hide");
})

btnTwo.addEventListener('click', function(){
  playAgain.classList.add('hide');
    intro.classList.add('hide');
    ready.classList.remove('hide');
})

btnThree.addEventListener('click', function(){
    ready.classList.add('hide');

    quizSection.classList.remove('hide');
    quizTitle.classList.remove('hide');
    quizChoice.classList.remove('hide');
    youLose.innerHTML = "";
    displayQuestions(0);
});

function displayQuestions(questionIndex){

    const questions = question[questionIndex];

    quizTitle.textContent = questions.title;

    quizChoice.textContent = "";

    const quizText = questions.answers

    for (let i = 0; i < quizText.length; i++) {
        const choices = quizText[i];

        const li = document.createElement('li');

            const button = document.createElement('button');
    
            button.setAttribute('class', ' btn-q');
            li.setAttribute('class', 'centred text-dec');
    
            button.textContent = choices.text;
    
            li.appendChild(button);
    
            quizChoice.appendChild(li);

        button.addEventListener('click', function(){
          if (choices.correct === false) {
            count++;
            setLossCounter();
            return tryAgain();
          }else {
            return returnNextQuestion(questionIndex);
          }
        })      
     } 
}

function tryAgain(){ 
    losses.classList.remove('hide');

    const h1 = document.createElement('h1');
    const retryButton = document.createElement('button');
    
    h1.textContent = 'YOU LOSE'
    retryButton.textContent = 'Retry'

    retryButton.addEventListener('click', function(){
      quizSection.classList.add('hide');
      losses.classList.add('hide');
      ready.classList.remove('hide');
    });

    quizTitle.classList.add('hide');
    quizChoice.classList.add('hide');

    youLose.appendChild(h1).innerHTML;
    youLose.appendChild(retryButton).innerHTML;
}

function returnNextQuestion(questionIndex){

  const nextQuestionIndex = questionIndex + 1 ; 

  if (nextQuestionIndex >= question.length){
  //show end game screen
  return endGame();
  }
  displayQuestions(nextQuestionIndex);

}

function setLossCounter(){
  lossSpan.textContent = count;
}

function endGame(){
  quizSection.classList.add('hide'); 
  scoreboard.classList.remove('hide');

  if(count === 1){
   times = 'time'
  }else {
    times = 'times'
  }

gameOverStatement.textContent = 'You owe me food' + ' ' + count + ' ' + times

btnFour.addEventListener('click', function(){
  scoreboard.classList.add('hide');
  playAgain.classList.remove('hide');
})
}


btnFive.addEventListener('click', function(){
  playAgain.classList.add('hide');
  ready.classList.remove('hide');
})

