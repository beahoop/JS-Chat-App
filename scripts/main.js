(function () {
  'use strict';

const BASE_URL = 'https://tiny-taco-server.herokuapp.com/api/v1/chats'

// fetch(BASE_URL)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
//   .finally(() => console.log("This always runs"));


  const generateUser = (data) => {
    const source = document.getElementById("usertext").innerHTML;
    const template = Handlebars.compile(source);
    const context = data;
    const html = template(context);
    document.querySelector(".message").innerHTML = html;
  }

setInterval(()=>{ fetch(BASE_URL)
    .then(response => response.json())
    .then(data => generateUser({user:data}));}, 1000);








})();

///html css and js
///input for message
///input for username
///////make them requried before posting
///alert WHO ARE YOU .. store username


///need a btn for post method .... to create new message
//delete btn that allows you to delete a message ... trash can
//each message will have its own id, you need to have this id with the delte button

//Edit your message... put method

///chat box, needs to show messages
//sort array by a created date,
