const {Project, Task} = require('../models');

class ProjectController {
    /**
     * GET /projects
     *
     * Gets all projects form the database.
     *
     * @return {Promise<void>} an object containing all the projects data.
     */
    async getAllProjects(req, res) {
        try {
            const projects = await Project.findAll({
                include: [
                    {
                        model: Task,
                        as: 'tasks',
                        required: false,
                        attributes: ['id', 'name'],
                        through: {attributes: []},
                    },
                ],
            });
            res.status(200).send({projects});
        } catch (err) {
            res.status(500).send({error: err});
        }
    }

    /**
     * GET /projects/:projectId
     *
     * Gets a project form the database.
     *
     * @return {Promise<void>} an object containing the project data.
     */
    async getProjectById(req, res) {
        try {
            const projects = await Project.findByPk(req.params.projectId, {
                include: [
                    {
                        model: Task,
                        as: 'tasks',
                        required: false,
                        attributes: ['id', 'name'],
                        through: {attributes: []},
                    },
                ],
            });
            res.status(200).send({projects});
        } catch (err) {
            res.status(500).send({error: err});
        }
    }
}

module.exports = new ProjectController();
