var express = require('express');
var router = express.Router();
var User = require('../db');
const bcrypt = require('bcrypt');

/* GET login page. */
router.get('/login', function(req, res, next) {
    if(req.session.loggedIn) res.redirect('/index')
    res.render('login');
});
/* Check login data from MongoDB */
router.post('/login', async (req, res) => {
    const {Email, Password} = req.body;
    try {
        const user = await User.findOne({ Email: Email });
        userPassword = await bcrypt.compare(Password, user.Password);
        if (user && userPassword) {
            /* Set session variable to indicate the user is logged in */
            req.session.loggedIn = true;
            console.log("Login succeeded")
            res.redirect('/index');
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
/* Logging out */
router.post('/logout', (req,res,next) => {
    console.log("Logout succeeded")
    req.session.loggedIn = false;
    res.redirect('/login');
})

module.exports =  router;
