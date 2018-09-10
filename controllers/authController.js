const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}

async function comparePassword(password, hash) {
    const match = await bcrypt.compare(password, hash);
    return match;
}

function jwtSignUser(payload) {
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(payload, config.secret, {
        expiresIn: ONE_WEEK
    });
}

module.exports = {
    async register(req, res) {
        try {
            const password = await hashPassword(req.body.password);
            const newUser = new User({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: password
            });
            newUser.save();
            res.send({
                user: newUser.toJSON(),
                token: jwtSignUser(newUser.toJSON())
            });
        } catch (err) {
            res.status(500).send({
                error: err
            });
        }
    },

    async login(req, res) {
        try {
            const user = await User.findOne({
                username: req.body.username
            });
            if (user) {
                const match = await comparePassword(
                    req.body.password,
                    user.password
                );
                if (match) {
                    res.send({
                        user: user.toJSON(),
                        token: jwtSignUser(user.toJSON())
                    });
                } else {
                    res.status(404).send({
                        error: 'Invalid Password'
                    });
                }
            } else {
                res.status(404).send({
                    error: 'User Not Found'
                });
            }
        } catch (err) {
            res.status(500).send({
                error: err
            });
        }
    }
};
