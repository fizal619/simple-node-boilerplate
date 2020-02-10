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
      console.log(tablesTaken.length, 'JFAJKFDSJKDFSJNKFD');
      // const previousHalfHour = await this.findAll({
      //   where:{slot:slot}
      // })
      if (tablesTaken.length < 10) return false;
      else return true;
    }

    static async newReservation(name, slot) {
      const conflictCheck = await this.checkConflicts(slot);
      if (conflictCheck === true) {
        console.log('No tables available at this time');
        return;
      }
      if (conflictCheck === false) {
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
