var express = require('express');
var router = express.Router();
// bring in our Mongoose model
var Person = require('../models/person.schema.js');

router.get('/:searchedName', function (req, res) {
    console.log('shit im lookin for: ', req.params.searchedName);
    
    // find document by name
    Person.find({ name: req.params.searchedName}, function (err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            // console.log('found data: ', data);
            res.send(data);
        }
    });
});

module.exports = router;