
jQuery(document).ready(()=>{
  $(".auth").css({
             "border":"4px solid #ffff",
             "border-radius":"10px",
            "position": "relative",
            "top":" 10px",
            "background-color":"grey"
        })
})


function log() {
    let username = document.getElementById("usrname").value;
    let password = document.getElementById("psw").value;
    let user="kuzembaev9029@gmail.com";
    let pass="Harm1223";
    if (username == user && password == pass) {
        alert("You have successfully logged in.");
    } else {
        alert("Try one more time");
    }
}
