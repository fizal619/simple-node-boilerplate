// jest won't error out on DOM calls - where i'll we making a call to the database

const fetchReservations = () => {
  axios.get('/reservations')
    .then(response => {
      const reservations = response.data;
      console.log(`GET list users`, reservations);
    })
    .catch(error => console.error(error));
};

fetchReservations();
