const router = require('express').Router();
const carController  = require('./controllers/carController');

router.post('/veiculos',carController.store);

router.get('/veiculos',carController.index);
router.get('/veiculos/find',carController.find);
router.get('/veiculos/:car_id',carController.findId);

router.put('/veiculos/:car_id',carController.update);

router.delete('/veiculos/:car_id',carController.destroi);


module.exports = router;