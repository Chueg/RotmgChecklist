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
    {
        LC:'Snake Pit'
    },
    //Sprite World 10
    {
        LC:'Sprite World'
    },
    {
        LC:'Cave of a Thousand Treasures'
    },
    {
        LC:'Undead Lair'
    },
    {
        LC:'Manor of the Immortals'
    }
    
    
      
];

const seedLocations = () => Location.bulkCreate(LocationData);

module.exports = seedLocations;
