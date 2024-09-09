let logUsername = document.getElementById("loguser");
let logUser = (localStorage.getItem("LoginUser"));
console.log(logUser);

let accountnumber = document.getElementById("accountnumber")

logUsername.innerHTML = `You are welcome ${logUser}`
 
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

 function generateAccountNumner(){
   accountnumber.innerHTML =  String(Math.floor(Math.random()*100000000000) + 300000000000). padStart(11,"3")
   console.log(accountnumber.innerHTML);
}
 generateAccountNumner();


 function save() {
    var starCountRef = database.ref('users');
    starCountRef.orderByChild('Email').equalTo(logUser).on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(snapshot.val())
        console.log(data)
        if (data) {
            const userId = Object.keys(data)[0];
            database.ref('users/' + userId).update({
                accountNumber: accountnumber.innerHTML
            }).then(() => {
                alert('Data updated Successfully')
                localStorage.removeItem('userEmail');
                setTimeout(() => {
                    window.location.href = 'dashboard.html'
                }, 3000);
            }).catch((error) => {
                console.log(error);
                alert('error updating data' + error.message)
            })
        }

    })
//    currentUser.input6 = accountnumber.innerHTML;
//    currentUser.accountBalance = parseInt(0);
//    console.log(currentUser);

//    fetch(`http://localhost:4567/signup/${logUser.id}`, {
//        headers: {
//            "Content-Type": "application/json"
//        },
//        method: "PATCH", 
//        body: JSON.stringify(currentUser)
//    })
//    .then((response) => response.json())
//    .then((data) => {
//        console.log(data);
//     //    alert("User data updated successfully");
//        window.location.href = "pin.html"
//    });

}

