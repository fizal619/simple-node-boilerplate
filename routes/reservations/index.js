const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');
var cors = require('cors')
var app = express()

app.use(cors())

router.get('/', async (req,res) => {
  res.json(await Reservation.all());

});

router.post('/', async (req, res) => {
  res.json(await Reservation.all());
  res.send('post successful')
})

module.exports = router;

