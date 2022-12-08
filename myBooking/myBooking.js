const myBooking = JSON.parse(localStorage.getItem('BookingDetail'))

let dataSet = []



myBooking.map((value) => {
    let { name, id, age, gender, pnrNo, BookingID,totalAmount, BusDetail: [{ title, from, to, type, date, pickuptime, droptime, ac, rating }] } = value
    let item = [name, age, gender, title, BookingID, from, to, [type], date, pnrNo,totalAmount, rating,'<button onClick="add()">gf</button>']
    dataSet.push(item);
})

$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: 'Name' },
            { title: 'Age' },
            { title: 'Gender' },
            { title: 'Bus_Name' },
            { title: 'BookingID' },
            { title: 'Pick Up' },
            { title: 'Drop of' },
            { title: 'Type' },
            { title: 'Date' },
            { title: 'PNR' },
            { title: 'Amount' },
            { title: 'Rating' },
            // { title: 'Give Rating' },
        ],
    });
});



var stars = document.getElementsByClassName('fa-star');
var emoji = document.getElementById("iemoji");
console.log(stars)



const submitRating = document.getElementById('submit_rating')

// submitRating.addEventListener('click')


stars[0].onclick = function () {
    console.log('jhsq')
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#e4e4e4";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(0)"
    submitRating.style.display = 'inline'


}

stars[1].onclick = function () {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-30px)";
    submitRating.style.display = 'inline'

}

stars[2].onclick = function () {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-62px)";
    submitRating.style.display = 'inline'

}

stars[3].onclick = function () {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-95px)";
    submitRating.style.display = 'inline'

}
stars[4].onclick = function () {
    stars[0].style.color = "#ffd93b";
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#ffd93b";
    emoji.style.transform = "translateX(-125px)";
    submitRating.style.display = 'inline'
}

const redirectToHome = () => {
    location.href = '../Home/home.html'
}
