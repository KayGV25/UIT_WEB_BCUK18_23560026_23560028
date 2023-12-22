document.getElementById("email-signup").style.display = "none";
console.log("asdasdas");
function signupclick() {
    console.log("asdasdas");
    document.getElementById("email-signup").style.display = "block";
    document.getElementById("email-login").style.display = "none";
    document.getElementById("login-box-link").classList.remove("active");
    document.getElementById("signup-box-link").classList.add("active");
}
function loginclick(){
    console.log("asdasdas");
    document.getElementById("email-signup").style.display = "none";
    document.getElementById("email-login").style.display = "block";
    document.getElementById("login-box-link").classList.add("active");
    document.getElementById("signup-box-link").classList.remove("active");
}