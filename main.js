function validate(){
    var email = document.getElementById('email');
    var error_msg = document.getElementById('error-msg');
    var error_img = document.getElementById('error-img');
    var email_wrap = document.getElementsByClassName('email-wrap')[0];

    if(email.value == "") {
        email_wrap.style.backgroundColor = "hsl(0, 94%, 66%)";
        email_wrap.style.marginBottom = ".65em";
        error_msg.style.display = "block";
        error_msg.innerHTML = "Whoops! It looks like you forgot to add your email";
        error_img.style.display = "block";

        return false;
    }

    if(!validateEmail(email.value)) {
        email_wrap.style.backgroundColor = "hsl(0, 94%, 66%)";
        email_wrap.style.marginBottom = ".65em";
        error_msg.style.display = "block";
        error_msg.innerHTML = "Whoops, make sure it's an email";
        error_img.style.display = "block";
        return false;
    }

    return true;
}

function validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}