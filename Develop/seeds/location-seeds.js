const { Location } = require('../models');

const LocationData = [
    {
        LC:'Pirate Cave'
    },
    {
        LC:'Forest Maze'
    },
    {
        LC:'Spider Den'
    },
    {
        LC:'Forbidden Jungle'
    },
    {
        LC:'The Hive'
    },
    {
        LC:'Candyland Hunting Grounds'
    },
    {
        LC:'Ancient Ruins'
    },
    {
        LC:'Magic Woods'
    },
    
    
      
];

const seedLocations = () => Location.bulkCreate(LocationData);

module.exports = seedLocations;
