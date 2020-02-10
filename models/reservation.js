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

    static async checkConflicts(slot) {
      const tablesTaken = await this.findAll({
        where: { slot: slot },
      });
      if (tablesTaken < 10) return false;
      else return true;
    }

    static async newReservation(req, res) {
      if (this.checkConflicts(req.body.slot)) {
        return await this.create({
          name: req.body.name,
          slot: req.body.slot,
        });
      } else return error('No tables available at this time');
    }
  }
  return Reservation;
};
