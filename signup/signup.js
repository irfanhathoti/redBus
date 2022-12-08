const onRegister = () => {

    //input  id
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById('password').value;
    const confpass = document.getElementById("conPass").value;
    // const gender=document.getElementsByClassName("gender").value;

    console.log(name, email, password, confpass)

    //
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const passError = document.getElementById("pass-error");
    const conPassError = document.getElementById("conPass-error");
    // const genderError=document.getElementById("gender-error");


    


    if (name == "") {
        nameError.innerHTML = ("*Username required ");
    } else {
        var regex = /^[a-zA-Z\s]/;
        if (!regex.test(name)) {
            nameError.innerHTML = ("*Enter Valid Username");
        } else if (name.length < 3) {
            nameError.innerHTML = ("minimum 3 letters  ");

        } else {
            nameError.innerHTML = ("")
        }
    }

    if (email == "") {
        emailError.innerHTML = ("*Email requird");
    } else {

        var email_regex = /[a-z0-9-.]+@(?=.*htcindia)([a-z])+\.[a-z]{2,3}$/

            ;
        if (email_regex.test(email) === false) {
            emailError.innerHTML = ("*Enter valid Email");
        } else {
            emailError.innerHTML = ("");

        }
    }

    const passregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (password == "") {
        passError.innerHTML = ("*Password required")
    }
    else if (passregex.test(password) === false) {
        passError.innerHTML = ("*Enter Strong Password")
    }

    else if (password.length < 8 != password.length > 10) {
        passError.innerHTML = ("*Please enter password (min 8 and max 10 charecter)")
    }
    else {
        passError.innerHTML = ("")
    }

    if (confpass == "") {
        conPassError.innerHTML = "*Confirm Password required"
    }
    else if (password != confpass) 
    {
        conPassError.innerHTML = ("*Password didn't matched")
    }
    else {
        if (email != "") {
            if (email.match(regex)) {
                if (password == confpass) {
                    conPassError.innerHTML = ""
                    alert("registration successfull")
                    location.href = "/Login/login.html"
                }

            }
        }
    }

}

const resetForm = ()=>{
    const nameError = document.getElementById("name-error").innerHTML="";
    const emailError = document.getElementById("email-error").innerHTML="";
    const passError = document.getElementById("pass-error").innerHTML="";
    const conPassError = document.getElementById("conPass-error").innerHTML="";


}