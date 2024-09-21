const mainController = [];

mainController.getName = (req, res) => {
    res.send('George Jorgensen');
};

mainController.notFoundError = (req, res) => {
    res.status(404).send('404 -Not Found');
}

module.exports = mainController;