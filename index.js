/* Creation of the random numbers between 1 to 10 */
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

/* Select the text to change */
const questionEl = document.getElementById('question');

/* Modifing the text we already select and show the two variables */
questionEl.innerText = `What is ${num1} * ${num2}?`

/* form Variables */
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const correctAnsw = num1 * num2

let score = JSON.parse(localStorage.getItem('score'));
const scoreEl = document.getElementById('score');

if(!score){
    score = 0;
}
if(score == -1){
    score = 0
}

scoreEl.innerText = `Score: ${score}`

formEl.addEventListener('submit', ()=>{

    const userAnsw = parseInt(inputEl.value);
    if(correctAnsw === userAnsw){
        score++
        updaedLocalStorage();
    }else{
        score--
        updaedLocalStorage();
    }
})
/* Transform the variable into a sting to be able to store it in local storage */
function updaedLocalStorage(){
    localStorage.setItem('score', JSON.stringify(score))
}
