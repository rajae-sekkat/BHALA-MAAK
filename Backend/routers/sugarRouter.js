// sugarRouter.js
const express = require('express');
const sugarController = require('../controllers/sugarController');

const router = express.Router();

router.post('/add-sugar-level', sugarController.addSugarLevel);
router.get('/latest-sugar-level', sugarController.getLatestSugarLevel);
router.get('/all-sugar-levels', sugarController.getAllSugarLevels);

module.exports = router;
