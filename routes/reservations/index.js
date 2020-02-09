const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');
var cors = require('cors')
var app = express()

app.use(cors())

router.get('/', async (req,res) => {
  res.json(await Reservation.all());

});

app.post('http://localhost:3000/reservations', function (req, res) {
  res.send('Got a POST request')
})

module.exports = router;
