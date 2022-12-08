
// storing the all data in the array of object

var BookBus = [{
    id: 1,
    title: "Zabbar Travel",
    ac: "Non A/C",
    cost: "600Rs",
    from: "Hyderabad",
    to: "Chennai",
    rating: "4/5",
    peopleLike: "232",
    seatAvailable: "14",
    takinghrs: "6:00hrs",
    pickuptime: "3:30PM",
    droptime: "10:30PM",
    type: "A/c Sleeper (2+1)",
    date: "2022-08-01",
    price: 600

},
{
    id: 2,
    title: " VRL",
    ac: "AC",
    cost: "Rs.1,099",
    from: "Bangaluru",
    to: "Chennai",
    rating: "4.2/5",
    peopleLike: "678",
    seatAvailable: "21",
    takinghrs: "6:00hrs",
    pickuptime: "11:30PM",
    type: "A/c Sleeper (2+1)",
    droptime: "6:30AM",
    date: "2022-08-02",
    price: 1099

},
{
    id: 3,
    title: "Volvo ",
    ac: "AC",
    cost: "Rs.999",
    from: "Bangaluru",
    to: "Hydrabad",
    rating: "4/5",
    peopleLike: "432",
    seatAvailable: "12",
    takinghrs: "6:00hrs",
    pickuptime: "10:00PM",
    droptime: "4:00AM",
    type: "A/c Sleeper (2+1)",
    date: "2022-08-03",
    price: 999


}
    ,
{
    id: 4,
    title: "TranzKing Travel ",
    ac: "AC",
    cost: "Rs.1100",
    price: 1100,
    from: "Bangaluru",
    to: "Chennai",
    rating: "4.1/5",
    peopleLike: "324",
    seatAvailable: "12",
    takinghrs: "6:00hrs",
    pickuptime: "10:00PM",
    droptime: "4:00AM",
    type: "A/c Sleeper (2+1)",
    date: "2022-08-04"

},
{
    id: 5,
    title: "VRL ",
    ac: "Non Ac",
    cost: "Rs.540",
    from: "Bangaluru",
    to: "Chennai",
    rating: "3.7/5",
    peopleLike: "140",
    seatAvailable: "21",
    takinghrs: "6:00hrs",
    pickuptime: "10:00PM",
    droptime: "4:00AM",
    type: "mini Sleeper (2+1)",
    date: "2022-08-05",
    price: 540

},
{
    id: 6,
    title: " Narayani Travels",
    ac: "AC",
    cost: "Rs.1100",
    from: "Bangaluru",
    to: "Chennai",
    rating: "4.1/5",
    peopleLike: "356",
    seatAvailable: "12",
    takinghrs: "6:00hrs",
    pickuptime: "10:00PM",
    droptime: "4:00AM",
    type: "A/c Sleeper (2+1)",
    date: "2022-08-06",
    price: 1100

},
{
    id: 7,
    title: "Trivandrum Travel ",
    ac: "AC",
    cost: "Rs.1100",
    from: "Bangaluru",
    to: "Chennai",
    rating: "4.1/5",
    peopleLike: "324",
    seatAvailable: "12",
    takinghrs: "6:00hrs",
    pickuptime: "10:00PM",
    droptime: "4:00AM",
    type: "A/c Sleeper (2+1)",
    date: "2022-08-07",
    price: 1100

}
    , {
    id: 8,
    title: "TranzKing Travel ",
    ac: "AC",
    cost: "Rs.1100",
    from: "Bangaluru",
    to: "Chennai",
    rating: "4.1/5",
    peopleLike: "324",
    seatAvailable: "12",
    takinghrs: "6:00hrs",
    pickuptime: "10:00PM",
    droptime: "4:00AM",
    type: "A/c Sleeper (2+1)",
    date: "2022-08-08",
    price: 1100
},

]

//getting the container of the bus Detail 
const getBook = document.querySelector(".bookbus")

// var card = ''



showBookbus(BookBus)


function showBookbus(CurElme) {

    getBook.innerHTML = ''
    for (let i = 0; i < CurElme.length; i++) {
        getBook.innerHTML +=
            ` 
            <div class="card-group">
            <div class="card">
           <div class="card-body">
           
           <div class = 'd-flex justify-content-between'>
           <div>
           <h5 class="card-title"> <span>  <i class="fa-solid fa-bus-simple"></i> </span> ${CurElme[i].title}  </h5>
           <p class="card-text ">  <i class="fa-solid fa-star-half-stroke"></i> ${CurElme[i].rating}  <span class = "text-muted">(${CurElme[i].peopleLike}) </span>
           </div>
           <div > <div class ="text-muted" > ${CurElme[i].ac} </div>
           <div> ${CurElme[i].cost} </div>
            </div>

           </div>
           <p class="fw-bold card-text text-center "><small> ${CurElme[i].takinghrs}  </small></p>
           <div> <b> Date: </b> ${CurElme[i].date} </div>
           <hr>
           <div class = "d-flex justify-content-between ">
           <div>
           <div class = "text-muted fw-lighter fromName"> From:${CurElme[i].from}</div>
           <div class = "text-muted fw-lighter"> ${CurElme[i].pickuptime} </div>
           </div>
           <div> <div class = "fw-lighter text-muted ToName">To: ${CurElme[i].to} </div>
           <div class="text-muted fw-light"> ${CurElme[i].droptime} </div> 
            </div>
           </div>
           <br>
           <button class = "btn btn-outline-danger btn-sm" onclick = "booknow(${CurElme[i].id} )" id = "booknow" >Book Now</button>
           </div>
         </div>
        </div>`
    }
}




//getting the email from the local storage
const getEmail = localStorage.getItem("email")

//get user element
const getUser = document.getElementById('user')


const getUserName = document.getElementById('user-name')

const getSignUp = document.getElementById('signup')

const userLogOut = document.getElementById('logout')

const my_Booking = document.getElementById('myBooking')




//checking user login or not 
if (getEmail == null) {
    getUser.href = "../LogIn/login.html"
    userLogOut.style.display = 'none'
    my_Booking.style.display = 'none'
}
else {
    getUser.href = ""
    getUser.innerHTML = "Profile"
    const getname = getEmail.split('@')[0]
    getUserName.innerHTML = `Hi ${getname.toLocaleUpperCase()}`
    getSignUp.style.display = 'none'

    //creating a click event to the button
    userLogOut.addEventListener('click', logOutUser)

}

function logOutUser() {
    localStorage.removeItem('email')
    window.location = "./busDetail.html"
}

//getting search-bus button

const search_bus = document.getElementById("searchBus")

var newData = []

search_bus.addEventListener('click', function () {
    const getFrom = document.getElementById('floatingInput')
    const getTo = document.getElementById('floatingPassword')
    const getDate = document.getElementById('date')

    //geting label of the inpu field

    const labels = document.getElementsByTagName('label')

    const regex = /^[a-zA-Z]{3,}$/

    // search validation

    if (getFrom.value == '') {
        getFrom.style.border = '1px solid red'
        labels[0].style.color = 'red'
    } else if (regex.test(getFrom.value) === false) {
        getFrom.style.border = '1px solid red'
        labels[0].style.color = 'red'
    } else {
        getFrom.style.border = '1px solid green'
        labels[0].style.color = 'gray'
    }
    if (getTo.value == '') {
        getTo.style.border = '1px solid red'
        labels[1].style.color = 'red'
    } else if (regex.test(getTo.value) === false) {
        getTo.style.border = '1px solid red'
        labels[1].style.color = 'red'
    } else {
        getTo.style.border = '1px solid green'
        labels[1].style.color = 'gray'
        if (getFrom.value != '') {
            if (regex.test(getFrom.value) === true) {
                newData = BookBus.filter(x => (x.from.includes(getFrom.value)) && (x.to.includes(getTo.value)) && (x.date == getDate.value))
                if (this.value == '') {
                    showBookbus(BookBus)
                } else {
                    if (newData == '') {
                        getBook.innerHTML = ''

                    } else {
                        showBookbus(newData)

                    }
                }

            }
        }
    }
})








const booknow = (id, index) => {
    var btn = document.getElementById("booknow")
    console.log(btn)
    BookBus.filter(value => value.id == id).map((CurEl) => {
        localStorage.setItem("data", JSON.stringify(CurEl));
        console.log(CurEl)

    })
    if (getEmail == null) {
        location.href = "../LogIn/login.html"
        console.log("hllo")
    } else {
        location.href = '../Traveler/travelerDetail.html'
    }
}


//date validatin

$(document).ready(function () {
    var today_Date = new Date()
    var getmonth = today_Date.getMonth() + 1
    var getDate = today_Date.getDate()
    var getYear = today_Date.getFullYear()


    if (getmonth < 10) {
        getmonth = '0' + getmonth.toString()
    }
    if (getDate < 10) {
        getDate = '0' + getDate.toString()
    }
    var maxDate = getYear + '-' + getmonth + '-' + getDate

    const getDateElem = $('#date')

    getDateElem.val(maxDate)


    getDateElem.attr('min', maxDate)


})