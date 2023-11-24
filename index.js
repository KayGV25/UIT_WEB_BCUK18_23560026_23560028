// Import essential libraries 
const express = require('express'); 
const app = express(); 
const path = require('path'); 
const router = express.Router(); 
// Setup essential routes 
router.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname + '/index.html')); 
}); 
router.get('/index', function(req, res) { 
    res.sendFile(path.join(__dirname + '/index.html')); 
    //__dirname : It will resolve to your project folder. 
}); 
router.get('/film', function(req, res) { 
    res.sendFile(path.join(__dirname + '/film.html')); 
});
router.get('/login', function(req, res) { 
    res.sendFile(path.join(__dirname + '/login.html')); 
}); 
router.get('/search', function(req, res) { 
    res.sendFile(path.join(__dirname + '/search.html')); 
}); 
router.get('/upgrade-plan', function(req, res) { 
    res.sendFile(path.join(__dirname + '/upgrade-plan.html')); 
}); 
//add the router 
app.use('/styles',express.static(__dirname +'/styles'));
app.use('/scripts',express.static(__dirname +'/scripts'));
app.use('/', router); 
app.listen(process.env.port || 3000); 
console.log('Running at Port 3000'); 