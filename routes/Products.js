var express = require('express');
var router = express.Router();
var User = require('../models/Product');

router.get('/:id?', function(req, res, next){
    if(req.params.id) {
        User.getProductById(req.params.id, function(err, rows) {
            if(err) {
                res.json(err);
            } else {
                res.json(rows[0]);
            }
        });
    } else{
        User.getAllProductsInCategory(function(err, rows){
            if(err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/',function(req, res, next){
    User.addProduct(req.body, function(err, count){
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.delete('/:id', function(req, res, next) {
    User.deleteProduct(req.params.id, function(err, count) {
        if(err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:id', function(req, res, next) {
    User.editProduct(req.params.id, req.body, function(err, rows) {
        if(err) {
            res.json(err);
        } else {
            res.json(rows[0]);
        }
    });
});

module.exports = router;