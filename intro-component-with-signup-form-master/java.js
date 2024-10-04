const input = document.getElementById("name");
const inputlast = document.getElementById("last");
const email = document.getElementById("email");
const passward = document.getElementById("password");
const form = document.getElementById("form-div");
const error = document.getElementById("error");
const lastError = document.getElementById("lastError");
const erroremail = document.getElementById("erroremail");
const errorpasswrd = document.getElementById("errorpassward");

form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    if (input.value === "") {
        error.innerHTML = "The first name cannot be empty!"
        error.style.fontSize = "12px"
        error.style.color = "blue"
        error.style.textAlign = "center"
    } else {
        error.innerHTML = ""
    }
    if (inputlast.value === "") {
        lastError.innerHTML = "The first name cannot be empty!"
        lastError.style.fontSize = "12px"
        lastError.style.color = "blue"
    } else {
        lastError.innerHTML = ""
    }

    if (email.value === "") {
        erroremail.innerHTML = "invalid email!"
        erroremail.style.fontSize = "12px"
        erroremail.style.color = "blue"

    } else {
        erroremail.innerHTML = ""
    }
    if (passward.value === "") {
        errorpasswrd.innerHTML = "your passward cannot be less than 6 characters"
        errorpasswrd.style.fontSize = "12px"
        errorpasswrd.style.color = "blue"


    } else {
        errorpasswrd.innerHTML = ""
    }

}