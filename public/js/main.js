
const app = document.getElementById('app')
const timo = document.getElementById('time')

const obj = {}


document.getElementById('time').onchange = function (event) {
  // access text property of selected option
  console.log(event.target.value);
  obj["Time"] = event.target.value
}


document.getElementById('table').onchange = function (event) {
  // access text property of selected option
  console.log(event.target.value);
  obj["Table"] = event.target.value
}

document.getElementById("name").addEventListener('submit', functSubmit);

function functSubmit(event) {
  event.preventDefault();
  var msg = document.getElementById("input1").value;
  obj["Name"] = msg;
  console.log(obj);
  
}



const getReservation = () => {
  fetch("http://localhost:3000/reservations", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then(resp => resp.json())
    .then(console.log);
};


  
  // call createTimes function to remove timeslots from the ones taken and display them in front-end
  // export const reservationData = data

