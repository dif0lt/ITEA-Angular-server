var db = require('../dbconnection');

var User = {
    
    getAllUsers: function(callback) {
        return db.query('select * from users', callback);
    },
    
    getUserById: function(id, callback) {
        return db.query('select * from users where id=?', [id], callback);
    },
    
    addUser: function(User, callback) {
        return db.query("Insert into users values(?,?,?,?,?)", [User.id, User.firstName, User.lastName, User.email, User.password], callback);
    },
    
    deleteUser:function(id, callback) {
        return db.query("delete from users where id=?",[id],callback);
    },

    updateUser: function(id, User, callback) {
        return  db.query("update users set firstName=?,lastName=?,email=?,password=? where id=?", [User.firstName, User.lastName, User.email, User.password],callback);
    },
    
    deleteAllUsers: function(item, callback) {
        var delarr = [];
        for(i = 0; i < item.length; i++) {
            delarr[i] = item[i].Id;
        }
        return db.query("delete from user where id in (?)", [delarr], callback);
    }
};

module.exports = User;