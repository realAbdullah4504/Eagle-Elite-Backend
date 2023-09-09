
const Item = require('../models/items.models');
const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        Item.find()
            .then((items) => { res.json(items); })
            .catch((err) => { res.status(400).json('error:' + err); });
    })
    .post((req, res) => {
        const newItem = new Item({
            attributes: {
                name: req.body.name,
                description: req.body.description,
                price: +req.body.price,
                noInStocks: +req.body.noInStocks,
                category: req.body.category,
                image: req.body.image
            }
        });
        //res.json(newItem);
        newItem.save()
            .then(() => res.json(newItem))
            .catch((err) => res.status(400).json('error' + err));
    });

router.route('/:id')
    .get((req, res) => {
        Item.findById({ _id: req.params.id })
            .then((items) => { res.json(items); })
            .catch((err) => res.status(400).json('error:' + err));
    })
    .post((req, res) => {
        //res.json(req.body);
        Item.findById(req.params.id)
            .then(item => {
                item.attributes.name = req.body.name,
                    item.attributes.image = req.body.image,
                    item.attributes.description = req.body.description,
                    item.attributes.noInStocks = req.body.noInStocks,
                    item.attributes.price = req.body.price,
                    item.attributes.category = req.body.category

                item.save()
                    .then(() => res.json(item))
                    .catch((err) => res.status(400).json('error:' + err));
            })
            .catch((err) => res.status(400).json('error:' + err));
    })
    .delete((req, res) => {
        Item.findByIdAndDelete(req.params.id)
            .then(() => res.json("deleted"))
            .catch((err) => res.status(400).json('error'));
    })

module.exports = router;