const Category = require('../models/category.models');
const router = require('express').Router();

router.route('/')
    .post((req, res) => {
        //res.json(req.body);
        const category = new Category(req.body);
        category.save().then(() => res.json(category))
            .catch(err => res.status(400).json('error' + err));
    })
    .get((req, res) => {
        Category.find()
            .then(categories => res.json(categories))
            .catch(err => console.error(err));
    });

module.exports = router;