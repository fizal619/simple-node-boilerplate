'use strict';
module.exports = (sequelize, DataTypes) => {
  const SequelizeReservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    slot: DataTypes.DATE, 
    isReserved: false 
  }, {});



  class Reservation extends SequelizeReservation {
    static async all(){ 
      return await this.findAll();
      reservations = Reservation.create({
        
      }) 
    }
  }
  
  return Reservation;
};
