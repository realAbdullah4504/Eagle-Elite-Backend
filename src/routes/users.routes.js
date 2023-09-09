const User = require('../models/users.models');
const router = require('express').Router();

router.route('/login')
    .get((req, res) => {
        //console.log(req);
        const users = {
            email: req.query.email,
            password: req.query.password,
        };
        //console.log(users);

        User.findOne({ email: users.email, password: users.password })
            .then(user => {
                if (user)
                    res.json(user)
                else res.json('not found')
            }).catch(err => res.status(400).json('Error' + err));
    });

router.route('/')
    .post((req, res) => {
        const user = new User(req.body);
        user.save().then(() => res.json(user))
            .catch(err => res.status(400).json('error' + err));
    })
    .get((req, res) => {
        User.find()
            .then(user => res.json(user))
            .catch(err => res.status(400).json('error' + err));
    });
router.route('/:userId')
    .get((req, res) => {
        const userId = req.params.userId;

        User.findById(userId)
            .then(user => res.json(user))
            .catch(err => res.status(400).json('error' + err));
    });


module.exports = router;