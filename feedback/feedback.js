var namee = false;
var mail = false;
var btn = document.getElementById('subBtn')
function validateName() {
    const fbname = document.getElementById("fbname").value;
    var namePattern = /^([a-zA-Z\s])+$/;
    const name_error = document.getElementById("error_name")
    if (fbname == '') {
        name_error.innerHTML = ("**required")
        namee = false;
    }
    else if (!fbname.match(namePattern)) {
        name_error.innerHTML = ('**Username cannot contain numbers')
        namee = false;
    }
    else if (fbname.match(namePattern)) {
        name_error.innerHTML = (" ");
        namee = true;
    }
}
function validateEmail() {
    const email = document.getElementById("fbEmail").value;
    var emailPattern = /[a-z0-9]+@([gmail]{5})+.[a-z]{2,3}$/;
    const email_error = document.getElementById("error_email")
    if (email == '') {
        email_error.innerHTML = ("**required");
        mail = false;
    }
    else if (!email.match(emailPattern)) {
        email_error.innerHTML = ("**Please enter valid email");
        mail = false;
    }
    else if (email.match(emailPattern)) {
        email_error.innerHTML = (" ");
        mail = true;

    }
    if (namee && mail) {
        btn.disabled = false;
    }
}
function closeModal() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    btn.disabled = true;
}