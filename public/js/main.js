// jest won't error out on DOM calls - where i'll we making a call to the database

let settings = {
  selector: "#myCalendar",
  date: new Date(),
  todaysDate: new Date(),
  pastDates: false,
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  shortWeekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  onSelect: (data) => {
    generateDate(data);
  }
};

//Get all the reservations
const fetchReservations = () => {
  return axios.get('/reservations')
    .then(response => {
      let data = response.data;
      let myCalendar = new VanillaCalendar(settings)
      myCalendar.init();
      document.getElementById('date').value = moment().format('MM/DD/YYYY');
      generateTime();
    })
    .catch(error => console.error(error));
};

const fetchAvailableTimes = () => {
  return axios.get('/reservationTime')
    .then(response => {
      let data = response.data;
    })
}



fetchReservations();
