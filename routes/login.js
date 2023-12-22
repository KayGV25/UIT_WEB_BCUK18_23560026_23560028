var express = require('express');
var router = express.Router();
const User = require('../db')

/* GET login page. */
router.get('/login', function(req, res, next) {
    if(req.session.loggedIn) res.redirect('/index')
    res.render('login');
});
// /* Check login data from MongoDB */
router.post('/login', async (req, res) => {
    const {Email, Password} = req.body;
    try {
        const user = await User.findOne({ Email: Email, Password: Password });
        if (user) {
            // Set session variable to indicate the user is logged in
            req.session.loggedIn = true;
            res.redirect('/index');
        } else {
            res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
// Not test yet

module.exports =  router;
