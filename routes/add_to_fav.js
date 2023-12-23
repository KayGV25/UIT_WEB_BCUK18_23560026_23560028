var express = require('express');
var router = express.Router();
var TodoModel = require('../db');

router.post('/add_to_fav', async function(req, res, next) {
    try {
        const { user, movieData } = req.body;
        console.log("recieve " + user + " - " + movieData);
    /* Update DB */
    await TodoModel.updateOne(
        { Email: user },
        {
          $addToSet: {
            'Fav.urlImage': movieData.urlImage,
            'Fav.filmName': movieData.filmName,
            'Fav.releaseDate': movieData.releaseDate,
          },
        }
    );  
    } 
    catch (error) {
      console.error('Error adding to favorites:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;