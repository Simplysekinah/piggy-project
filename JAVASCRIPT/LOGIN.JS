let loginspace = document.getElementById("loginspace");
let forgotpassword = document.getElementById("forgotpassword");
let resetpassword = document.getElementById("resetpassword");
let email = document.getElementById("input1");
let password = document.getElementById("input2");
let Emailaddress = document.getElementById("email");


forgotpassword.style.display = "none"
resetpassword.style.display = "none"

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
const auth = firebase.auth()

function login() {
    loginspace.style.display = "block"
    forgotpassword.style.display = "none"
}
function forgetPassword() {
    loginspace.style.display = "none"
    forgotpassword.style.display = "block"
}


function resetcode(event) {
    event.preventDefault()
    console.log(Emailaddress.value);
    let email = Emailaddress.value.trim()
    console.log(email);
    var database = firebase.database();
    var starCountRef = database.ref('users');
    starCountRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data)
        let validEmail = data.find((user) => user.Email === email)
        if (validEmail) {
            firebase.auth().sendPasswordResetEmail(email).then(function () {
                alert('Password reset email sent!');
                loginspace.style.display = "block";
                forgotpassword.style.display = "none";
            }).catch(function (error) {
                console.error(error);
                alert('Error sending password reset email');
            });
        } else {
            alert('Invalid email address');
        }
    });
}



function dashboard(event) {
    event.preventDefault()
    const user = firebase.auth().currentUser;
    console.log(user)
    if (!user.emailVerified) {
        alert("you can't sign in the the moment, verify email")
        return
    }
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            var user = userCredential.user;
            window.location.href = 'dashboard.html'
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}

function signup(event) {
    event.preventDefault()
    window.location.href = 'signup.html'
}