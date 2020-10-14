const {
    Movie
} = require('../models');

const MovieController = {
     getAll(req, res) {
        Movie.findAll()
            .then(movies => res.send(movies))
            .catch(error => {
                console.error(error);
                res.status(500).send({
                    message: 'There was a problem trying to get movies'
                })
            })
    }
}

module.exports = MovieController;