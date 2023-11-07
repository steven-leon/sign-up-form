const form = document.querySelector("#form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordError = document.querySelector("#password-error");


form.addEventListener("submit", (e) => {
    
    if(password.value.length < 8){
        e.preventDefault();
        password.style.border = "1px solid #FF0000";
        confirmPassword.style.border = "1px solid #FF0000";
        passwordError.textContent = "* Must be a minimum of 8 characters";
        passwordError.style.color = "#FF0000";
        passwordError.style.fontSize = "13px"
    }else if(password.value != confirmPassword.value){
        e.preventDefault(); 
        password.style.border = "1px solid #FF0000";
        confirmPassword.style.border = "1px solid #FF0000";
        passwordError.textContent = "* Passwords do not match";
        passwordError.style.color = "#FF0000";
        passwordError.style.fontSize = "13px"
    }
})