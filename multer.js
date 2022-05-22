var expressd = require('express')
var multer = require('multer')

var express = require("express");
var multer = require("multer");
var app = express();
var path = require('path')
var fileengine = multer.diskStorage({
    destination: 'images',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() +      // file.fieldname is name of the field (image)
            path.extname(file.originalname));             // path.extname get the uploaded file extension
    }
});
const imageUpload = multer({
    storage: fileengine,
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})
// For Single image upload
app.post('/uploadImage', imageUpload.single('image'), (req, res) => {
    res.send(req.file)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})
app.post('/uploadlargeImage', imageUpload.array('images', 4), (req, res) => {
    res.send(req.files)
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})
app.listen(5000)
