const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.adCars.get);

router.get('/my-cars/:id', controllers.adCars.getAll);

router.get('/search', controllers.adCars.search);



router.get('/:id', controllers.adCars.getOne);

router.post('/', auth(), controllers.adCars.post);

router.put('/:id', auth(), controllers.adCars.put);

router.delete('/:id', auth(), controllers.adCars.delete);

module.exports = router;