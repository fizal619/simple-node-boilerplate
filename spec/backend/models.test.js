const { Reservation } = require('../../models');

test('Reservation.all() should return an array', async () => {
  const result = (await Reservation.all()) || [];
  expect(result.length).toEqual(2);
});

test('New Reservations can be created', async () => {
  await Reservation.newReservation({
    body: {
      name: 'Jorge',
      slot: 1,
    },
  });
  let result = await Reservation.all();
  expect(result.length).toEqual(3);
});

// test('Reservations can not be duplicated', async () => {
//   let new = await Reservation.newReservation();
// });
