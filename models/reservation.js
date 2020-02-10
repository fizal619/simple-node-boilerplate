'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.INTEGER,
  });

  class Reservation extends SequelizeReservation {
    static async all() {
      return await this.findAll();
    }

    static async checkConflicts(slot, day) {
      const tablesTaken = await this.findAll({
        where: { slot: slot, day: day },
      });
      if (tablesTaken < 10) return false;
      else return true;
    }

    static async newReservation(req, res) {
      if (this.checkConflicts(req.body.slot, req.body.day)) {
        return await this.create({
          name: req.body.name,
          slot: req.body.slot,
          day: req.body.day,
        });
      } else return error('No tables available at this time');
    }
  }
  return Reservation;
};
