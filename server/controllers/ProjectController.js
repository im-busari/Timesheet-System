const { Project, Task } = require('../models');

class ProjectController {
  async getAllProjects(req, res) {
    try {
      const projects = await Project.findAll({
        include: [
          {
            model: Task,
            as: 'tasks',
            required: false,
            attributes: ['id', 'name'],
            through: { attributes: [] },
          },
        ],
      });
      res.status(200).send({ projects });
    } catch (err) {
      res.status(500).send({ error: err });
    }
  }
}

module.exports = new ProjectController();
