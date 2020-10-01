class ExampleController {
  getExample(req, res) {
    try {
      const user = req.session.user;
      res.status(200).send(user.username);
    } catch (err) {
      res.status(500).send('Something is wrong with our server.');
    }
  }
}

module.exports = new ExampleController();
