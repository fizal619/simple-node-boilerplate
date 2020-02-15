const app = document.getElementById('app')
const time = document.getElementById('time')
let obj = {};


///eventListeners
document.getElementById('time').onchange = function (event) {
  // access text property of selected option
  console.log(event.target.value);
  obj["time"] = parseInt(event.target.value)
}


document.getElementById('table').onchange = function (event) {
  // access text property of selected option
  console.log(event.target.value);
  obj["slot"] = event.target.value
}


document.getElementById('name').onchange = function (event) {
  // access text property of selected option
  console.log(event.target.value);
  obj["name"] = event.target.value
}


document.getElementById('submit').onclick = function() {
  makeReservation()
  console.log(obj)
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
  .then(console.log(userObj));
};


//create func to check if table is reserved 
//if reserved return table reserved 
//and remove that slot from option 
const checkIfReserved = () => {
  // debugger
  let tables = Array.from(document.getElementById('table'))
  console.log(tables) 
  document.getElementById('table').addEventListener("submit", function(event) {
    event.preventDefault() 
    tables.forEach(table => {
      console.log(table)
      if(table == event.target.id ) {
        console.log('reserved') 
      }
      else {
        console.log(table)
      }
    })
  })
}
checkIfReserved() 

//before submit check if the table is reserved if it is alert(reserved)
// make post request to submit reservation to db and create with div(table) 


const makeReservation = () => {
  debugger
  console.log('post')
  checkIfReserved 
  fetch('http://localhost:3000/reservations/create',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(console.log(obj));
    
  }  
  
  addTablesToDom = () => { 
    let tableDiv = document.getElementById('tables-row')
    let div = document.createElement('div')
        console.log(div.append(tableDiv))
          //add to the dom 
      } 
      addTablesToDom()

