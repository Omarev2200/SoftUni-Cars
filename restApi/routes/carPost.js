const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.carPost.get);

router.post('/', auth(), controllers.carPost.post);

router.put('/:id', auth(), controllers.carPost.put);

router.delete('/:id', auth(), controllers.carPost.delete);

module.exports = router;