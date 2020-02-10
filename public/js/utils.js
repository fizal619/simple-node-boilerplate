// define your functions like this so they're testable
// const storeHours =[
//   {0: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00','8:00','9:00','10:00']},
//   {1: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00','8:00','9:00','10:00']},
//   {2: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00','8:00','9:00','10:00']},
//   {3: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00','8:00','9:00','10:00']},
//   {4: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00','8:00','9:00','10:00']},
//   {5: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00','8:00','9:00','10:00']},
//   {6: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00','8:00','9:00','10:00']},
// ];


function MonthAsString(monthIndex) {
  let d = new Date();
  let month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  return month[monthIndex];
}

function DayAsString(dayIndex) {
  let weekdays = new Array(7);
  weekdays[0] = "Sun";
  weekdays[1] = "Mon";
  weekdays[2] = "Tue";
  weekdays[3] = "Wed";
  weekdays[4] = "Thu";
  weekdays[5] = "Fri";
  weekdays[6] = "Sat";

  return weekdays[dayIndex];
}


//Generate Dates
const generateDates =()=> {
  let arrayDates = [];

  for (let i = 0; i < 7; i++) {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);
    arrayDates.push(`${DayAsString(currentDate.getDay())}  ${MonthAsString(currentDate.getMonth())} ${currentDate.getDate()}`);
  }
  return arrayDates;
}

//generate table
function generateTableHead() {
  let table = document.querySelector("table");
  let dates = generateDates();
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let i=0; i<dates.length; i++) {
    let th = document.createElement("th");
    let text = document.createTextNode(dates[i]);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}







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


