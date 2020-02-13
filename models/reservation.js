'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.DATE, 
  }, {});



  class Reservation extends SequelizeReservation {
    static async all(){ 
      await this.findAll();
      reservations = Reservation.create({
        name: req.body.name,
        slot: req.body.slot        
      }) 
    }
  }

  
  return Reservation;
};
