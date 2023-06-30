const router = require('express').Router();
const WeaponRoutes = require('./weapon-routes');
const ClassRoutes = require('./class-routes');
const ArmorRoutes = require('./armor-routes');
const RingRoutes = require('./ring-routes');


router.use('/weapon', WeaponRoutes);
router.use('/class', ClassRoutes);
router.use('/armor', ArmorRoutes);
router.use('/ring', RingRoutes);


module.exports = router;
