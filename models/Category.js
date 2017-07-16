var db = require('../dbconnection');

var Category = {
    getAllCategories: function(callback) {
        return db.query('select * from categories', callback);
    },
    
    getCategoryById: function(id, callback) {
        return db.query('select * from categories where id=?', [id], callback);
    },
    
    addCategory: function(Category, callback) {
        return db.query('insert into categories values(?,?)', [Category.id, Category.name, Category.description], callback);
    },
    
    deleteCategory:function(id, callback) {
        return db.query('delete from categories where id=?', [id], callback);
    },

    updateCategory: function(id, Category, callback) {
        return  db.query('update categories set name=?, description=?, where id=?', [Category.name, Category.description, id],callback);
    },
    
    deleteAllCategories: function(item, callback) {
        var delarr = [];
        for(i = 0; i < item.length; i++) {
            delarr[i] = item[i].Id;
        }
        return db.query('delete from categories where id in (?)', [delarr], callback);
    }
}

module.exports = Category;