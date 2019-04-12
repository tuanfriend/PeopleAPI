var controllers = require('../controllers/controllers');

module.exports = function(app){
    app.get('/', function (req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        controllers.index(req, res) ;
    })
    // Add User Request 

    app.get('/new/:name', function (req, res) {
        
        controllers.postnewname(req, res);
    })

    app.get('/remove/:name', function (req, res) {
        
        controllers.removename(req, res);
    })
    
    app.get('/:name', function (req, res) {
        
        controllers.thatname(req, res);
    })
}