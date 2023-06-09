const router = require('express').Router();
const { Armor } = require('../../models');

// The `/api/armores` endpoint

router.get('/', async (req, res) => {
  // find all armores
  // be sure to include its associated Armor

  try {
    const schmoke = await Armor.findAll({
    });
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one armor by its `id` value
  // be sure to include its associated Armor

  try {
    const schmoke = await Armor.findByPk(req.params.id,{

    });
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new armor
  try {
    const locationData = await Armor.create({
      armor_name: req.body.armor_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a armor by its `id` value
  
    Armor.update(
      {armor_name: req.body.armor_name},
      {where: {id: req.params.id} }
    )
    .then(lump => {
      if(!lump)
      {
        res.status(404).json({message: 'There is no armor found at this id'});
        return;
      }
      res.json("Updated");

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  })
  
});

module.exports = router;
