const quizData =[{
    question: "Wich language runs in a web browser ?",
    a: "java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
}, {
    question: "What does CSS stand for ?",
    a: "Central style sheets",
    b: "Cascading style sheets",
    c: "Cascading simple sheets",
    d: "Card SUVs sailboats",
    correct: "b",
}, {
    question: "What does HTML stand for ?",
    a: "Hypertext Markup Language ",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopter Terminas Motorboats Lamborginis",
    correct: "a",
},{
    question: "What year javascript launched ?",
    a: "1996 ",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},];

const quiz            = document.getElementById("quiz");
const answerElement   = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text          = document.getElementById("a_text");
const b_text          = document.getElementById("b_text");
const c_text          = document.getElementById("c_text");
const d_text          = document.getElementById("d_text");
const submitButton    = document.getElementById("submit");
let currentQuiz       = 0;
let score             = 0;

const deselectAnswer  = () =>{
    answerElement.forEach((answer)=>( answer.checked = false));
};
const getSelected = ()=>{
    let answer;
    answerElement.forEach((answerElement)=>{
        if(answerElement.checked) answer= answerElement.id;
    });
    return answer;
};

const loadQuiz = () =>{
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", ()=>{
    const answer = getSelected();
    if(answer){
        if(answer=== quizData[currentQuiz].correct)
        score++;
        currentQuiz++;
        if(currentQuiz< quizData.length) loadQuiz();
        else{
            quiz.innerHTML =` <h2> you answered ${score}/${quizData.length} quesion correctly </h2>
            <button onclick= "history.go(0)"> Play Again </button>`
        }
    }
});



