const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Reservation.all());
});

router.post('/', async (req, res, next) => {
  let slotSplit = req.body.slot.split(':');
  let month = req.body.month;
  switch (month) {
    case 'January':
      month = 0;
      break;
    case 'February':
      month = 1;
      break;
    case 'March':
      month = 2;
      break;
    case 'April':
      month = 3;
      break;
    case 'May':
      month = 4;
      break;
    case 'June':
      month = 5;
      break;
    case 'July':
      month = 6;
      break;
    case 'August':
      month = 7;
      break;
    case 'September':
      month = 8;
      break;
    case 'October':
      month = 9;
      break;
    case 'November':
      month = 10;
      break;
    case 'December':
      month = 11;
      break;
  }
  let slot = new Date(
    Date.UTC(2020, month, +req.body.day, +slotSplit[0], +slotSplit[1])
  );
  let prevHalf, prevFull;
  if (+slotSplit[1] === 30) {
    prevHalf = 0;
    prevFull = +slotSplit[0];
  } else {
    prevHalf = 30;
    prevFull = +slotSplit[0] - 1;
  }

  prevHalfHour = new Date(
    Date.UTC(2020, month, +req.body.day, prevFull, prevHalf)
  );

  await Reservation.newReservation(req.body.name, slot, prevHalfHour);
});
module.exports = router;
