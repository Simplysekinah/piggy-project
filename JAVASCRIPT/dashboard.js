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
let amounts = document.getElementById("amounts")
let addmoney = document.getElementById("addmoney")
let amnt = document.getElementById("amnt")
let addEmail = document.getElementById("addEmail")
let confirms = document.getElementById("confirm")

// dotscontainer.sty
savingsPage.style.display = "none"
investPage.style.display = "none"
accountpage.style.display = "none"
addmoney.style.display= 'none'
confirms.style.display= 'none'

const firebaseConfig = {
    apiKey: "AIzaSyB6waZ87Or4bdQe9pr-5YI_KGdwB8T4AtI",
    authDomain: "simplysekinah-piggyvest.firebaseapp.com",
    databaseURL: "https://simplysekinah-piggyvest-default-rtdb.firebaseio.com",
    projectId: "simplysekinah-piggyvest",
    storageBucket: "simplysekinah-piggyvest.appspot.com",
    messagingSenderId: "669396338768",
    appId: "1:669396338768:web:5546f6e340de1214d8e955",
    measurementId: "G-TFQQJBXQWX"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()


// to identify the particular user that signed up so as to assign their account balance to them
let validUser;
function checkAuth(params) {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            logUsername.innerHTML = auth.currentUser.displayName
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/v8/firebase.User
            var uid = user.uid;
            // console.log(user);
            var database = firebase.database();
            var starCountRef = database.ref('users');
            starCountRef.on('value', (snapshot) => {
                const data = snapshot.val();
                // console.log(data)
                let mainUser =auth.currentUser.email;
                
                validUser = data.find((element)=>element.Email === mainUser)
                // console.log(validUser);
                amounts.innerHTML = validUser.currentBalance
            })
            // ...
        } else {
            window.location.href = 'LOGIN.HTML'
            // User is signed out
            // ...
        }
    });
}

checkAuth()


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

function pro() {
    accountpage.style.display = "block"
    right.style.display = "none"
}

function logout(event) {
    event.preventDefault()
    fetch(`http://localhost:4567/login/${logUser.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "DELETE",
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            window.location.href = "login.html"
        })
}
function addMoney(params) { 
    addmoney.style.display= 'block'
}
function next(params) { 
    confirms.style.display= 'block'
}
function payapp(params) {
    addEmail.textContent = auth.currentUser.Email
    let added = validUser.currentBalance += Number(amnt.value)
    console.log(added);
    starCountRef.orderByChild('Email').equalTo(validUser.Email).on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        if (data) {
            const userId = Object.keys(data)[0];
            database.ref('users/' + userId).update({
                currentBalance: added
            }).then(() => {
                alert(`You have added ${Number(amnt.value)} Successfully`)
            }).catch((error) => {
                console.log(error);
                alert('error setting pin' + error.message)
            })
        }

    })
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-99b6b1e93b7b2ba3a775dd0f110be160-X",
        tx_ref: "titanic-48981487343MDI0NzMx",
        amount: Number(amnt.value),
        currency: "NGN",
        payment_options: "card, banktransfer, ussd",
        redirect_url: "dashboard.html",
        meta: {
            consumer_id: 23,
            consumer_mac: "92a3-912ba-1192a",
        },
        customer: {
            email: "rose@unsinkableship.com",
            phone_number: "08102909304",
            name: "Rose DeWitt Bukater",
        },
        customizations: {
            title: "The Titanic Store",
            description: "Payment for an awesome cruise",
            logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
        },
    });
}