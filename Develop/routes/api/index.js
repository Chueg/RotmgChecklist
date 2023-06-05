const router = require('express').Router();
const WeaponRoutes = require('./weapon-routes');
const ClassRoutes = require('./class-routes');


router.use('/categories', WeaponRoutes);
router.use('/classes', ClassRoutes);


module.exports = router;
