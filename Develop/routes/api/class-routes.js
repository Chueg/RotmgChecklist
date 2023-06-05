const router = require('express').Router();
const { Class } = require('../../models');

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
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new class
  try {
    const locationData = await Class.create({
      class_name: req.body.class_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
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
