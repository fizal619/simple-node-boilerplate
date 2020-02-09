// define your functions like this so they're testable
//any functions here are hoisted and available in main.js

const getReservations = () => {
  return fetch('http://localhost:3000/reservations')
    .then(res => res.json())
    .then(reservations => {
      console.log(reservations);
      const names = reservations
        .map(user => {
          return `<p>Name: ${user.name}</p>`;
        })
        .join('');
      document.querySelector('#app').insertAdjacentHTML('afterbegin', names);
    });
};
