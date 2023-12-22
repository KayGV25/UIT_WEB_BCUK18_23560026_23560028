var express = require('express');
var router = express.Router();
const User = require('../db');

/* Import registration data to MongoDB */
router.post('/db', async function(req, res, next) {
    let {Email, Password} = req.body;
    try {
        const user = await User.findOne({ Email: Email, Password: Password });
        if (!user) {
            let user = new User({Email: Email, Password: Password})
            user.save()
            .then(()=>{
                console.log("New task is created")
            })
            .catch(err=>console.log(err))
            res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    /* Redirect to login after registration */
    res.redirect('/login');  
});

module.exports = router;
