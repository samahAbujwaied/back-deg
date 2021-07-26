'use strict'
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port=process.env.PORT
const {getDegURL,postDegURL,getDegFavURL,deleteDegFavURL,updateDegFavURL} = require('./controller/user.controller')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/degmond',
{useNewUrlParser: true, useUnifiedTopology: true});

app.get('/getDegURL',getDegURL)
app.post('/postDegURL',postDegURL)
app.get('/getDegFavURL',getDegFavURL)
app.delete('/deleteDegFavURL/:id',deleteDegFavURL)
app.put('/updateDegFavURL/:id',updateDegFavURL)
app.get('/',()=>{
    res.send('Is connected');
})
app.listen(port,()=>{
    console.log('Is connected');
})