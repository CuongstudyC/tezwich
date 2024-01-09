const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm-password');

password.onchange = validatePassword();
confirm_password.onkeyup = validatePassword();

function validatePassword()
{
    if(password.value != confirm_password.value) 
    {
        confirm_password.setCustomValidity("Passwords do not match");
    } else 
    {
        confirm_password.setCustomValidity('');
    }
}
function signup()
{
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("username",username);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);

    alert("Sign up successfully")
    window.location.href="html/signIn.html"
}

function signin()
{
    event.preventDefault();
    var Iemail = document.getElementById("email").value;
    var Ipassword = document.getElementById("password").value;
    var mail = localStorage.getItem("email");
    var pass = localStorage.getItem("password");


    if(Iemail == ""){
        alert("Please enter your email and password")
    }
    else if (Iemail == mail && Ipassword == pass) {
        alert("Logged in successfully")
        window.location.href="html/home.html"
    }
    else {
        alert("Login failed")
    }
}
function fb(){
    window.location.href="https://www.facebook.com/"
}
function gg(){
    window.location.href="https://accounts.google.com/v3/signin/identifier?dsh=S1560559716%3A1678937059784310&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=vi&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession"
}