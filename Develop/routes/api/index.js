const router = require('express').Router();
const WeaponRoutes = require('./Weapon-routes');


router.use('/categories', WeaponRoutes);


module.exports = router;
