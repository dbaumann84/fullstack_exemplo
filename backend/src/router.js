const express = require('express');

const router = express.Router();

const taksController = require('./controllers/taksControllers');
const tasksMiddleware = require('./middleware/tasksMiddleware');

router.get('/tasks',taksController.getAll);
router.post('/tasks',tasksMiddleware.validateFieldTitle,taksController.createTask);
router.delete('/tasks/:id',taksController.deleteTask);
router.put('/tasks/:id',tasksMiddleware.validateFieldTitle,tasksMiddleware.validateFieldStatus,taksController.updateTask);

module.exports = router;
