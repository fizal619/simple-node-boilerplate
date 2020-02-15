const express = require('express');
const router = express.Router();
const { Reservation } = require('../../models');
const bodyParser = require('body-parser')
const cors = require('cors')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

router.use(cors())

router.get('/', async (req,res) => {
  res.json(await Reservation.all());
});

router.post('/create', async (req, res) => {
  console.log(req.body)

  await Reservation.add(req.body)
  // Reservation.create({slot: req.body.slot})
  res.json({
    test: 'lol'
  })
});

module.exports = router;

