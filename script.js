const button = document.querySelector('#submit');
const form = document.querySelector('#form');
const incorrect = document.querySelector('.incorrect');
const cta = document.querySelector('.cta')
var inputElements = document.getElementsByTagName('input')

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
        swal("Congrats!", "The Ben Project is happy to have you!", "success", {
            button: "Continue to website",
        });
        for (var i=0; i < inputElements.length; i++) {
            inputElements[i].value = '';
        }
        incorrect.textContent = ""
    }}
