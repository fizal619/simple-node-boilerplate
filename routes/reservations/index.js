const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');
var cors = require('cors')
var app = express()

app.use(cors())

router.get('/', async (req,res) => {
  res.json(await Reservation.all());
});


router.post('/reservations', async (req, res) => {
  const id = res.json(await Reservation.all());
  reservation = new Reservation.create({
      // id: id,
      // name: req.body.name,
      // slot: date,
      createdAt: new Date(),
      updatedAt: new Date()
  }).then(console.log("successfully created"));
​
  reservation.save(function(err){
    if(err){
      res.send(err);
    }
    res.send("Successfully saved.")
  });
});

module.exports = router;

