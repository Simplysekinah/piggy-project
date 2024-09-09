let inp1 = document.getElementById("dash")
let inp2 = document.getElementById("dash1")
let inp3 = document.getElementById("dash2")
let inp4 = document.getElementById("dash3")
let logUser = (localStorage.getItem("LoginUser"));

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

const app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();
const auth = firebase.auth()

function moveToNext(current, nextFieldId) {
    if (current.value.length === 1) {
        document.getElementById(nextFieldId).focus();
    }
}

let savedPin;
function con() {
    savedPin = inp1.value + inp2.value + inp3.value + inp4.value
    if (savedPin.length !== 4) {
        alert('Enter a valid pin')
        return;
    }
    var starCountRef = database.ref('users');
    starCountRef.orderByChild('Email').equalTo(logUser).on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        if (data) {
            const userId = Object.keys(data)[0];
            database.ref('users/' + userId).update({
                pin: savedPin
            }).then(() => {
                alert('pin updated Successfully')
                setTimeout(() => {
                    window.location.href = 'accountpage.html'
                }, 3000);
            }).catch((error) => {
                console.log(error);
                alert('error setting pin' + error.message)
            })
        }

    })
    //     fetch(`http://localhost:4567/signup/${logUser.id}`, {
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         method: "GET",
    //     })
    //     .then((response)=>response.json())
    //     .then((data)=>{
    //        data.pin = sekinat
    //        fetch(`http://localhost:4567/signup/${logUser.id}`, {
    //        headers: {
    //            "Content-Type": "application/json"
    //        },
    //        method: "PATCH", 
    //        body: JSON.stringify(data)
    //    })
    //    .then((respons) => respons.json())
    //    .then((dat) => {
    //        console.log(dat);
    //        window.location.href = "dashboard.html"
    //    });

    //     })
}