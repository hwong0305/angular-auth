const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('./controllers/authController');
const profileController = require('./controllers/profileController');

router.post('/register', authController.register);

router.post('/login', authController.login);

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => res.send('PROFILE'));

router.get('/validate', profileController.getUser);

module.exports = router;