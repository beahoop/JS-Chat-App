
const BASE_URL = 'https://tiny-taco-server.herokuapp.com/api/v1/chats'

const edit = {
    id: "",
    text: "",
    username: "",
}


////////////////////////////

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


function msgClick() {
     msgText = document.getElementById('messInput').value;
     guestName = document.getElementById('userInput').value;
     edit.text = msgText;
     edit.username = guestName;
     document.getElementById('messInput').value = "";
     document.getElementById('userInput').value = "";
     sendMessage();
  };

function sendMessage() {
    fetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(edit),
    })
      .then(response => {
      if(!response.ok){
        throw new Error ('Bad Post request');
      }
      return response.json()
      })
    .then(data => console.log('Success. Message created!'))
    .catch(error => console.log('Error:', error))
    .finally('I am always going to fire!');
};
/////////////////////////////////////////PUT

// grab the id.value of button click
// prompt me what is your new message
// prompt


function editMsg() {
    const editPrompt = prompt('Enter new message');
    const editUser = prompt('Enter Username');
    const editId = document.querySelector(".editBtn").value;
    // console.log(editId);
     msgText = document.getElementById('messInput').innerHTML;
     guestName = document.getElementById('userInput').innerHTML;
     msgText = editPrompt;
     guestName = editUser;
     // sameID = editId;
     // document.getElementById('displayMessage').innerHTML = msgText;
     // edit.id = sameID;
     edit.text = msgText;
     edit.username = guestName;
     editMessage();
  };

function editMessage(data) {
const btnValue = document.querySelector(".editBtn").value;
let editBtn = prompt(`To confirm your edit request type post number`)
  fetch(`${BASE_URL}/${editBtn}/`,{
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
//
// const bye = {
//     // id: "",
//     text: "",
//     username: "",
// }
//





// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, a pop-up with "Element clicked!" will
// appear.
// numberButtons.forEach(function (btn) {
//     btn.addEventListener('click', setNumsVal)
//     //adding in the eventlister so the buttons will respond to the user's actions and show in the cal screen
// });
// const deleteButtons = document.querySelector('.deleteBtn');
// deleteButtons.forEach(function (btn) {
//     btn.addEventListener('click', deleteMessage)
//   });
//

function deleteMessage() {
  // const btnDelete = document.querySelector(".deleteBtn").value
  // let btnDelete = document.querySelector(".deleteBtn").value;
  // let deleteID = prompt(`To confirm your delete request type ${btnDelete}`)
  let deleteID = prompt(`To confirm your delete request type post number`)
  fetch(`${BASE_URL}/${deleteID}/`, {
  method: 'DELETE',
})
.then(response => response.json())
.then(data => console.log('data', data))
.then(response => {
  if (!response.ok) {
    throw new Error('Bad delete request');
  }
})
.catch(error => console.log('Error:', error))
.finally(() => console.log("Yes, it worked."));
}

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
