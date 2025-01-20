const birthdateInput = document.getElementById('birthdate');
const calculateBtn = document.getElementById('calculate-btn');
const resultElement = document.getElementById('result');

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    resultElement.textContent = `You are ${age} years old.`;
});
