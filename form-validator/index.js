const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('form');
const password2 = document.getElementById('password2');


//show input erroe message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

//check if email is valid
function isValidEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === '') {
            showError(input, `${getFieldName(input)}is required`);
        }
        else {
            showSuccess(input);
        }
    });
}

//Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUppercase() + input.id.slice(1);

}

//Event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, email, password, password2]);
});






































    // if (username.value === '') {
    //     showError(username, 'Username is required');
    // } else {
    //     showSuccess(username);
    // }
    // if (email.value === '') {
    //     showError(email, 'Email is required');
    // } 
    // else if(!isValidEmail(email.value)){
    //     showError(email, 'Email is not valid');
    // } 
    // else {
    //     showSuccess(email);
    // }
    // if (password.value === '') {
    //     showError(password, 'Password is required');
    // } 
    // else {
    //     showSuccess(password);
    // }
    // if (password2.value === '') {
    //     showError(password2, 'Password is required');
    // } 
    // else {
    //         showSuccess(password2);
    // }
    
