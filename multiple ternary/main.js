'use strict'
/* convert code below into multiple ternary operations
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
 */
 let login = prompt('what is your position', '');

 let message = (login == 'Employee') ? alert('Hello') :
              (login == 'Director') ? alert('Greetings') :
              (login == '') ? alert('No Login') : alert('');