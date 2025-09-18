let adminLoginCard = document.querySelector("#Aportal")
function AdminLogin() {
    adminLoginCard.style.height = "200px";
}

window.addEventListener('load', () => {
    userName.value = "";
    psword.value = "";
})
let userName = document.getElementById("userName");
const psword = document.getElementById("Password")
const wrong = document.getElementById("wrong")

let requiredName = "admin";
let requiredPsword = "1234";

function logIn() {
    if (userName.value.toLowerCase() == requiredName && psword.value.toLowerCase() == requiredPsword) {
        window.location.href = "admin.html";
        adminLoginCard.style.height = "0px";
    } else {
        wrong.style.display = "block";
    }
    userName.value = "";
    psword.value = "";
}
userName.addEventListener("input",() => {
    wrong.style.display = "none";
})