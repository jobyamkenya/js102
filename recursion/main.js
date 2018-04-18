'use strict'

 let factNum = prompt("Enter a number", 5);

 function facto(factNum){
 	if (factNum === 1) {
 		return 1;
 	}
 	return factNum * facto(factNum - 1);
 }

 alert(facto(factNum));