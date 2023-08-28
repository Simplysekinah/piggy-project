let loginspace = document.getElementById("loginspace");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");

// to give each user that signed up a default image
let image = new Image();
image.src = "../images/PIGGY.jpeg";
let profileImage = image.src;

// for the user to sign up and store their data and also setting it to the local storage
function signup(event){
    event.preventDefault()
    let data = {
        input1: input1.value,
        input2: input2.value,
        input3:input3.value,
        input4: input4.value,
        input5: input5.value,
        profilePicture: profileImage,
        transactions: []
    };
    if(input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "" || input5.value == ""){
        alert("Input all field")
    }
    else{
        fetch("http://localhost:4567/signup",{
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        alert("You have successfully created an account")
        localStorage.setItem("loggedUser", JSON.stringify(data))
        window.location.href = "accountpage.html"
    })
    .catch((err)=>{
        console.log(err);
    })
    }
}
