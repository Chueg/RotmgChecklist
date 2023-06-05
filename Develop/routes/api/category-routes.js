const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products

  try {
    const schmoke = await Category.findAll({
    });
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const schmoke = await Category.findByPk(req.params.id,{
      include: [{ model: Product }],

    });
    res.status(200).json(schmoke);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const locationData = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  
    Category.update(
      {category_name: req.body.category_name},
      {where: {id: req.params.id} }
    )
    .then(lump => {
      if(!lump)
      {
        res.status(404).json({message: 'There is no category found at this id'});
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
  // delete a category by its `id` value

  Category.destroy(
    {where: {id: req.params.id} }
  )
  .then(lump => {
    if(!lump)
    {
      res.status(404).json({message: 'There is no category found at this id'});
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
