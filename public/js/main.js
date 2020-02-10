// jest won't error out on DOM calls.
//console.log(document.querySelector('p').innerHTML);

const getReservations = fetch('http://localhost:3000/reservations')
  .then(response => response.json())
  .then(data => {
    console.log('Successfully loaded reservations:', data);
    let upcoming = [];
    data.map(el =>
      upcoming.push(document.createTextNode(`${el.name} at ${el.slot}`))
    );
    upcoming.map(node => {
      let listItem = document.createElement('LI');
      listItem.appendChild(node);
      document.getElementById('upcoming').appendChild(listItem);
    });
  });
