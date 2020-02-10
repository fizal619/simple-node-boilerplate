const { Reservation } = require('../../models');

test('Reservation.all() should return an array', async () => {
  const result = (await Reservation.all()) || [];
  expect(result.length).toEqual(2);
});

test('New Reservations can be created', async () => {
  await Reservation.newReservation(
    'Jorge',
    new Date('21 Feb 2020 17:00:00 GMT-0500')
  );
  let result = await Reservation.all();
  expect(result.length).toEqual(3);
});

test('Check conflict returns true if less than 10 tables taken', async () => {
  let i = 0;
  while (i < 10) {
    await Reservation.newReservation(
      'Jorge',
      new Date('21 Feb 2020 17:00:00 GMT-0500')
    );
    i++;
  }
  let conflictCheck = await Reservation.checkConflicts(
    new Date('21 Feb 2020 17:00:00 GMT-0500')
  );

  expect(conflictCheck).toEqual(true);
});

test('No more than 10 tables at a given time', async () => {
  let i = 0;
  while (i < 10) {
    await Reservation.newReservation(
      'Testing',
      new Date('21 Feb 2020 17:00:00 GMT-0500')
    );
    i++;
  }
  const test = await Reservation.newReservation(
    'test',
    new Date('21 Feb 2020 17:00:00 GMT-0500')
  );
  expect(test).toEqual(undefined);
});
