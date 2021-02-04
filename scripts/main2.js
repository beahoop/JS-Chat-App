const BASE_URL = 'https://tiny-taco-server.herokuapp.com/api/v1/chats'

const messageObject = {
  text: "",
  username: "",
}

let getId = "";

const createUser = (data) => {
  const source = document.getElementById("usertext").innerHTML;
  const template = Handlebars.compile(source);
  const context = data;
  const html = template(context);
  document.querySelector(".message").innerHTML = html;
};

setInterval(() => {
  fetch(BASE_URL)
    .then(response => response.json())
    .then(data => createUser({
      user: data
    }));
}, 1000);


// let guestName = "";
// let msgText = "";

// function nameClick(){
//   guestName = document.getElementById('nameWindow').value;
//   document.getElementById('displayName').innerHTML = guestName;
//   todo.username = guestName;
//   // window.alert(guestName);
// }

function msgClick() {
  msgText = document.getElementById('messageWindow').value;
  guestName = document.getElementById('nameWindow').value;
  document.getElementById('displayMessage').innerHTML = msgText;
  document.getElementById('displayName').innerHTML = guestName;
  messageObject.text = msgText;
  messageObject.username = guestName;
  document.getElementById('messageWindow').value = "";
  document.getElementById('nameWindow').value = "";
  sendMessage();
  // window.alert(msgText);
}


//POST - This works



function sendMessage() {
  fetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageObject),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Bad post request');
      }
      return response.json()
    })
    .then(data => console.log('Success. Todo created!'))
    .catch(error => console.log('Error:', error))
    .finally('I am always going to fire!');
}


function deleteMessage() {
  getId = document.getElementById('deleteWindow').value;
  fetch(`${BASE_URL}/${getId}`, {
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




//PUT - this works

function editMessage() {
  getId = prompt('ID number of message to edit');
  messageObject.username = prompt("User name");
  messageObject.text = prompt("Input new message text.");
  fetch(`${BASE_URL}/${getId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageObject),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Bad post request');
      }
      return response.json()
    })
    .then(data => console.log('Success. Todo created!'))
    .catch(error => console.log('Error:', error))
    .finally('I am always going to fire!');
}







// function triggerEdit() {
//   fetch(`${BASE_URL}/${getId}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(messageObject),
//     })
//     .then(response => response.json())
//     .then(data => console.log('data', data))
// }
