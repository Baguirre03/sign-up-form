const button = document.querySelector('#submit');
const form = document.querySelector('#form');
const incorrect = document.querySelector('.incorrect');
const cta = document.querySelector('.cta')

form.addEventListener('submit', (Event) => {
    validateForm();
})

function validateForm(password, passwordCheck) {
    var password = document.getElementById('password').value;
    var passwordCheck = document.getElementById('confirm_password').value;
    if (password != passwordCheck) {
        event.preventDefault();
        incorrect.textContent = "Passwords do not match"    
    } else {
        thankYou();
    }}

function thankYou() {
    cta.textContent = "Thanks for joining the Ben Project!"
    cta.style.color = "green"
}