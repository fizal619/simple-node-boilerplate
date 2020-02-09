// jest won't error out on DOM calls - where i'll we making a call to the database

const displayPage = (elem) => {
  const home = document.getElementById('homepage');
  const upcoming = document.getElementById('upcomingpage');
  const reservations = document.getElementById('reservationspage');

  if(elem === 'reservationspage') {
    home.style.display = 'none';
    upcoming.style.display = 'none';
    reservations.style.display = 'flex';
  } else if(elem == 'upcomingpage') {
    reservations.style.display = 'none';
    home.style.display = 'none';
    upcoming.style.display = 'flex';
  } else {
    reservations.style.display = 'none';
    upcoming.style.display = 'none';
    home.style.display = 'flex';
  }
};

//toggle functions
const showReservation = () => {
  displayPage('reservationspage');
};

const showHome = () => {
  displayPage('homepage');
};

const showUpcoming = () => {
  displayPage('upcomingpage');
};

//Get all the reservations
const fetchReservations = () => {
  axios.get('/reservations')
    .then(response => {
      const reservations = response.data;
      // console.log(`GET list users`, reservations);
    })
    .catch(error => console.error(error));
};

fetchReservations();
