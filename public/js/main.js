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

// const tables = document.getElementById('tables-row')
//     tables.addEventListener("submit", function(event) {
//       event.preventDefault();
      const makeReservation = () => {
        fetch('http://localhost:3000/reservations',{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( 
            {
              obj
            })
          })
          .then(resp => resp.json())
          .then(console.log)
        }
        makeReservation()

