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
      // const previousHalfHour = await this.findAll({
      //   where:{slot:slot}
      // })
      if (tablesTaken < 10) return false;
      else return true;
    }

    static async newReservation(name, slot) {
      if (!this.checkConflicts(slot)) {
        return 'No tables available at this time';
      }
      if (this.checkConflicts(slot)) {
        await this.create({
          name: name,
          slot: slot,
        });
        console.log('Reservation sudccesfully created');
      }
    }
  }

  return Reservation;
};
