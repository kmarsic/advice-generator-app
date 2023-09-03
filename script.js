const button = document.querySelector("#button");
const adviceNum = document.querySelector("#num");
const adviceText = document.querySelector("#advice");
async function searchAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();
    adviceNum.innerHTML = result.slip.id;
    adviceText.innerHTML = result.slip.advice;
}

button.addEventListener("click", searchAdvice)
     