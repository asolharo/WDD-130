// Set variables
var modal = document.getElementById('id01');
var signOut = document.getElementById('signOut');
var user = "asolharo"
var pwd = "testing"

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function login(){
    console.clear();
    //document.getElementById('welcomeDiv').style.display = "none";
    if (sessionStorage.getItem(user) != pwd) {
        modal.style.display='block'
        signOut.style.visibility = 'hidden';
    }
    else {
        window.location.href = './scheduler.html';
        modal.style.display = "none";
        signOut.style.visibility = 'visible';
    }
    //console.log(sessionStorage.getItem(key))
}

function goToScheduler() {
    console.clear();
    var uname = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    sessionStorage.setItem(uname, pass);

    if (uname == user & pass == pwd) {
        console.log("It's working")
        //document.getElementById('welcomeDiv').style.display = "block";
        //alert( "username = " + sessionStorage.getItem(uname));
        window.location.href = './scheduler.html';
        modal.style.display = "none";
        signOut.style.visibility = 'visible';
    }

    else {
        alert("Login failed. Please check again:\nUsername\nPassword");
    }


    console.log(uname)
    console.log(pass)

}

function exit() {
    console.clear();
    if (sessionStorage.getItem(user) == pwd) {
        console.log('before clearing')
        console.log(sessionStorage.getItem(user))
        sessionStorage.clear();
        console.log('after clearing')
        console.log(sessionStorage.getItem(user))
        signOut.style.visibility = 'hidden';
        window.location.href = './index.html';
    }
}

function checkSession(){
    if (sessionStorage.getItem(user) == pwd) {
        console.log("It's working")
        signOut.style.visibility = 'visible';
    }
    else {
        console.log("There's no session")
        console.log(sessionStorage.getItem(user))
        signOut.style.visibility = 'hidden';
    }
}