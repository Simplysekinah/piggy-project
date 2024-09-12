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
let amout = document.getElementById("amout")
let Transfer = document.getElementById("Transfer")
let transfermoney = document.getElementById("transfermoney")
let balance = document.getElementById("balance")
let enter = document.getElementById("enter")
let bank = document.getElementById("bank")
let enter1 = document.getElementById("enter1")
let enter2 = document.getElementById("enter2")
let enter3 = document.getElementById("enter3")
let showmoneys = document.getElementById("showmoneys")
let showaccs = document.getElementById("showaccs")
let contain = document.getElementById("contain")
let contain1 = document.getElementById("contain1")
let contain2 = document.getElementById("contain2")
let contain3 = document.getElementById("contain3")
let contain4 = document.getElementById("contain4")
let contain5 = document.getElementById("contain5")
let contain6 = document.getElementById("contain6")
let confirmTransfer = document.getElementById("confirmTransfer")
let confirmTransferhis = document.getElementById("confirmTransferhis")
let successful = document.getElementById("successful")
let pins = document.getElementById("pins")
let btnconfirm = document.getElementById("btnconfirm")
let topreceipts = document.getElementById("topreceipts")
let downreceipts = document.getElementById("downreceipts")
let data = document.getElementById("data")

// dotscontainer.sty
savingsPage.style.display = "none"
investPage.style.display = "none"
accountpage.style.display = "none"
addmoney.style.display= 'none'
confirms.style.display= 'none'
Transfer.style.display= 'none'
transfermoney.style.display = "none"
balance.style.display = "none"
confirmTransfer.style.display = "none"
confirmTransferhis.style.display = "none"
successful.style.display = "none"
topreceipts.style.display = "none"
downreceipts.style.display = "none"
// enter.style.display = "none"
// bank.style.display = "none"

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
        try {
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
                    console.log(data)
                    const dataArray = Object.values(data);
                    console.log(dataArray);
                    
                    console.log(auth.currentUser.Email)
                    console.log(auth.currentUser.email)
                    let mainUser =auth.currentUser.email
                    console.log(mainUser)
                    validUser = dataArray.find((element)=>element.Email === mainUser)
                    console.log(validUser);
                    amounts.innerHTML = validUser.currentBalance
                    showmoneys.innerHTML = validUser.currentBalance
                    showaccs.innerHTML = validUser.accountNumber
                    for (let index = 0; index < validUser?.transactions?.length; index++) {
                        allTransactions.innerHTML += `
                        <div class="Transactions">
                        <i class="fa-solid air fa-angles-down"></i>
                        <div>
                            <div>${validUser.transactions[index].from}</div>
                            <div>${validUser.transactions[index].to}</div>
                            <div>${validUser.transactions[index].date}</div>
                        </div>
                        <div>
                        ${validUser.transactions[index].amount}
                        </div>
                    </div>
                        `
                    }
                })
                // ...
            } else {
                window.location.href = 'LOGIN.HTML'
                // User is signed out
                // ...
            }
        } catch (error) {
            console.log(error)
        }
    });
}

checkAuth()
console.log(validUser)

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
    console.log(validUser.Email)
    addEmail.value = validUser.Email
}
function next(params) { 
    confirms.style.display= 'block'
    // console.log(auth.currentUser.Email)
    amout.innerHTML = amnt.value
}
function payapp(params) {
    // console.log(auth.currentUser.Email)
    // addEmail.innerText += auth.currentUser.Email
    let added = validUser.currentBalance += Number(amnt.value)
    console.log(added);
    var database = firebase.database();
    var starCountRef = database.ref('users');
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

function transfer() {
    console.log(validUser)
    Transfer.style.display = "block"
    // balance.style.display = "block"
}
function details() {
    transfermoney.style.display = "block"
    Transfer.style.display = "none"
    // right.style.display = "none"
    // addmoney.style.display = "none"
}

function balances() {
    balance.style.display = "block"
}

function bal(){
    console.log(validUser);
    // let convalidUser =Object.values(validUser)
    // console.log(convalidUser);
    
    enter.value = validUser.accountNumber
    balance.style.display = "none"
}

function banks(){
    bank.style.display= "block"
}

function listed(val){
    enter1.value = val
    bank.style.display= "none"
}
let masterUser;
function contin(){
    console.log(enter.value,enter1.value,enter2.value,enter3.value,enter4.value)
    var database = firebase.database();
    var starCountRef = database.ref('users');
    starCountRef.orderByChild('accountNumber').equalTo(enter2.value).on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        // console.log(data.currentBalance)
        // console.log(snapshot.val())
        if (!data) {
            alert('account not Found')
        }
        else if(enter.value == "" || enter1.value == "" || enter2.value == "" || enter3.value == "" || enter4.value == ""){
            alert("Fill all inputs")
        }
        else {
            const userId = Object.keys(data)[0];
             masterUser = data[userId]
            // console.log(user.currentBalance)
            // let newBalance = Number(enter3.value) +  Number(user.currentBalance)
            // database.ref('users/' + userId).update({
            //     currentBalance: newBalance
            // }).then(() => {
            //     alert(`You have send ${Number(enter3.value)} Successfully`)
                contain.innerHTML = enter.value
            contain1.innerHTML = enter2.value
            contain2.innerHTML = enter1.value
            let date = new Date()
            let todate = date.toLocaleDateString();
            contain3.innerHTML = todate
            // let sum = fee.textContent = fee.toFixed ('₦10.26');
            contain4.innerHTML = '₦10.26'
            contain5.innerHTML = enter3.value
            contain6.innerHTML = enter4.value
            transfermoney.style.display = "none"
            confirmTransfer.style.display = "block"
            // }).catch((error) => {
            //     console.log(error);
            //     alert('error sending fund' + error.message)
            // })
        }

    })
    
}

function rem(){
    try {
        console.log(pins.value)
        let date = new Date()
        let todate = date.toLocaleDateString();
        var database = firebase.database();
        var starCountRef = database.ref('users');
        starCountRef.orderByChild('accountNumber').equalTo(enter.value).on('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            console.log(snapshot.val())
            const userId = Object.keys(data)[0];
            const userData =data[userId]
            console.log(userData)
            if (userData.pin === Number(pins.value)) {
                // alert('Enter a correct pin')
                return;
            }
            let details = {
                from: validUser.displayName,
                to: masterUser.displayName,
                bank: enter1.value,
                date:todate,
                fee: 10.26,
                amount:enter3.value,
                narration:enter4.value
            }
            
            let removedmoney = Number(userData.currentBalance)- Number(enter3.value) - 10.26
            const transactionHistory = userData.transactions || []
            let initailId = transactionHistory.length + 1
    
    
            let newHistory= {
                id:initailId,
                ...details
            }
            transactionHistory.push(newHistory)
    
            database.ref('users/' + userId).update({
                transactions:transactionHistory,
                currentBalance:userData.currentBalance
            })
            confirmTransfer.style.display = "none"
            left.style.display = "none"
            successful.style.display = "block"
            document.body.appendChild(confirmTransfer);
            userData.currentBalance = removedmoney
    
            showmoney = userData.currentBalance
            showmoney = removedmoney
            console.log(showmoney);
    
            console.log(userData.currentBalance)
        })
        starCountRef.orderByChild('accountNumber').equalTo(enter2.value).once('value', (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            console.log(snapshot.val())
            
            const userId = Object.keys(data)[0];
            
                const user = data[userId]
                console.log(user.currentBalance)
                let newBalance = Number(enter3.value) +  Number(user.currentBalance)
                database.ref('users/' + userId).update({
                    currentBalance: newBalance
                }).then(() => {
                    alert(`You have send ${Number(enter3.value)} Successfully`)
                }).catch((error) => {
                    console.log(error);
                    alert('error sending fund' + error.message)
                })
        })
    } catch (error) {
        console.log(error)
    }
}
let removedmoney;
function receipt(){
    pindivs.style.display = "none"
    btnconfirm.style.display = "none"
    topreceipts.style.display = "block"
    downreceipts.style.display = "block"
    data.style.display = "none"
    document.body.innerHTML = confirmTransfer.innerHTML
    setTimeout(() => {
        alert("d")
       document.body.innerHTML = ""
       window.location.href = "dashboard.html"
    }, 5000);
    window.print('confirmTransfer')
    showmoney = removedmoney
}

function ret(){
    window.location.href = "dashboard.html"
}