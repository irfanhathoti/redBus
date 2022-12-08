// /* Input Search From Focus-In/Out */
// $(".inputForm").focusin(function(){
// 	$(this).prev("label").addClass("inputLabel-focusIn");
// });

// // Input Search From Focus-Out */
// $(".inputForm").focusout(function(){
// 	var inputForm = $(this).val();

// 	if (inputForm.length > 0) {
// 		$(this).prev("label").addClass("inputLabel-focusIn");
// 	} else {
// 		$(this).prev("label").removeClass("inputLabel-focusIn");
// 	}
// });

// /* Input Onward/Reture Date Focus-In/Out */
// $("#input-label-onward-date, #input-label-return-date").focusin(function(){
// 	$(this).attr("type", "date");
// });

// // Input Onward/Reture Date Focus-Out */
// $("#input-label-onward-date, #input-label-return-date").focusout(function(){
// 	var inputFormDate = $(this).val();

// 	if (inputFormDate.length > 0) {
// 		$(this).attr("type", "date");
// 	} else {
// 		$(this).attr("type", "text");
// 	}
// });

// /* Pass Input-From's Locations to Input field */
// // From Locations Data
// var inputFromList = [
// 	{ fromLocation : "Gurgaon"},
// 	{ fromLocation : "Delhi"},
// 	{ fromLocation : "Jaipur"},
// ];

// var optionFrom;
// var inputFromDatalist = $("#input-from-list");

// for (var i = 0; i < inputFromList.length; i++) {
// 	optionFrom = $("<option></option>");
// 	optionFrom.attr("value", inputFromList[i].fromLocation);
// 	inputFromDatalist.append(optionFrom);
// }

// /* Pass Input-To's Locations to Input field */
// // To Locations Data
// var inputToList = [
// 	{ toLocation : "Gurgaon"},
// 	{ toLocation : "Delhi"},
// 	{ toLocation : "Jaipur"}
// ];

// var optionTo;
// var inputToDatalist = $("#input-to-list");

// for (var i = 0; i < inputToList.length; i++) {
// 	optionTo = $("<option></option>");
// 	optionTo.attr("value", inputToList[i].toLocation);
// 	inputToDatalist.append(optionTo);
// }

// // Data Filter
// $("#input-label-from").change(function(){
// 	var dataSelect = $(this).val();
// 	console.log(dataSelect);

// 	$("#input-to-list").find("option[value='"+dataSelect+"']").remove();
// });


//getting the email from the local storage
const getEmail = localStorage.getItem("email")

//get user element
const getUser = document.getElementById('user')


const getUserName = document.getElementById('user-name')

const getSignUp = document.getElementById('signup')

const userLogOut = document.getElementById('logout')

const my_Booking = document.getElementById('myBooking')

console.log(getUser)
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
	window.location = "./home.html"
}

//getting search-bus button

// const search_bus = document.getElementById("searchBus")
// console.log(search_bus)

// search_bus.addEventListener('click', searchBus)


function search_Bus() {
	const getFrom = document.getElementById('input-label-from').value
	const getTo = document.getElementById('input-label-to').value
	const getDate = document.getElementById('input-label-onward-date').value
	localStorage.setItem('from', getFrom)
	localStorage.setItem('to', getTo)
	localStorage.setItem('date', getDate)
	if( getFrom =="" ){
		alert('Please enter the from city')

		console.log("hello")
	} else if(getTo==""){
		alert('please enter the drop city')
	}else{
		location.href = '../BusDetails/busdetail.html'
	}
}






