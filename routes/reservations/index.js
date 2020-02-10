const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Reservation.all());
});

router.post('/', async (req, res, next) => {
  // tables = await Reservation.checkConflict('2020-02-21 22:00:00.000 +00:00');
  // console.log(tables, 'jsjfdjnkfdsnjkfdsjkndsfkjndskjnsd');
  const date = await Reservation.newReservation(
    req.body.name,
    new Date(`${req.body.date}`)
  );
});
module.exports = router;
