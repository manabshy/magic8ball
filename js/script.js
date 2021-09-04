console.log('Hello World !!!');

let myVar = 10;

console.log('myVar:', myVar);

var myArray = ['Apple', 'Banana'];

var myButtons = ['Submit', 'Chat', 'Learn More'];

myButtons.forEach((button, index) => console.info('Button' + index + ':' + button));


function chat() {

  alert('Please wait for your invitation to the chatroom');
}

function submitme() {

  confirm('Do you wish to submit ?');
  window.location.href = 'https://bbc.co.uk';
}


mychatbutton = document.getElementById('chat');

console.log('Id of Chat has:', mychatbutton);


mychatbutton.addEventListener("click", chat);


mysubmitbutton = document.getElementById('submit');

mysubmitbutton.addEventListener("click", submitme);


