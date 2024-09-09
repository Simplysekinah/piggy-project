let transfer = document.getElementById("Transfer");
let transfermoney = document.getElementById("transfermoney");
let right = document.getElementById("right");
let balance = document.getElementById("balance");
let profilepage = document.getElementById("profilepage");
let profilePictureInput = document.getElementById("profile-picture-input")
let pix = document.getElementById("pix")
let logUser = JSON.parse(localStorage.getItem("loggedUser"))
let logUsername = document.getElementById("logusers")
let changeusername = document.getElementById("change-username")
let changepassword = document.getElementById("change-password")
let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
let { id, input1, input2, input3, input4, input5 } = loggedUser
let addmoney = document.getElementById("addmoney")
let ademail = document.getElementById("ademail")
let confirms = document.getElementById("confirm")
let amout = document.getElementById("amout")
let hold = document.getElementById("hold")
let amnt = document.getElementById("amnt")
let showmoney = document.getElementById("showmoney")
let showacc = document.getElementById("showacc")
let showmoneys = document.getElementById("showmoneys")
let showaccs = document.getElementById("showaccs")
let enter = document.getElementById("enter")
let bank = document.getElementById("bank")
let enter1 = document.getElementById("enter1")
let enter2 = document.getElementById("enter2")
let enter3 = document.getElementById("enter3")
let enter4 = document.getElementById("enter4")
let confirmTransfer = document.getElementById("confirmTransfer")
let contain = document.getElementById("contain")
let contain1 = document.getElementById("contain1")
let contain2 = document.getElementById("contain2")
let contain3 = document.getElementById("contain3")
let contain4 = document.getElementById("contain4")
let contain5 = document.getElementById("contain5")
let contain6 = document.getElementById("contain6")
let fee = document.getElementById("fee")
let left = document.getElementById("left")
let successful = document.getElementById("successful")
let namess = document.getElementById("names")
let logs = document.getElementById("log")
let pindivs = document.getElementById("pindiv")
let btnconfirm = document.getElementById("btnconfirm")
let topreceipts = document.getElementById("topreceipts")
let downreceipts = document.getElementById("downreceipts")
let avail = document.getElementById("avail")
let data = document.getElementById("data")
let Buyairtime = document.getElementById("Buyairtime")
let sim = document.getElementById("sim")
let network = document.getElementById("network")
let transHist = document.getElementById("trans-history")
let acctbalances = document.getElementById("acctbalances")
let entermt = document.getElementById("entermt")
let airamount = document.getElementById("airamount")
let airtimedetails = document.getElementById("airtimedetails")
let selectbiller = document.getElementById("selectbiller")
let amt1 = document.getElementById("amt1")
let amt2 = document.getElementById("amt2")
let amt3 = document.getElementById("amt3")
let amt4 = document.getElementById("amt4")
let phonenumber = document.getElementById("phonenumber")
let buyair = document.getElementById("buyair")
let errortext = document.getElementById("errortext")
let airsuccess = document.getElementById("airsuccess")
let dash = document.getElementById("dash")
let dash1 = document.getElementById("dash1")
let dash2 = document.getElementById("dash2")
let dash3 = document.getElementById("dash3")
let pindi = document.getElementById("pindi")
let allTransactions = document.getElementById("allTransactions")
let processing = document.getElementById("processing")
let atm = JSON.parse(localStorage.getItem("accn"))



let logusers = loggedUser.input1

let names = loggedUser.input1
namess.innerHTML = names

let log = loggedUser.input1
logs.innerHTML = log

logUsername.innerText = logUser.input1

profilepage.style.display = "none"
transfermoney.style.display = "none"
Transfer.style.display = "none"
balance.style.display = "none"
addmoney.style.display = "none"
confirms.style.display = "none"
confirmTransfer.style.display = "none"
successful.style.display = "none"
topreceipts.style.display = "none"
downreceipts.style.display = "none"
// Buyairtime.style.display = "none"
sim.style.display = "none"
airtimedetails.style.display = "none"
selectbiller.style.display = "none"
buyair.style.display = "none"
airsuccess.style.display ="none"
processing.style.display ="none"

function trans() {
    Transfer.style.display = "block"
}
function details() {
    transfermoney.style.display = "block"
    Transfer.style.display = "none"
    right.style.display = "none"
    addmoney.style.display = "none"
}
function balances() {
    balance.style.display = "block"
}
function profiles() {
    right.style.display = "none"
    profilepage.style.display = "block"
    transfermoney.style.display = "none"
    confirmTransfer.style.display = "none"
    addmoney.style.display = "none"
}
function homes() {
    right.style.display = "block"
    profilepage.style.display = "none"
    addmoney.style.display ="none"
    transfermoney.style.display = "none"
    confirmTransfer.style.display = "none"
}
function Add() {
    addmoney.style.display = "block"
    right.style.display = "none"
    profilepage.style.display = "none"
    transfermoney.style.display = "none"
    confirmTransfer.style.display = "none"
}

let currUser;
fetch(`http://localhost:4567/signup/${loggedUser.id}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        currUser = data
    showmoney.innerHTML = currUser.accountBalance
    showacc.innerHTML = currUser.input6
    showmoneys.innerHTML = currUser.accountBalance
    showaccs.innerHTML = currUser.input6
    console.log(currUser.input6);
    console.log(showacc);
    })

pix = 
function uploadProfilePicture() {
    // console.log(loggedUser.id);
    let reader = new FileReader
    let file = profilePictureInput.files[0]
    reader.addEventListener("load", (e) => {
        let result = e.target.result
        let myObj = {
            item: result
        }
        // fetch(`http://localhost:4567/signup/`, {
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     method: "PATCH",
        //     body: JSON.stringify(myObj)
        // })
        pix.src = result
        localStorage.setItem("img", result)
    })
    if (file) {
        reader.readAsDataURL(file)

    }
}

fetch(`http://localhost:4567/signup/`)
    .then((resp) => resp.json())
    .then((data) => {
        if (data) {
            pix.src = data[0].item
            console.log(data)
        }
})
let newLoggedUser;
function changeUsername() {
    // loggedUser.input1 = changeusername

    let newLoggedUser = {
        id: loggedUser.id,
        input1: changeusername.value,
        input2: loggedUser.input2,
        input3: loggedUser.input3,
        input4: loggedUser.input4,
        input5: loggedUser.input5
    }
    console.log(newLoggedUser, loggedUser.input1);

    fetch("http://localhost:4567/signup")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let confirm = data.find((e) => e.id == loggedUser.id);
            if (confirm) {
                console.log(confirm);
                confirm.input1 = changeusername.value;
                return fetch(`http://localhost:4567/signup/${loggedUser.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newLoggedUser)
                })
                    .then((confirmed) => confirmed.json())
                    .then((confirmed) => {
                        console.log(confirmed);
                        localStorage.setItem("loggedUser", JSON.stringify(confirmed));
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        })
        .catch((err) => {
            console.log(err);
        });

}

function changePassword() {
    let newLoggedUser = {
        id: loggedUser.id,
        input1: loggedUser.input1,
        input2: loggedUser.input2,
        input3: loggedUser.input3,
        input4: changepassword.value,
        input5: loggedUser.input5
    }
    console.log(newLoggedUser, loggedUser.input1);
    fetch("http://localhost:4567/signup",)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            let change = data.find((e) => e.id == loggedUser.id)
            if (change) {
                change.input4 = changepassword.value
                fetch(`http://localhost:4567/signup/${loggedUser.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newLoggedUser)
                })
                    .then((response) => response.json())
                    .then((response) => {
                        console.log(response)
                        localStorage.setItem("loggedUser", JSON.stringify(response));
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

let real;
let userData
function next() {
    console.log(ademail.value);
    fetch(`http://localhost:4567/signup`, {
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            real = data.find((e) => e.input2 == ademail.value);
            if (!real) {
                alert("user does not exist")
            } else {
                amout.innerHTML = amnt.value
                hold.innerHTML = real.input1
                console.log(real);
                confirms.style.display = "block"
            }
        })

}
function payapp() {
    console.log(currUser);
    currUser.accountBalance += Number(amnt.value )
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
    
    fetch(`http://localhost:4567/signup/${currUser.id}`, {
       headers: {
           "Content-Type": "application/json"
       },
       method: "PATCH", 
       body: JSON.stringify(currUser)
   })
   .then((response) => response.json())
   .then((data) => {
       console.log(data);
       alert("User data updated successfully");
   });

}
function bal(){
    enter.value = currUser.input6
    balance.style.display = "none"
}
function banks(){
    bank.style.display= "block"
}
function listed(val){
    enter1.value = val
    bank.style.display= "none"
}


function contin(){
    fetch(" http://localhost:4567/signup",)
    .then((response)=>response.json())
    .then((data)=>{
        let accn = data.find((e) => e.input6 == enter2.value)
        
        if(!accn){
            alert("account not found")
        }
        else if(enter.value == "" || enter1.value == "" || enter2.value == "" || enter3.value == "" || enter4.value == ""){
            alert("Fill all inputs")
        }
        else{
            localStorage.setItem("accn", JSON.stringify(accn))
            accn.accountBalance = Number(enter3.value) +  Number(accn.accountBalance)
            fetch(`http://localhost:4567/signup/${accn.id}`,{
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PATCH",
                body: JSON.stringify(accn)
            })
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
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}
fetch(`http://localhost:4567/signup/${logUser.id}`,{
    headers: {
        "Content-Type": "application/json"
    },
    method: "GET",
})
.then((response)=> response.json())
.then((data) =>{
    console.log(data);
    for (let index = 0; index < data.transactions.length; index++) {
        allTransactions.innerHTML += `
        <div class="Transactions">
        <i class="fa-solid air fa-angles-down"></i>
        <div>
            <div>${data.transactions[index].from}</div>
            <div>${data.transactions[index].to}</div>
            <div>${data.transactions[index].date}</div>
        </div>
        <div>
        ${data.transactions[index].amount}
        </div>
    </div>
        `
    }
})

function rem(){
    confirmTransfer.style.display = "none"
    left.style.display = "none"
    successful.style.display = "block"
    document.body.appendChild(confirmTransfer);
    let date = new Date()
    let todate = date.toLocaleDateString();
    let details = {
        from: currUser.input1,
        to: atm.input1,
        bank: enter1.value,
        date:todate,
        fee: 10.26,
        amount:enter3.value,
        narration:enter4.value
    }
    fetch(`http://localhost:4567/signup/${logUser.id}`,{
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET",
    })
    .then((response=>response.json()))
    .then((data)=>{
        let removedmoney = data.accountBalance-enter3.value - 10.26
        data.accountBalance = removedmoney
        data.transactions = [...data.transactions, details]
        console.log(data.accountBalance);
        showmoney = data.accountBalance
        showmoney = removedmoney
        console.log(showmoney);
        console.log(data);
        fetch(`http://localhost:4567/signup/${logUser.id}`,{
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify(data)
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
        })
    })
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
       window.location.href = "bank.html"
    }, 5000);
    window.print('confirmTransfer')
    showmoney = removedmoney
}

function ret(){
    window.location.href = "dashboard.html"
}
function bac(){
    window.location.href = "dashboard.html"
}
function bill(){
    sim.style.display = "block"
}
function line(val){
    network.value = val;
    sim.style.display = "none"
}
function buyairtimediv(){
    selectbiller.style.display = "block"
    console.log(selectbiller)
    // transfermoney.style.display = "none"
    // Transfer.style.display = "none"
    // right.style.display = "none"
    // addmoney.style.display = "none"
    transHist.style.display = "none"
}
function acctdebit() {
    acctbalances.style.display = "block"
}
function baldebit(){
    entermt.value = currUser.input6
    acctbalances.style.display = "none"
}
function aircon(){
    if(network.value == ""){
        alert('select network')
    }
    else if (phonenumber.value == "") {
        alert('Enter phonenumber')
    }
    else if (phonenumber.value.length == !11 || isNaN(phonenumber)) {
        errortext.textContent ="Write an 11 digits number"
        airtimedetails.style.display = "block"
    } else{
        airtimedetails.style.display = "block"
        selectbiller.style.display = "none"
    }
    // else if(phonenumber.value.length == !11){
    //     errortext.textContent = ""
    // }
    // else{
    //     airtimedetails.style.display = "block"
    //     selectbiller.style.display = "none"
    // }
}
function amtcon(){
    // right.style.display = "none"
    selectbiller.style.display = "none"
    airtimedetails.style.display = "none"
    buyair.style.display = "block"
    fetch(" http://localhost:4567/signup",)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        amt1.innerHTML = entermt.value
        amt2.innerHTML = phonenumber.value
        let date = new Date()
        let todate = date.toLocaleDateString();
        amt3.innerHTML = todate
        amt4.innerHTML = airamount.value
    })
}
function mer(){
    buyair.style.display = "none"
    let airtimepassword = dash.value + dash1.value + dash2.value + dash3.value
    console.log(airtimepassword);
    fetch(`http://localhost:4567/signup/${logUser.id}`,{
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET",
    })
    .then((response)=> response.json())
    .then((data) => {
        let info = data
        // let pass =data.find((e)=> e.pin == airtimepassword.value)
        if(data.pin == airtimepassword){
            processing.style.display = "block"
        }
        else{
            alert("Enter correct pin")
        }
    })
}
function bak(){
    airtimedetails.style.display ="block"
    buyair.style.display = "none"
}
function das(ev){
    ev.preventDefault()
    let allInp = document.querySelectorAll(".ddd")
   for (let i = 0; i < allInp.length - 1; i++) {
    allInp[i].addEventListener("input",()=>{
        setTimeout(() => {
            allInp[i+1].focus()
        }, 100);
    })
   }
}
function rev(){
    processing.style.display = "none"
    airsuccess.style.display = "block"
    let date = new Date()
    let todate = date.toLocaleDateString();
    let details = {
        from: currUser.input1,
        to: phonenumber.value,
        date:todate,
        amount:airamount.value
    }
    fetch(`http://localhost:4567/signup/${logUser.id}`,{
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET",
    })
    .then((response)=> response.json())
    .then((data) => {
       let removedairtime =data.accountBalance - airamount.value
       data.accountBalance = removedairtime
       data.transactions = [...data.transactions, details]
       showmoney = data.accountBalance
       showmoney = removedairtime 
       fetch(`http://localhost:4567/signup/${logUser.id}`,{
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify(data)
        })
        .then((response)=>response.json())
        .then((data)=>{
        })
    })
}
function airhome(){
    window.location.href = "bank.html"
}