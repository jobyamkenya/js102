'use strict'

let userStatus = prompt('What is your user status status?','');

if (userStatus == "Admin") {
	
	let adminPassword = prompt('Enter Admin Password', '');
	if (adminPassword == "123") {
		alert("Welcome");
	} else{
		alert('Canceled');
	}

}