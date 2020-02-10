// jest won't error out on DOM calls.
//console.log(document.querySelector('p').innerHTML);

const getReservations = fetch('http://localhost:3000/reservations')
  .then(response => response.json())
  .then(data => {
    console.log('Successfully loaded reservations:', data);
    let upcoming = '';
    data.map(el => (upcoming += '-' + ' ' + el.name + ' at ' + el.slot + ' '));
    document.getElementById('upcoming').innerHTML = upcoming;
  });
