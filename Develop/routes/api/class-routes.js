const router = require('express').Router();
const { Class , Armor, Weapon, Ability } = require('../../models');

// The `/api/classes` endpoint

router.get('/', async (req, res) => {
  // find all classes
  // be sure to include its associated Armor

  try {
    const schmoke = await Class.findAll({
    });
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one class by its `id` value
  // be sure to include its associated Armor

  try {
    const schmoke = await Class.findByPk(req.params.id,{

    });
    const bonkers = await Weapon.findAll({ where : { weapon_type: schmoke.weapon_type}});
    const conkers = await Ability.findAll({ where : { class_id: schmoke.id}});
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id/Weapon', async (req, res) => {
  // find one class by its `id` value
  // be sure to include its associated Armor

  try {
    const schmoke = await Class.findByPk(req.params.id,{

    });
    const bonkers = await Weapon.findAll({ where : { weapon_type: schmoke.weapon_type}});
    res.status(200).json(bonkers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id/Ability', async (req, res) => {
  // find one class by its `id` value
  // be sure to include its associated Armor

  try {
    const schmoke = await Class.findByPk(req.params.id,{

    });
    const bonkers = await Ability.findAll({ where : { class_id: schmoke.id}});
    res.status(200).json(bonkers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id/Armor', async (req, res) => {
  // find one class by its `id` value
  // be sure to include its associated Armor

  try {
    const schmoke = await Class.findByPk(req.params.id,{

    });
    const bonkers = await Armor.findAll({ where : { armor_type: schmoke.armor_type}});
    res.status(200).json(bonkers);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', async (req, res) => {
  // update a class by its `id` value
  
    Class.update(
      {class_name: req.body.class_name},
      {where: {id: req.params.id} }
    )
    .then(lump => {
      if(!lump)
      {
        res.status(404).json({message: 'There is no class found at this id'});
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
