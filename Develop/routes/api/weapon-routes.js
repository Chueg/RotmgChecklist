const router = require('express').Router();
const { Weapon } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const schmoke = await Weapon.findAll({
    });
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one weapon by its `id` value
  // be sure to include its associated Products

  try {
    const schmoke = await Weapon.findByPk(req.params.id,{

    });
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new weapon
  try {
    const locationData = await Weapon.create({
      weapon_name: req.body.weapon_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a weapon by its `id` value
  
    Weapon.update(
      {weapon_name: req.body.weapon_name},
      {where: {id: req.params.id} }
    )
    .then(lump => {
      if(!lump)
      {
        res.status(404).json({message: 'There is no weapon found at this id'});
        return;
      }
      res.json("Updated");

    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  })
  
});

router.delete('/:id', async (req, res) => {
  // delete a weapon by its `id` value

  Weapon.destroy(
    {where: {id: req.params.id} }
  )
  .then(lump => {
    if(!lump)
    {
      res.status(404).json({message: 'There is no weapon found at this id'});
      return;
    }
    res.json("Obliterated");

  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
})
});

module.exports = router;
