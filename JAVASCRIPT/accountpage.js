let logUsername = document.getElementById("loguser");
let logUser = JSON.parse(localStorage.getItem("loggedUser"));
let accountnumber = document.getElementById("accountnumber")

// console.log(logUser.id);
let currentUser;
logUsername.innerHTML = `You are welcome ${logUser.input1}`

fetch(`http://localhost:4567/signup/${logUser.id}`,{
      headers: {
          "Content-Type": "application/json"
      },
      method: "GET",
  })
  .then((response)=>response.json())
  .then((data)=>{
      console.log(data)
      currentUser = data;
      console.log(currentUser);
      alert("You have successfully created an account")
      save( )
  })
  .catch((err)=>{
      console.log(err);
  })
 
 function generateAccountNumner(){
   accountnumber.innerHTML =  String(Math.floor(Math.random()*100000000000) + 300000000000). padStart(11,"3")
   console.log(accountnumber.innerHTML);
}
 generateAccountNumner();


 function save() {
   currentUser.input6 = accountnumber.innerHTML;
   currentUser.accountBalance = parseInt(0);
   console.log(currentUser);

   fetch(`http://localhost:4567/signup/${logUser.id}`, {
       headers: {
           "Content-Type": "application/json"
       },
       method: "PATCH", 
       body: JSON.stringify(currentUser)
   })
   .then((response) => response.json())
   .then((data) => {
       console.log(data);
    //    alert("User data updated successfully");
       window.location.href = "pin.html"
   });

}

dat.acct = dat.acct - inp1
fetch/data.id
