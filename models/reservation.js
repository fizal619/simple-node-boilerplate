'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.DATE, 
  }, {});



  class Reservation extends SequelizeReservation {
    static async all(){ 
      return await this.findAll();
      reservations = Reservation.create({
        name: req.body.name,
        slot: new Date(req.body.slot)        
      }) 
    }
  }

  
  return Reservation;
};
