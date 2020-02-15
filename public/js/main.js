// jest won't error out on DOM calls - where i'll we making a call to the database

let settings = {
  selector: "#myCalendar",
  date: new Date(),
  todaysDate: new Date(),
  pastDates: false,
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  shortWeekday: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  onSelect: (data) => {
    let date = formatDate(data);
    document.getElementById('date').value = date;
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

const makeReservation = async () => {
  let name = `${document.getElementById('first').value} ${document.getElementById('last').value}`
  let time = document.getElementById('date').value;

  await axios.post("/reservations", { name: name, slot: time });
}


fetchReservations();
