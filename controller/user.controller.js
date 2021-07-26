'use strict'
const axios = require('axios')
const { DigmondClass, DigmondModel } = require('../model/user.model')
function getDegURL(req, res) {
    axios
        .get(`https://digimon-api.vercel.app/api/digimon`)
        .then(result => {
            const getDataFromApi = result.data.map(item => {
                return new DigmondClass(item)
            })
            res.send(getDataFromApi)
        })
        .catch(() => {

            console.log('no data');
        })
}
function postDegURL(req, res) {
    console.log(req.body);
    const { img, name, level } = req.body;
    DigmondModel.find({ name: name }, (error, data) => {
        if (data.length > 0) {
            console.log("this also");
        } else {
            const postDegmond = new DigmondModel({
                img: img,
                name: name,
                level: level
            });
            postDegmond.save();
        } })
}
function getDegFavURL(req, res) {
    DigmondModel.find({}, (err, item) => { res.send(item) })
}
function deleteDegFavURL(req,res) {
    const {id}=req.params;
    DigmondModel.remove({_id:id},(err,item)=>{
    DigmondModel.find({}, (err, item) => { res.send(item) })
})}
function updateDegFavURL(req,res) {
  
    const {id} =req.params;
    const {img,name,level}= req.body
    DigmondModel.findOne({_id:id},(err,item)=>{
        item.img=img;
        item.name=name;
        item.level=level;
        console.log('---------------------');
        console.log(item);
        item.save().then(()=>
        DigmondModel.find({}, (err, item) => { res.send(item) })
        )
    })
}
module.exports = { getDegURL, postDegURL, getDegFavURL ,deleteDegFavURL,updateDegFavURL}
