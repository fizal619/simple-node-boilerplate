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

      //create date heading
      // let table = document.querySelector("table");
      // generateTableHead(table);
      let myCalendar = new VanillaCalendar({
        selector: "#myCalendar",
        date: new Date(),
        todaysDate: new Date(),
        pastDates: false,
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        shortWeekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        // availableWeekDays: [
        //   { day: 'monday', others: values },
        //   { day: 'tuesday', others: values }
        // ],
        // availableDates: [
        //   { date: '2019-09-15', others: values },
        //   { date: '2019-09-16', others: values },
        //   { date: '2019-09-17', others: values },
        //   { date: '2019-09-25', others: values },
        //   { date: '2019-09-26', others: values }
        // ],
        // datesFilter: true,
        // onSelect: (data, elem) => {}
      })

      myCalendar.init();



    })
    .catch(error => console.error(error));
};

fetchReservations();
