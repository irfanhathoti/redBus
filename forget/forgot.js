const reset_btn = document.getElementById('resetBtn')

reset_btn.addEventListener('click', () => {
    const errorMessage = document.querySelector('.text-danger')

    const getInput = document.getElementById('user_email')

    const email_regex = /^[a-z0-9-.]+@(?=.*gmail)([a-z])+\.(?=.*com)([a-z]){2,3}$/

    if (getInput.value == '') {
        errorMessage.innerHTML = '*Please enter your email address'
    } else if (email_regex.test(getInput.value) === false) {
        errorMessage.innerHTML = '*Enter a valid E-mail'
    } else {
        errorMessage.innerHTML = ''
        alert('We are sending password reset link in your mail please set new password')
        location.href = '../LogIn/login.html'
    }
})