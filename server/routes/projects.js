const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/ProjectController');

router.get('/', ProjectController.getAllProjects);

module.exports = router;
