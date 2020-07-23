const me = require('../controllers/aboutMe.js')

module.exports = function(app){
    app.get('/me', function(req, res) {
        me.show(req, res);
    });
    app.post('/sendEmail', function(req, res) {
        me.sendEmail(req, res);
        console.log("Im in the routejs section here is the data: ", req.body.data);
    })
}