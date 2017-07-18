var db = require('../dbconnection');

var Auth = {
    login: function(email, password, callback) {
        return db.query('select * from users where email=? and password=?', [email, password], callback);
    },
}

module.exports = Auth;