// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML);

//Name of restaurant rendered on the front page
document.body.innerHTML = '<h1>Potayto Potahto Reservations</h1>';
getReservations();
