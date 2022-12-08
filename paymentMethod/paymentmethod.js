const select_month = document.getElementById('month')

var valu = ''

const monthData = ["Month", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
monthData.forEach((value) => {
    valu += `<option value="${value}"> ${value} </option>`
})
select_month.innerHTML = valu


//collecting the total price from local storage

const getTotalPrice = document.getElementById('total_price')



//redirect payments page

const upiBtn = document.getElementById('upiBtn')
const creditCardBtn = document.getElementById('cardBtn')
// const netBankingBtn = document.getElementById('netBankingBtn')

upiBtn.addEventListener('click', upiPayment)
creditCardBtn.addEventListener('click', creditCardPayment)
// netBankingBtn.addEventListener('click',netBankingPayment)




const display_payment = document.getElementById('display_payment')
const upi_container = document.querySelector('.upi_container')
// const netBanking  = document.querySelector('.netBanking_container')

function upiPayment() {
    display_payment.style.display = 'none'
    upi_container.style.display = 'block'

    upiBtn.style.backgroundColor = 'white'
    upiBtn.style.borderLeft = '10px solid #11d1f3'

    creditCardBtn.style.backgroundColor = 'rgb(208, 243, 255)'
    creditCardBtn.style.borderLeft = 'none'
}

function creditCardPayment() {
    display_payment.style.display = 'block'
    upi_container.style.display = 'none'

    creditCardBtn.style.backgroundColor = 'white'
    creditCardBtn.style.borderLeft = '10px solid #11d1f3'

    upiBtn.style.backgroundColor = ''
    upiBtn.style.borderLeft = 'none'

}




const data = JSON.parse(localStorage.getItem('data'))//getting the bus data
console.log(data)
const travelerData = JSON.parse(localStorage.getItem('travelerdata'))
console.log(travelerData)
const total_price = localStorage.getItem('totalPrice')//getting the total price
const travelerEmail = localStorage.getItem('travelerEmail')//traveler email from local storage
const contactNo = localStorage.getItem('contactNo')


const totalAmount = parseInt(total_price) + 40
getTotalPrice.innerHTML = `Total: ₹ ${totalAmount}`



const container = document.querySelector('.booking_details')


container.innerHTML = `

            <div class="d-flex justify-content-between border-bottom m-3 p-2">
                <div class="fw-bolder">
                    Your Booking
                </div>
                <div class="text-muted fw-bold">
                    ONE WAY
                </div>
            </div>
            <div class="border-bottom m-3">
                <div class="d-flex  mb-4">
                    <div class="fs-4 text-muted">
                        <i class="fa-solid fa-bus"></i>
                    </div>
                    <div class="ms-3">
                        <div class="fw-bolder fs-6">
                            ${data.title}
                        </div>
                        <div class="text-muted ">
                            ${data.type}
                        </div>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="fs-4 text-muted">
                        <i class="fa-solid fa-clock mt-4"></i>
                    </div>
                    <div class="d-flex justify-content-between w-100 ms-3 text-center">
                        <div>
                            <div class="text-muted">
                                28 jul
                            </div>
                            <div class="fw-bold fs-6">
                               ${data.pickuptime}
                            </div>
                            <div class="text-muted">
                                ${data.from}
                            </div>
                        </div>
                        <div class="mt-4">
                            ${data.takinghrs}
                        </div>
                        <div>
                            <div class="text-muted">
                                29 jul
                            </div>
                            <div class="fs-6 fw-bold">
                                ${data.droptime}
                            </div>
                            <div class="text-muted">
                                ${data.to}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-bottom m-3">
                <div class="d-flex mb-4">
                    <div class="fs-4">
                        <i class="fa-solid fa-location-dot text-muted"></i>
                    </div>
                    <div class="ms-3">
                        <div class="fw-bolder">
                            Pick-Up
                        </div>
                        <div class="text-muted">
                            ${data.from}
                        </div>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="fs-4">
                        <i class="fa-solid fa-location-dot text-muted"></i>
                    </div>
                    <div class="ms-3">
                        <div class="fw-bold">
                            Drop off
                        </div>
                        <div class="text-muted">
                           ${data.to}
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex m-3 border-bottom">
                <div class="fs-4 text-muted">
                    <i class="fa-regular fa-user"></i>
                </div>
                <div class="ms-3 mb-3">
                    <div class="fw-bold">Travelers</div>
                    <div class="text-capitalize">${travelerData[0].name} <b class="text-muted">(M|23)</b> </div>
                    <div class="text-muted">${travelerEmail}| ${contactNo} </div>
                </div>
            </div>
            <div class="m-3">
                <div class="d-flex justify-content-between m-2">
                    <div class="fw-bold">
                        price/seat
                    </div>
                    <div>
                       ${data.price}
                    </div>
                </div>
                <div class="d-flex justify-content-between m-2">
                    <div class="fw-bold">
                        Tax
                    </div>
                    <div>
                        40
                    </div>
                </div>
                <div class="d-flex justify-content-between m-2">
                    <div class="fw-bold">
                        Total Amount
                    </div>
                    <div>
                       ₹ ${totalAmount}
                    </div>
                </div>
            </div>

`
//performing upi validation

const upi_field = document.getElementById('upi')
const amount_field = document.getElementById('amount')

const upiError = document.querySelector('.upi_error')
const amountError = document.querySelector('.amount_error')

const amount_container = document.getElementById('input_field')
const verifyBtn = document.getElementById('verifyBtn')
const payBtn = document.getElementById('payBtn')

const upi_regex = /^[\w.-]+@[\w.-]+$/

verifyBtn.addEventListener('click', () => {
    if (upi_field.value == '') {
        upiError.innerHTML = '*required'
        upi_field.style.border = '1px solid red'
    } else if (upi_regex.test(upi_field.value) === false) {
        upiError.innerHTML = 'Please enter valid UPI'
        upi_field.style.border = '1px solid red'

    } else {
        upi_field.style.border = '1.5px solid green'
        amount_container.style.display = 'block'
        upiError.innerHTML = ''
        amount_field.value = totalAmount
        verifyBtn.style.display = 'none'
        payBtn.style.display = 'inline'
        payBtn.addEventListener('click', () => {
            var pnrNo = Date.now()

            const bookingId = Math.floor(Math.random() * 66666)
            // console.log(bookingId)

            for (let key of travelerData) {
                key["pnrNo"] = pnrNo
                key['BookingID'] = bookingId
                key['BusDetail'] = [data]
                key['totalAmount'] = totalAmount
                pnrNo += 1
            }

            // travelerData.push(data)
            localStorage.setItem('BookingDetail', JSON.stringify(travelerData))

        })
    }
})

//validation

let card_number = false
let card_name = false
let month = false
let year = false
let cvv = false

const validateCardNo = () => {
    const cardNoValue = document.getElementById('card_number').value
    const cardNo_regex = /^[\d]{12}$/
    const card_error = document.getElementById('cardNo_error')

    if (cardNoValue == '') {
        card_error.innerHTML = '*required.'
    } else if (cardNo_regex.test(cardNoValue) === false) {
        card_error.innerHTML = '*Please enter 12 valide number'
    } else {
        card_error.innerHTML = ""
        card_number = true
        ValidateCvv()
    }
}

const validateCardName = () => {
    const cardName = document.getElementById('nameOfCard').value
    const cardName_regex = /^[a-zA-Z ]*$/
    const cardname_error = document.getElementById('cardName_error')

    if (cardName == '') {
        cardname_error.innerHTML = '*required.'
    } else if (cardName_regex.test(cardName) === false) {
        cardname_error.innerHTML = '*Please enter valide card name.'
    } else {
        card_name = true
        cardname_error.innerHTML = ''
        ValidateCvv()
    }
}

const validateMonth = () => {
    const getmonth = document.getElementById('month').value
    const month_error = document.getElementById('month_error')
    if (getmonth == 'Month') {
        month_error.innerHTML = '*required.'
    } else {
        month_error.innerHTML = ''
        month = true
        ValidateCvv()
    }
}

const ValidateYear = () => {
    const getYear = document.getElementById('year').value
    const year_error = document.getElementById('year_error')
    console.log(getYear)
    if (getYear == '') {
        year_error.innerHTML = '*required.'
    } else {
        year_error.innerHTML = ''
        year = true
        ValidateCvv()

    }

}

const ValidateCvv = () => {
    const getCvv = document.getElementById('cvv').value
    const cvv_error = document.getElementById('cvv_error')
    const cvv_regex = /^[\d]{3}$/

    if (getCvv == '') {
        cvv_error.innerHTML = '*required.'
    } else if (cvv_regex.test(getCvv) === false) {
        cvv_error.innerHTML = "*Please enter valide CVV"
    } else {
        cvv_error.innerHTML = ''
        cvv = true
    }
    if (card_number && card_name && month && year && cvv) {
        const btn = document.getElementById('payNowBtn')
        console.log('vbnm')
        btn.disabled = false
    }
}
