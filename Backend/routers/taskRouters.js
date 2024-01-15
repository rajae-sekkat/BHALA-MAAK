// routers/taskRouter.js

const express = require('express');
const router_2 = express.Router();
const taskController = require('../controllers/taskController'); // Adjust the path accordingly

router_2.get('/getTasks', taskController.getAllTasks);
router_2.post('/addTask', taskController.addTask);
router_2.delete('/deleteTask/:taskId', taskController.deleteTask);

module.exports = router_2;