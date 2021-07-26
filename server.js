'use strict'

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port=process.env.PORT || 8080
const {getDegURL,postDegURL,getDegFavURL,deleteDegFavURL,updateDegFavURL} = require('./controller/user.controller')
const mongoose = require('mongoose');
mongoose.connect(
'mongodb://samah:1234@degmond-shard-00-00.kchnw.mongodb.net:27017,degmond-shard-00-01.kchnw.mongodb.net:27017,degmond-shard-00-02.kchnw.mongodb.net:27017/degmond?ssl=true&replicaSet=atlas-105kwd-shard-0&authSource=admin&retryWrites=true&w=majority',
  // 'mongodb://localhost:27017/degmond',  
{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('atlas is connected');
}).catch((err)=>{
    console.log('error connected',err);
    process.exit();
});

app.get('/getDegURL',getDegURL)
app.post('/postDegURL',postDegURL)
app.get('/getDegFavURL',getDegFavURL)
app.delete('/deleteDegFavURL/:id',deleteDegFavURL)
app.put('/updateDegFavURL/:id',updateDegFavURL)
// app.get('/',(req,res)=>{
//     res.json('Is connected');
// })
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
  app.get('/', (req, res, next)=> {
    res.json('get connected');
  });
app.listen(port,()=>{
    console.log('Is connected');
})