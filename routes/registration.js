var express = require('express');
var router = express.Router();
const TodoModel = require('../db');

/* Import registration data to MongoDB */
router.post('/db', function(req, res, next) {
    let {Email, Password} = req.body;
    let newTodo = new TodoModel({Email: Email, Password: Password})
    newTodo.save()
    .then(()=>{
        console.log("New task is created")
    })
    .catch(err=>console.log(err))
    /* Redirect to login after registration */
    res.redirect('/login');  
});

module.exports = router;
