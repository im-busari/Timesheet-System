
class TimesheetController {

    createTimesheet = async (req, res) => {
        try {

            res.status(200).send('example Controller');
        } catch (err) {
            res.status(500).send('Something is wrong with our server.');
        }
    }
}

module.exports = new TimesheetController();
