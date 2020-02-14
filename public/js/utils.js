// define your functions like this so they're testable
const storeHours = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00'];

// //Generate Dates
// const generateDates = () => {
//   let arrayDates = [];

//   for (let i = 0; i < 7; i++) {
//     let currentDate = new Date();
//     currentDate.setDate(currentDate.getDate() + i);
//     arrayDates.push(`${DayAsString(currentDate.getDay())}  ${MonthAsString(currentDate.getMonth())} ${currentDate.getDate()}`);
//   }
//   return arrayDates;
// }

// //generate table
// function generateTableHead(table) {
//   let dates = generateDates();
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let i = 0; i < dates.length; i++) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(dates[i]);
//     th.appendChild(text);
//     row.appendChild(th);
//   }
//   generateTable(table);
// }

// function generateTable(table) {
//   for (let element of storeHours) {
//     let row = table.insertRow();
//     for (let i = 0; i < storeHours.length; i++) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(storeHours[i]);
//       cell.appendChild(text);
//     }
//   }
// }


//Toggle Page function

// const displayPage = (elem) => {
//   const home = document.getElementById('homepage');
//   const reservations = document.getElementById('reservationspage');

//   if(elem === 'reservationspage') {
//     home.style.display = 'none';
//     reservations.style.display = 'flex';
//   } else {
//     reservations.style.display = 'none';
//     home.style.display = 'flex';
//   }
// };

{/* <div class="vanilla-calendar-date vanilla-calendar-date--active vanilla-calendar-date--today vanilla-calendar-date--selected" data-calendar-date="Wed Feb 12 2020 12:17:20 GMT-0500 (Eastern Standard Time)" data-calendar-status="active"><span>12</span></div> */ }

const generateDate = (data) => {
  let date = moment(data.date).format('MM/DD/YYYY');
  document.getElementById('date').value = date;
}

const generateTime = () => {
  //call axios request to generate time..
}
