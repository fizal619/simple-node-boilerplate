// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML);

let button = document.createElement("button");

document.body.append(button);

// const makeReservation = () => {
// fetch('http://localhost:3000/reservations', {
//       headers: 'application/json',
//       method: 'POST',
//   })
// }

const getReservation = () => {
  fetch("http://localhost:3000", {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  })
    .then(resp => resp.json())
    .then(console.log);
};
  getReservation();
