var express = require('express');
var router = express.Router();
var Auth = require('../models/Auth');

router.get('/:email/:password', function(req, res, next) {
    Auth.login(req.params.email, req.params.password, function(err, rows) {
            if(err) {
                res.json(err);
            } else {
                res.json(rows[0]);
            }
        })        
});

module.exports = router;