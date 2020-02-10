const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Reservation.all());
});

router.post('/', async (req, res, next) => {
  await Reservation.newReservation(req.body.slot, req.body.day);
});
module.exports = router;
