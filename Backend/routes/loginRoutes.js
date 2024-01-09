// loginroutes.js
const express = require("express");
const UserController = require('../controllers/userController.js');

const router = express.Router();

router.post('/login', UserController.login);

module.exports = router;
