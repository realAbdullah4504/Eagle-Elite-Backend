const Cart = require('../models/cart.models');
const router = require('express').Router();

router.route('/')
    .post((req, res) => {
        const cart = new Cart(req.body);
        cart.save().then(() => res.json(cart))
            .catch(err => res.status(400).json('error' + err));
    })
    .get((req, res) => {
        Cart.find().populate("userId").exec()
            .then(cart => res.json(cart))
            .catch(err => res.status(400).json('error' + err));
    });
router.route('/:userId')
            .get((req, res) => {
                const userId = req.params.userId;
                Cart.find({ userId: userId })
                    .then(cart => {
                        res.json(cart);
                    })
                    .catch(err => res.status(400).json('error' + err));
            });
router.route('/order/:orderId')
    .get((req, res) => {
        const orderId = req.params.orderId;
        Cart.findById(orderId)
            .then((cart) => res.json(cart))
            .catch(err => res.status(400).json('error' + err));
    })
    .post((req, res) => {
        //console.log(req.body);
        //res.json(req.params.orderId);
        Cart.findById(req.params.orderId)
            .then(order => {
                order.orderStatus = req.body.name,
                order.save()
                    .then(() => res.json(order))
                    .catch((err) => res.status(400).json('error:' + err));
            })
            .catch((err) => res.status(400).json('error:' + err));
     });


module.exports = router;