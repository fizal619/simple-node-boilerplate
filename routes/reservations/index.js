const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');


router.get('/', async (req, res) => {
  try {
    res.json(await Reservation.all());
  } catch (error) {
    res.json(await Reservation.all());
  }
});

router.post('/', async (req, res, next) => {
  try {
    let reservation = await Reservation.create(req.body);
    res.json(reservation);
  } catch (error) {
    console.log(error);
  }
});


module.exports = router;
