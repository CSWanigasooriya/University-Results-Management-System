
/*function call_py_listener(email){
    console.log("Entered javascript function");
    eel.listener(email);
}*/

function log_in(){
    var email = document.getElementById('email').value;
    var pw = document.getElementById('psw').value;
    eel.login(email, pw);
    window.close();
}

/*const buttons = document.querySelectorAll('a');
buttons.forEach(btn => {
    btn.addEventListener('click', log_in());
})*/