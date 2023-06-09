const router = require('express').Router();
const WeaponRoutes = require('./weapon-routes');
const ClassRoutes = require('./class-routes');
const ArmorRoutes = require('./armor-routes');


router.use('/categories', WeaponRoutes);
router.use('/classes', ClassRoutes);
router.use('/armor', ArmorRoutes);


module.exports = router;
