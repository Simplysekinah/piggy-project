let inp1 = document.getElementById("dash")
let inp2 = document.getElementById("dash1")
let inp3 = document.getElementById("dash2")
let inp4 = document.getElementById("dash3")
let logUser = JSON.parse(localStorage.getItem("loggedUser"));


let sekinat;
function con(){
    sekinat = inp1.value + inp2.value + inp3.value + inp4.value
    fetch(`http://localhost:4567/signup/${logUser.id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "GET",
    })
    .then((response)=>response.json())
    .then((data)=>{
       data.pin = sekinat
       fetch(`http://localhost:4567/signup/${logUser.id}`, {
       headers: {
           "Content-Type": "application/json"
       },
       method: "PATCH", 
       body: JSON.stringify(data)
   })
   .then((respons) => respons.json())
   .then((dat) => {
       console.log(dat);
       window.location.href = "dashboard.html"
   });

    })
}