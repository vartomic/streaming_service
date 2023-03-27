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

