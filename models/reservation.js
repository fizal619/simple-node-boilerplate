'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.DATE,
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

    static async newReservation(name, slot, date) {
      if (!this.checkConflicts(slot)) {
        return 'No tables available at this time';
      } else
        await this.create({
          name: name,
          slot: slot,
        });
    }
  }
  return Reservation;
};
