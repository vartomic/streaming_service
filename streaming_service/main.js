function showTabLog(){
    document.getElementById('login').style.display ='block';
    document.getElementById('sign-up').style.display = 'none';
}

function showTabReg(){
    document.getElementById('sign-up').style.display = 'block';
    document.getElementById('login').style.display ='none';
}

function showPwdLog(){
    let inputPassword = document.getElementById('inputPwdLog');
    let togglePassword = document.getElementById('togglePwdLog');
    
    togglePassword.onclick = function(){
            if (inputPassword.type === 'password'){
                inputPassword.setAttribute('type', 'text');
                togglePassword.classList.add('hide');
            } else {
                inputPassword.setAttribute('type', 'password');
                togglePassword.classList.remove('hide');
            }
        }
    }

function showPwdReg(){
    let inputPassword = document.getElementById('inputPwdReg');
    let togglePassword = document.getElementById('togglePwdReg');
    
    togglePassword.onclick = function(){
            if (inputPassword.type === 'password'){
                inputPassword.setAttribute('type', 'text');
                togglePassword.classList.add('hide');
            } else {
                inputPassword.setAttribute('type', 'password');
                togglePassword.classList.remove('hide');
            }
        }
    }

function showPwdRep(){
    let inputPassword = document.getElementById('inputPwdRep');
    let togglePassword = document.getElementById('togglePwdRep');
    
    togglePassword.onclick = function(){
            if (inputPassword.type === 'password'){
                inputPassword.setAttribute('type', 'text');
                togglePassword.classList.add('hide');
            } else {
                inputPassword.setAttribute('type', 'password');
                togglePassword.classList.remove('hide');
            }
        }
    }

function matchPasswords(){
    let password = document.getElementById('inputPwdReg');
    confirm_password = document.getElementById('inputPwdRep');

        if ((confirm_password.value!='')&&(password.value != confirm_password.value)) {
            document.getElementById('errorMessageMatch').innerHTML='Пароли не совпадают';
            document.getElementById("sign-up").style.height = "570px";
            document.getElementById("login").style.height = "570px";
        } else {
            document.getElementById('errorMessageMatch').innerHTML='';
            document.getElementById("sign-up").style.height = "550px";
            document.getElementById("login").style.height = "550px";
        }
    }

/*
function validPassword(){
    let password = document.getElementById('inputPwdReg');

    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');

    if (password.value.length >= 8){
        document.getElementById('errorMessageLength').innerHTML='';
    } else {
        document.getElementById('errorMessageLength').innerHTML='Пароль должен быть не менее 8-ми символов';}

    if (upper.test(password.value)){
        document.getElementById('errorMessageUpper').innerHTML='';
    } else {
        document.getElementById('errorMessageUpper').innerHTML='Пароль должен содержать буквы верхнего регистра';}

    if (lower.test(password.value)){
        document.getElementById('errorMessageLower').innerHTML='';
    } else {
        document.getElementById('errorMessageLower').innerHTML='Пароль должен содержать буквы нижнего регистра';}

    if (number.test(password.value)){
        document.getElementById('errorMessageNumber').innerHTML='';
    } else {
        document.getElementById('errorMessageNumber').innerHTML='Пароль должен содержать цифры';}

    if (special.test(password.value)){
        document.getElementById('errorMessageSpecial').innerHTML='';
    } else {
        document.getElementById('errorMessageSpecial').innerHTML='Пароль должен содержать специальные символы';
        }
    }
*/

