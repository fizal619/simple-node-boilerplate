const app = document.getElementById('app')
const time = document.getElementById('time')

const obj = {}


///eventListeners
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

document.getElementById('name').addEventListener('submit', functSubmit);


function functSubmit(event) {
  event.preventDefault();
  var msg = document.getElementById("input1").value;
  console.log(msg);
  console.log(obj);
  obj["Name"] = event.target.value
}


///get requests to retrieve reservations 
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


//creat func to check if table is reserved 
//if reserved return table reserved 
//and remove that slot from option 

const checkIfReserved = () => {
  
}

//before submit check if the table is reserved if it is alert(reserved)
// make post request to submit reservation to db and create with div(table) 
const table = document.getElementById('table').value 
console.log(table)
const tables = document.getElementById('tables-row')
  if(table !== )
    tables.addEventListener("submit", function(event) {
      event.preventDefault();
    fetch('http://localhost:3000/toys',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify( 
      {
        "name": form.name.value,
        "image": form.image.value,
        "likes": 0
      })
    })
    .then(response => response.json())
    .then(addToyCard)
  })   


