const express = require("express");
const newUsers = require("../controllers/newUsers.js");

const router_1 = express.Router();

// Define a POST route for '/signup' and associate it with the 'signup' method in the 'newUsers' controller
router_1.post('/signup', newUsers.signup);

// Export the router for use in other parts of your application
module.exports = router_1;
