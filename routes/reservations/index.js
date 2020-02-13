const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');
const bodyParser = require('body-parser')
const cors = require('cors')


router.use(bodyParser.json())

router.use(cors())

router.get('/', async (req,res) => {
  res.json(await Reservation.all());
});

router.post('/create', async (req, res) => {
  Reservation.create({slot:req.body.slot})

});

module.exports = router;

