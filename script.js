var users=[]
if(localStorage.getItem("users")){
    users = JSON.parse(localStorage.getItem('users'))}

console.log(users)
// functin to submit data from registration
function Submit(){
    var username= document.getElementById("lgnUserN").value;
    var emailr=document.getElementById("emailr").value;
    var usrincome=document.getElementById("income").value;
    var passwordr=document.getElementById("lgnPswd").value;
    var pass= document.getElementById("VPswd").value
    // checks if password entered matches the password reconfirmation
    if (passwordr===pass){
        var user={
            username:username,
            email2:emailr,
            income:usrincome,
            password2:passwordr
        }
        users.push(user)
    localStorage.setItem('users',JSON.stringify(users))
    window.open("home.html");
    }
    else{alert("Password/Username do not match")}
   
};
// function for logging in
function Login(){
    var userName=document.getElementById("lgnUserN").value;
    var password=document.getElementById("lgnPswd").value;
    pIncm = document.getElementById("pinc");
    var logUser={
        email1:userName,
        password1:password
    }
    console.log(users)
    for (let i = 0; i < users.length; i++) {
        if( (logUser.email1===users[i].username) && (logUser.password1===users[i].password2)) {
            window.open("home.html");
            // usersArray = JSON.parse(localStorage.getItem('users'))
            totalExpense()
        }
        else{alert("Password/Username do not match")}

}
};

//  Adding Expenses

var expenses=[]
if(localStorage.getItem("expenses")){
    var expens = JSON.parse(localStorage.getItem('expenses'))}

function addRecord(){
    var date= document.getElementById("date").value;
    var description= document.getElementById("description").value;
    var category= document.getElementById("category").value;
    var amount=document.getElementById("amount").value;
    
        var expense={
            date:date,
            description: description,
            category:category,
            amount:amount
        }
        expenses.push(expense)
    localStorage.setItem('expenses',JSON.stringify(expenses))
    // window.open("history.html");
    myX = JSON.parse(window.localStorage.getItem('expenses'));
    for(let key in myX) {
        console.log(key + ":", myX[key]);}
   // window.open("history.html");
}

// Adding and Appending to history 

myX = JSON.parse(window.localStorage.getItem('expenses'));

for(let i = 0; i < myX.length; i++){
    document.getElementById('customers').innerHTML +=
    `
    <tr id="historyD">
    <td id="usrdate">${myX[i].date}</td>
    <td id="usrdes">${myX[i].description}</td>
    <td id="usrcat">${myX[i].category}</td>
    <td id="usrExp">R${myX[i].amount}</td>
    </tr>
    `
}


// calculations and adding to user interface 

var expen = JSON.parse(localStorage.getItem('expenses'));
var inco = JSON.parse(localStorage.getItem('users'));


var  pExp = document.getElementById("pr");
var pinc = document.getElementById("pinc")
var total = 0;
incoProp = inco[0].income
 for (let index = 0; index < expen.length; index++) {
     total= total + parseInt(expen[index].amount)
     console.log(total)
 }
 pExp.innerHTML = "-R"+total;
 pinc.innerHTML = "R"+incoProp;
 var totAm = parseInt(incoProp) - parseInt(total)

 document.getElementById("totalAmount").innerHTML = "R" + totAm.toString();
 console.log(parseInt(incoProp) - parseInt(total))


