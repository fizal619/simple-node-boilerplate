const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const reservationsRouter = require('./routes/reservations');

// serve the homepage from here
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// handle api calls from here
app.use('/reservations', reservationsRouter);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});
