document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const number = getInputValueById('input-number-form')
    const pinNumber = getInputValueById('input-pin-number')
    // console.log('there is two number That we are getting from', number, pinNumber)
    if (number === 44 && pinNumber === 12) {
        window.location.href = './home.html'
    }
    else {
        alert('Wrong pin or number....DGM')
    }
})