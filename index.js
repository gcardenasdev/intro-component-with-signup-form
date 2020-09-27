const form = document.querySelector('.form');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');




form.addEventListener('submit', (e) => {

    e.preventDefault();
    

    if (firstName.value.trim() === '') {

        addError(firstName, "First Name cannot be empty");
    } else {
        removeError(firstName);
    }

    if(lastName.value.trim() === '') {
        addError(lastName, "Last Name cannot be empty");
    } else {
        removeError(lastName);
    }

    if(email.value.trim() === '') {
        addError(email, "Email cannot be empty");

    } else if (!validateEmail(email.value)) {
        addError(email, "Looks like this is not an email");
    } else {
        removeError(email);
    }

    if (password.value.trim() === '') {
        addError(password, "Password cannot be empty");

    } else {
        removeError(password);
    }




    

});


function addError (field, message) {

    const parent = field.parentElement;
    const small = parent.querySelector('small');
    

    field.classList.add('error');
    small.classList.add('error-msg');
    small.innerText = message;

   

    

    
}

function removeError (field) {

    const parent = field.parentElement;
    const small = parent.querySelector('small');
    
    field.classList.remove('error');
    // small.classList.remove('error-msg');
    
    small.remove();
}




function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



