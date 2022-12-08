var getData = localStorage.getItem("data")


var obj = JSON.parse(getData)


var getElement = document.querySelector(".bookDetails")
console.log(getElement)


getElement.innerHTML = `

<div>
    <div class="busBackground">
        <span class = " text-muted fs-3"> ${obj.from}</span>
        <i class="fa-solid fa-arrow-right text-danger fs-3"></i>
        <span class = "text-muted fs-3">${obj.to}</span>
        <div class= "fs-5">  <i class="fa-solid fa-bus-simple "></i>  <span> ${obj.title} </span>  </div>
        <div class= 'text-muted fw-lighter fs-5'> ${obj.type} </div>
        <span class='fw-bold fs-5'> Date : </span>
        <span class= 'text-muted fw-lighter fs-5'> ${obj.date} </span>
    </div>
    <div class = "d-flex border p-2  justify-content-between rounded"> 
        <div>
            <h3> ${obj.pickuptime} </h3>
            <h5> ${obj.from} </h5>
        </div> 
        <div class="text-center">
            <span class = " fs-3 fw-semibold ">--------------------</span> <i class="text-danger fs-3 fa-solid fa-van-shuttle"></i>
            <div> ${obj.takinghrs} </div>
        </div>
        <div>
            <h3> ${obj.droptime} </h3>
            <h5> ${obj.to} </h5>
        </div>
    </div>
</div>
`



//Add Traveler 


const add_traveler = document.getElementById('addTraveler')

add_traveler.addEventListener('click', handleNoTraveler)



var travelerData = []


// const travelerData = []
let count = 0
let getPrice = obj.price
localStorage.setItem('price',getPrice)
let totalPrice = 2
console.log(getPrice)
const getTotalPriceElem = document.querySelector('.totolPrice')


function handleNoTraveler() {
    const travelerName = document.querySelector('.name')
    const travelarAge = document.querySelector('.age')
    const travelerGender = document.querySelector('#floatingSelect').value


    // const passenger = document.getElementById("passengers")
    // const getPriceElement = document.getElementById("price")
    // getPriceElement.innerHTML = obj.cost


    console.log(travelerGender)

    const regName = /^[a-zA-Z\s]{3,30}$/
    const regAge = /^[\d]{2}$/

    const id = Date.now()
    if (travelerData.length <= 5) {
        if (travelerName.value == "") {
            travelerName.style.border = '1.5px solid red'

        } else if (regName.test(travelerName.value) === false) {
            travelerName.style.border = '1.5px solid red'
        }
        else {
            travelerName.style.border = '1.5px solid green'
        }
        if (travelarAge.value == '') {
            travelarAge.style.border = '1.5px solid red'
        }
        else if (regAge.test(travelarAge.value) === false) {
            travelarAge.style.border = '1.5px solid red'
        }
        else {
            travelarAge.style.border = '1.5px solid green'
            if (travelerName.value != '' && regName.test(travelerName.value) === true) {
                var getTableBody = document.getElementById('tablebody')
                const createTr = document.createElement('tr')
                createTr.setAttribute('id', id)

                getTableBody.appendChild(createTr)
                console.log(getTableBody)

                createTr.innerHTML = `
                <td> <button class='btn' onclick="removeTraveler(${id})")> <i class="fa-solid fa-xmark"> </i></button>  </td>
                <td  scope="col" class="text-capitalize" > ${travelerName.value} </td>
                <td  scope="col"> ${travelarAge.value} </td>
                <td  scope="col"> ${travelerGender} </td>
                <td  scope="col"> ${getPrice} </td>
                `



                travelerData.push({ id: id, name: travelerName.value, age: travelarAge.value, gender: travelerGender })

                //after adding the travel the input field will be reset

                travelarAge.value = ''
                travelerName.value = ''
                travelarAge.style.border = '1px solid grey'
                travelerName.style.border = '1px solid grey'





                if (count < 20) {
                    count += 1;
                    totalPrice = getPrice * count
                    localStorage.setItem('totalPrice', totalPrice)
                    getTotalPriceElem.innerHTML = `Total: ₹<b> ${totalPrice} </b>`
                    console.log(totalPrice)
                }


            }
        }
    }
    localStorage.setItem('travelerdata', JSON.stringify(travelerData))
   
}

const removeTraveler = (id) => {
    const getTraveler = document.getElementById(id)
    if (count >= 1) {
        count -= 1;
        totalPrice = getPrice * count
        getTotalPriceElem.innerHTML = `Total: ₹ <b> ${totalPrice} </b>  `
        localStorage.setItem('totalPrice', totalPrice)
        getTraveler.remove()
        console.log('hello')
    }
}


const getModaleElem = document.getElementById('bookNow')

getModaleElem.addEventListener('click', openModal)


function openModal() {



    const getEmail = document.querySelector('.email')
    const getContactNo = document.querySelector('.contactNo')
    const getAlternateNo = document.querySelector(".alternateNo")


    const travelerName = document.querySelector('.name')
    const travelarAge = document.querySelector('.age')

    //assign the regex pattren
    const email_regex = /^[a-z0-9-.]+@(?=.*gmail)([a-z])+\.(?=.*com)([a-z]){2,3}$/
    const regContactNo = /^[\d]{10}$/
    const regAlternateNo = /^[\d]{10}$/


    if (getEmail.value == "") {
        getEmail.style.border = '1.5px solid red'
    } else if (email_regex.test(getEmail.value) === false) {
        getEmail.style.border = '1.5px solid red'
    }
    else {
        getEmail.style.border = '1.5px solid green'
        localStorage.setItem('travelerEmail',getEmail.value)
    }


    if(travelerData.length == 0){
        travelerName.style.border = '1.5px solid red'
        travelarAge.style.border = '1.5px solid red'
    }

    if (getContactNo.value == "") {
        getContactNo.style.border = '1.5px solid red'
    } else if (regContactNo.test(getContactNo.value) === false) {
        getContactNo.style.border = '1.5px solid red'
    } else {
        getContactNo.style.border = '1.5px solid green'
        localStorage.setItem('contactNo',getContactNo.value)
    }
    if (getAlternateNo.value == '') {
        getAlternateNo.style.border = '1.5px solid red'
    } else if (regAlternateNo.test(getAlternateNo.value) === false) {
        getAlternateNo.style.border = '1.5px solid red'
    }
    
    else {
        getAlternateNo.style.border = '1.5px solid green'
        localStorage.setItem('alternateNo',getAlternateNo.value)
        if (getEmail.value != '') {
            if (getEmail.value.match(email_regex)) {
                if (getContactNo.value != '') {
                    if (getContactNo.value.match(regContactNo)) {
                        getModaleElem.setAttribute("data-bs-toggle", "modal")
                    }
                }
            }
        }
    }
}


