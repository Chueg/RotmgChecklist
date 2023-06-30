const router = require('express').Router();
const { Ring } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const schmoke = await Ring.findAll({
    });
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one ring by its `id` value
  // be sure to include its associated Products

  try {
    const schmoke = await Ring.findByPk(req.params.id,{

    });
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
