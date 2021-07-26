'use strict'
const mongoose = require('mongoose');
class DigmondClass{
    constructor(item){
        this.img=item.img;
        this.name=item.name;
        this.level=item.level
    }
}
const DigmondSchema = new mongoose.Schema({
    img:String,
    name:String,
    level:String,
})
const DigmondModel = mongoose.model('Digmond',DigmondSchema)

module.exports = {DigmondClass,DigmondModel}