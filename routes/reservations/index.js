const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');

router.get('/', async (req, res) => {
  res.json(await Reservation.all());
});

router.post('/', async (req, res, next) => {
  try {
    const newReservation = await Reservation.create(req.body);
    res.json(newReservation);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
