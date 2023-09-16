require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// process.env.ATLAS_URI;||;
const Uri =process.env.ATLAS_URL;
// const Uri ="mongodb://localhost:27017/Eagle-Elite";
mongoose.connect(Uri, { useNewUrlParser: true });

//for the routes notes
const itemsRouter = require('./src/routes/items.routes');
const usersRouter = require('./src/routes/users.routes');
const cartRouter = require('./src/routes/cart.routes');
const categoryRouter = require('./src/routes/category.routes');


app.use('/items', itemsRouter); //if anyone go to route '/' it will redirect to /items
app.use('/users', usersRouter); //if anyone go to route '/' it will redirect to /items
app.use('/cart', cartRouter); //if anyone go to route '/' it will redirect to /items
app.use('/category', categoryRouter); //if anyone go to route '/' it will redirect to /items

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Api is running!");
})

app.listen(port, () => {
    console.log("Express server listening on port " + port);
});


// router.param('id',(req,res,next,val)=>{
//     console.log(val);
//     next();
// })

// app.use((req,res,next)=>{
//     req.request='abc'
//     next();
// })