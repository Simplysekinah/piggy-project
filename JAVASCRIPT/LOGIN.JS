let loginspace = document.getElementById("loginspace");
let forgotpassword = document.getElementById("forgotpassword");
let resetpassword = document.getElementById("resetpassword");
let email = document.getElementById("input1");
let password = document.getElementById("input2");

forgotpassword.style.display = "none"
resetpassword.style.display = "none"

function forgetPassword() {
    loginspace.style.display = "none"
    forgotpassword.style.display = "block"
}

function login() {
    loginspace.style.display = "block"
    forgotpassword.style.display = "none"
}

function resetcode(event) {
    event.preventDefault()
    resetpassword.style.display = "block"
    forgotpassword.style.display = "none"
}

function loginpage() {
    resetpassword.style.display = "none"
    loginspace.style.display = "block"
}

function dashboard(event) {
    event.preventDefault()
    fetch("http://localhost:4567/signup",{
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET",
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let confirm = data.find((e) => e.input2 == input1.value && e.input4 == input2.value)
            console.log(confirm);
            if (confirm) {
                console.log(confirm);
                fetch("http://localhost:4567/login", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method:"POST",
                    body: JSON.stringify(confirm)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data)
                        alert("Login successful")
                        window.location.href = "dot.html"
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                localStorage.setItem("loggedUser", JSON.stringify(confirm))
            }
            else {
                alert("User not found.")
            }
        })

        .catch((err) => {
            console.log(err);
        })
}

