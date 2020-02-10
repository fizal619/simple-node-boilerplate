const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Reservation.all());
});

router.post('/', async (req, res, next) => {
  const date = await Reservation.newReservation(
    req.body.name,
    new Date(`${req.body.date}`)
  );
});
module.exports = router;
