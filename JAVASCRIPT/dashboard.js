let home = document.getElementById("home");
let savingss = document.getElementById("savingss")
let savingsPage = document.getElementById("savingsPage")
let right = document.getElementById("right")
let investPage = document.getElementById("investPage")
let logUser = JSON.parse(localStorage.getItem("loggedUser"))
let logUsername = document.getElementById("loguser")
let day = document.getElementById("day")
let accountpage = document.getElementById("accountpage")
let homedown = document.getElementById("home-down")
let homep = document.getElementById("home-p")
let savingsdown = document.getElementById("savings-down")
let savingsp = document.getElementById("savings-p")
// let dotscontainer = document.getElementById("dots-container")

// dotscontainer.sty
savingsPage.style.display = "none"
investPage.style.display = "none"
accountpage.style.display = "none"
logUsername.innerHTML = logUser.input1
// to identify the particular user that signed up so as to assign their account balance to them
let currUser;
fetch(`http://localhost:4567/signup/${logUser.id}`)
    .then((response) => response.json())
    .then((data) => {

        console.log(data);
        currUser = data
        acctBal.innerHTML = currUser.accountBalance
        console.log(currUser);
})

function homepage() {
    savingsPage.style.display = "none"
    right.style.display = "block"
    investPage.style.display = "none"
    accountpage.style.display = "none"

    homedown.style.color = "rgb(6,40,99)"
    homep.style.color = "black"
}

function saved() {
    savingsPage.style.display = "block"
    right.style.display = "none"
    investPage.style.display = "none"
    accountpage.style.display = "none"

    savingsdown.style.color = "rgb(6,40,99)"
    savingsp.style.color = "black"
}

function inpage(event) {
    event.preventDefault()
    savingsPage.style.display = "none"
    right.style.display = "none"
    investPage.style.display = "block"
}

function account(event) {
    event.preventDefault()
    savingsPage.style.display = "none"
    right.style.display = "none"
    investPage.style.display = "none"
    accountpage.style.display = "block"
}

function time() {
    let Time = new Date();
    let Hour = Time.getHours();

    if (Hour >= 5 && Hour < 12) {
        return "Good morning,wash your hands🌞";
    } else if (Hour >= 12 && Hour < 18) {
        return "wash your hands, it's lunch time 🍛!";
    } else {
        return "Good evening,wash your hands🌙";
    }
}

function display() {
    let timeOfDay = time();
    day.textContent = `${timeOfDay}`
}
display();

let sekinat = document.querySelectorAll(".home")
function del() {
    for (let i = 0; i < sekinat.length; i++) {
        sekinat[i].classList.toggle("home")
    }
    right.style.width = "85%"
    left.style.padding = "0px"
}

function flexnaira() {
    window.location.href = "bank.html"
}

function pro(){
    accountpage.style.display = "block"
    right.style.display = "none"
}

function logout(event){
    event.preventDefault()
    fetch(`http://localhost:4567/login/${logUser.id}`,{
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE",
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        window.location.href = "login.html"
    })
}