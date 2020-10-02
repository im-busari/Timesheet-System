const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');

router.get('/', ProjectController.getAllProjects);
router.get('/:projectId', ProjectController.getProjectById);

module.exports = router;
