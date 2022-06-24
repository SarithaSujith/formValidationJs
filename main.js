let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let errorMsg = document.getElementsByClassName('error');
let successIcon = document.getElementsByClassName('success-icon');
let failureIcon = document.getElementsByClassName('failure-icon');
let form = document.getElementById('form');

// will select all the div with classname error
//  the above can also be written like let a, b ,c; also with a function
// let id= (id)=> document.getElementById(id)
// let username = id("username"),
// email = id("email"),
// password= id("password");

// Eventlistners
form.addEventListener('submit', (e) => {
	// console.log(e)check to see the event target on form
	e.preventDefault();
  
	// errorMsg[1].innerHTML = "lsjnsufiundi"
  engine(username, 0, "Username cannot be blank")  //  here calling the function
  engine(email, 1, "Email cannot be blank")
  engine(password, 2, "Password cannot be blank")
});
	

// this function helps from keeping the code DRY
let engine= (id, serial, message)=>{                                                      // here id is the username from firstinput
  if (id.value.trim() === '') {
		errorMsg[serial].innerHTML = message; //errorMsg[0] is the first username input //[0]is changed to serial so taht can use for all three divs [1],[2]
		failureIcon[serial].style.opacity = 1; //coz we have in css opacity 0 initialised so that it will invisible
    successIcon[serial].style.opacity = 0  // this is to prevent the overlaping of the icons
	} else {
		errorMsg[serial].innerHTML = '';
    failureIcon[serial].style.opacity= 0     // this is to prevent the overlaping of the icons
		successIcon[serial].style.opacity = 1;
	}

}