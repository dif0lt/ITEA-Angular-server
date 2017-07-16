var express = require('express');
var router = express.Router();
var Category = require('../models/Category');

router.get('/:id?', function(req, res, next){
    if(req.params.id) {
        Category.getCategoryById(req.params.id, function(err, rows) {
            if(err) {
                res.json(err);
            } else {
                res.json(rows[0]);
            }
        });
    } else{
        Category.getAllCategories(function(err, rows){
            if(err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/',function(req, res, next){
    Category.addCategory(req.body, function(err, count){
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.delete('/:id', function(req, res, next) {
    Category.deleteCategory(req.params.id, function(err, count) {
        if(err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});

router.put('/:id', function(req, res, next) {
    Category.updateCategory(req.params.id, req.body, function(err, rows) {
        if(err) {
            res.json(err);
        } else {
            res.json(rows[0]);
        }
    });
});

module.exports = router;