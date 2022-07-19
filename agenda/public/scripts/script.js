// Get the modal
var modal = document.getElementById('id01');
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
    modal.style.display='block'
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
        window.location.href = '/schedule';
        modal.style.display = "none";
    }

    else {
        alert("Login failed. Please check again:\nUsername\nPassword");
    }


    console.log(uname)
    console.log(pass)

}

