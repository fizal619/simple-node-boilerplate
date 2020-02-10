// jest won't error out on DOM calls - where i'll we making a call to the database

// const displayPage = (elem) => {
//   const home = document.getElementById('homepage');
//   const upcoming = document.getElementById('upcomingpage');
//   const reservations = document.getElementById('reservationspage');

//   if(elem === 'reservationspage') {
//     home.style.display = 'none';
//     upcoming.style.display = 'none';
//     reservations.style.display = 'flex';
//   } else if(elem == 'upcomingpage') {
//     reservations.style.display = 'none';
//     home.style.display = 'none';
//     upcoming.style.display = 'flex';
//   } else {
//     reservations.style.display = 'none';
//     upcoming.style.display = 'none';
//     home.style.display = 'flex';
//   }
// };


//Get all the reservations
const fetchReservations = () => {
  return axios.get('/reservations')
    .then(response => {
      let data = response.data;
      
      //
      generateTableHead();


    })
    .catch(error => console.error(error));
};

fetchReservations();