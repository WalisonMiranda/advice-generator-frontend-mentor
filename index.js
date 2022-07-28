const buttonFetchAdvice = document.querySelector('.btn-new-advice');
const adviceText = document.querySelector('.advice');
const adviceNumber = document.querySelector('.title');

buttonFetchAdvice.addEventListener('click', () => {
    fetchAdvice();
});

async function fetchAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const responseJson = await response.json();
    
    adviceNumber.innerHTML = `Advice  #${responseJson.slip.id}`;
    adviceText.innerHTML = `${responseJson.slip.advice}`;
}

