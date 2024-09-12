let loginspace = document.getElementById("loginspace");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");

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

let index
firebase.database().ref('users').on('value', (snapshot) => {
    const data = snapshot.val() || []
    index = data.length

});

function signup(event) {
    event.preventDefault()

    if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "" || input5.value == "") {
        alert("Input all field")
    }
    else {

        firebase.auth().createUserWithEmailAndPassword(input2.value, input4.value)
            .then((userCredential) => {
                var user = userCredential.user;
                user.updateProfile({
                    displayName: input1.value,
                }).then(() => {
                    console.log(user.email);
                    localStorage.setItem("LoginUser", user.email)
                    let data = {
                        displayName: input1.value,
                        Email: input2.value,
                        phoneNumber: input3.value,
                        input4: input4.value,
                        referrerCode: input5.value,
                        profilePicture: "",
                        currentBalance: 2000,
                        transactions: [
                            // {
                            // from: vestBank,
                            // to: input1.value,
                            // bank: vestBank,
                            // date: lovelyday,
                            // amount: 2000,
                            // narration: coupon
                            // }
                    ],
                        pin: "",
                        accountNumber: "",
                        uid: user.uid
                    };
                    firebase.auth().currentUser.sendEmailVerification()
                        .then(() => {
                            firebase.database().ref(`users/${index}`).set(data).then(() => alert('success')).catch((err) => alert(err));
                            setTimeout(() => {
                                window.location.href = 'pin.html'
                            }, 3000);
                        });
                }).catch((error) => {
                    console.log(errorMessage)
                });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }
}
