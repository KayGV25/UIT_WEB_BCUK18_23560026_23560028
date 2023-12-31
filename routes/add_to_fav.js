var express = require('express');
var router = express.Router();
var User = require('../db');

/* Handle post */
router.post('/add_to_fav', async function(req, res, next) {
    try {
        const { user, movieData } = req.body;
        console.log("recieve " + user + " - " + movieData);
    /* Update DB */
    await User.updateOne(
        { Email: user },
        {
          $addToSet: {
            'Fav.movieId': movieData.movieId,
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

/* Send data from DB */
router.post('/fav_data', async function(req, res, next) {
  user = req.body.user;
  try {
    /* Fetch Fav data */
    const data = await User.findOne({ Email: user });

    if (!data) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log(data.Fav);
    res.send(data.Fav);
  } 
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;