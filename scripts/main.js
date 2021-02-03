
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
  };


setInterval(() => { fetch(BASE_URL)
    .then(response => response.json())
    .then(data => generateUser({user:data}));}, 1000);
    // data.reverse() ...then make {user:data}

//////////////////////////////////////POST
const todo = {
   text: "",
     username: "",
   };

function msgClick() {
     msgText = document.getElementById('messInput').value;
     guestName = document.getElementById('userInput').value;
     document.getElementById('displayMessage').innerHTML = msgText;
     todo.text = msgText;
     todo.username = guestName;
     sendMessage();
  };

function sendMessage(data) {
    fetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(todo),
    })
      .then(response => {
      if(!response.ok){
        throw new Error ('Bad Post request');
      }
      return response.json()
      })
    .then(data => console.log('Success. Todo created!'))
    .catch(error => console.log('Error:', error))
    .finally('I am always going to fire!');
};
/////////////////////////////////////////PUT

// grab the id.value of button click
// prompt me what is your new message
// prompt

const edit = {
    // id: "",
    text: "",
    username: "",
}

// getID = document.querySelector(data.id);


function editMsg() {
    const editPrompt = prompt('Enter new message');
    const editUser = prompt('Enter Username');
     msgText = document.getElementById('messInput').value;
     guestName = document.getElementById('userInput').value;
     msgText = editPrompt;
     guestName = editUser;
     // document.getElementById('displayMessage').innerHTML = msgText;
     edit.text = msgText;
     edit.username = guestName;
     editMessage();
  };

function generateLog(data) {
  for (let i = 0; i < data.length; i++) {
  console.log(data[i].id);
}
};
function getUser() {
    return fetch(BASE_URL)
        .then(response => response.json())
        .then(data => generateLog(data));
};

getUser();

function editMessage(data) {

  fetch(`${BASE_URL}/[i]/`,{
  method: 'PUT',
  headers: {
    'Content-Type':'application/json',
  },
  body: JSON.stringify(edit),
})
.then(response => response.json())
.then(data => {
  console.log('data', data);
});
};





/////////////////////////////////DELETE
function deleteMsg() {
     msgText = document.getElementById('messInput').value ;
     guestName = document.getElementById('userInput').value;
     document.getElementById('displayMessage').innerHTML = msgText;
     todo.text = msgText;
     todo.username = guestName;
     sendMessage();
  };

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
