// sugarRouter.js
const express = require('express');
const pressureController = require('../controllers/pressureController');

const router = express.Router();

router.post('/add-pressure-level', pressureController.addPressureLevel);
router.get('/latest-pressure-level', pressureController.getLatestPressureLevel);
router.get('/all-pressure-levels', pressureController.getAllPressureLevels);

module.exports = router;
