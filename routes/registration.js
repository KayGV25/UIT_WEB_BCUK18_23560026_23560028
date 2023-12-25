var express = require('express');
var router = express.Router();
var User = require('../db');
const bcrypt = require('bcrypt');

/* Import registration data to MongoDB */
router.post('/db', async function(req, res, next) {
    let { Email, Password } = req.body;
    try {
        /* Check if user in DB or not */
        const user = await User.findOne({ Email: Email });
        if (!user) {
            /* Hash password */
            const hashed = await bcrypt.hash(Password, 10);
            /* Save new user to DB */   
            let user = new User({ Email: Email, Password: hashed })
            user.save()
            console.log("New user is created")
            /* Redirect to /login */
            res.redirect('/login');
        }
        else {
            /* Handle if the user exist */
            res.send('User existed');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
