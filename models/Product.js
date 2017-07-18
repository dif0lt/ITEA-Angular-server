var db = require('../dbconnection');

var Product = {
    getAllProductsInCategory: function(id, callback) {
        return db.query('select * from products where Product_id=?', [id], callback);
    },
    
    getProductById: function(id, callback) {
        return db.query('select * from products where id=?', [id], callback);
    },
    
    addProduct: function(Product, callback) {
        return db.query('insert into products values(?,?,?,?,?)', [Product.id, Product.name, Product.description, Product.image_url, Product.category_id], callback);
    },
    
    deleteProduct:function(id, callback) {
        return db.query('delete from products where id=?', [id], callback);
    },

    editProduct: function(id, Product, callback) {
        return  db.query('update products set name=?, description=?, image_url=?, category_id=?, where id=?', [Product.name, Product.description, Product.image_url, Product.category_id, id],callback);
    },
    
    deleteAllProducts: function(item, callback) {
        var delarr = [];
        for(i = 0; i < item.length; i++) {
            delarr[i] = item[i].Id;
        }
        return db.query('delete from products where id in (?)', [delarr], callback);
    }
}

module.exports = Product;