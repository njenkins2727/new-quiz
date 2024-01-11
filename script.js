const landingPg = document.getElementById('landing-pg');
const btnOne = document.getElementById('btn-1');

const intro = document.getElementById('intro');
const btnTwo = document.getElementById('btn-2');

const ready = document.getElementById('confirm');
const btnThree = document.getElementById('btn-3');

const quizQuestions = document.getElementById('quiz-q');

const quizTitle = document.getElementById('q-title');
const quizChoice = document.getElementById('q-text');

const question = [
    {
        title: "My favourite food",
        answers: [
          { text: "Curried beans", correct: false },
          { text: "Lamb saganaki", correct: false },
          { text: "Coconut curry", correct: true},
          { text: "Burrito bowl", correct: false }
        ]
      },
      {
          title: "My favourite food",
            answers: [
              { text: "Curried beans", correct: false },
              { text: "Lamb saganaki", correct: false },
              { text: "Coconut curry", correct: false},
              { text: "Burrito bowl", correct: false }
            ]
      },
      {
        title: "My favourite food",
          answers: [
            { text: "Curried beans", correct: false },
            { text: "Lamb saganaki", correct: false },
            { text: "Coconut curry", correct: false},
            { text: "Burrito bowl", correct: false }
          ]
    },
    {
        title: "My favourite food",
          answers: [
            { text: "Curried beans", correct: false },
            { text: "Lamb saganaki", correct: false },
            { text: "Coconut curry", correct: false},
            { text: "Burrito bowl", correct: false }
          ]
    },
    {
        title: "My favourite food",
          answers: [
            { text: "Curried beans", correct: false },
            { text: "Lamb saganaki", correct: false },
            { text: "Coconut curry", correct: false},
            { text: "Burrito bowl", correct: false }
          ]
    },
    {
        title: "My favourite food",
          answers: [
            { text: "Curried beans", correct: false },
            { text: "Lamb saganaki", correct: false },
            { text: "Coconut curry", correct: false},
            { text: "Burrito bowl", correct: false }
          ]
    },
    {
        title: "My favourite food",
          answers: [
            { text: "Curried beans", correct: false },
            { text: "Lamb saganaki", correct: false },
            { text: "Coconut curry", correct: false},
            { text: "Burrito bowl", correct: false }
          ]
    },
    {
        title: "My favourite food",
          answers: [
            { text: "Curried beans", correct: false },
            { text: "Lamb saganaki", correct: false },
            { text: "Coconut curry", correct: false},
            { text: "Burrito bowl", correct: false }
          ]
    },
    {
        title: "My favourite food",
          answers: [
            { text: "Curried beans", correct: false },
            { text: "Lamb saganaki", correct: false },
            { text: "Coconut curry", correct: false},
            { text: "Burrito bowl", correct: false }
          ]
    },
    {
        title: "My favourite food",
          answers: [
            { text: "Curried beans", correct: false },
            { text: "Lamb saganaki", correct: false },
            { text: "Coconut curry", correct: false},
            { text: "Burrito bowl", correct: false }
          ]
    },

     
]

btnOne.addEventListener('click', function(){
    landingPg.classList.add("hide");
    intro.classList.remove("hide");
})

btnTwo.addEventListener('click', function(){
    intro.classList.add('hide');
    ready.classList.remove('hide');
})

btnThree.addEventListener('click', function(){
    ready.classList.add('hide');
    quizQuestions.classList.remove('hide');
    displayQuestions(0);
});

function displayQuestions(questionIndex){

    const questions = question[questionIndex]

    quizTitle.textContent = questions.title;

    quizChoice.textContent = "";

    const quizText = questions.answers

    for (let i = 0; i < quizText.length; i++) {
        const choices = quizText[i];

        const li = document.createElement('li');

            const button = document.createElement('button');
    
            button.setAttribute('class', 'centred btn-q');
    
            button.textContent = choices.text;
    
            li.appendChild(button);
    
            quizChoice.appendChild(li);

        button.addEventListener('click', function(){

            if (choices.correct === false) {
                return tryAgain();
            }else {
                return renderNextQuestion();
            }
        })
           
    }
                
      
}

// function tryAgain(){
//     quizQuestions.classList.add('hide');
//     const div = document.createElement('div');
//     div.classList.add('try-again-div');
    
//     const h1 = document.createElement('h1');
//     const retryButton = document.createElement('button');
    
//     h1.textContent = 'YOU LOSE'
//     retryButton.textContent = 'Retry'
    
//     retryButton.addEventListener('click', function(){
        
//         const ready = getElementById('confirm');
//         div.classList.add('hide');
//         ready.classList.remove('hide');

//     })
    
//     div.appendChild(h1, retryButton);

// }