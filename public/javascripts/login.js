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

document.getElementById("submit").addEventListener("click", () => {
    var user = document.getElementById("user").value;
    window.localStorage.setItem("user", user);
})

setInterval(() => {
    p = document.getElementById("p").value;
    cp = document.getElementById("cp").value;
    if(p!=cp){
        document.getElementById("btn").classList.remove("default-color");
        document.getElementById("btn").classList.add("red");
        document.getElementById("btn").setAttribute('disabled','');
    }
    else{
        document.getElementById("btn").classList.add("default-color");
        document.getElementById("btn").classList.remove("red");
        document.getElementById("btn").removeAttribute('disabled')
    }
}, 500)
window.localStorage.clear();