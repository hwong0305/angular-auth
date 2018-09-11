const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = {
    getUser (req, res) {
        const token = req.headers.authorization;
        let user = {};
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                res.status(500).send({
                    err: err
                })
            } else {
                user = decoded;
                res.send(user);
            }
        })
    }
}