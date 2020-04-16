const express = require("express");
const router = express.Router();
const Tag = require("../Models/Tag");
const Bookmark = require("../Models/Bookmark");

// Route to create tag
router.post("/create", (req, res) =>{
   Tag.create(req.body).then((response) =>{
        res.send("Tag Created!");
    }).catch(
    (err) =>{
        res.json({
            error:"Duplicate Tag Title! Title must be unique."
        });
    })
})

//Route to add tag in Bookmark
router.post("/addTag/:id", (req, res) =>{
    Tag.findOne(req.body).then((response) =>{
            return Bookmark.findOneAndUpdate({_id : req.params.id}, {Tags: response._id}, {new: true});
        }).then((bookmark) =>{
            res.send(bookmark)
        }).catch((err) =>{
        res.json({
            error:"Duplicate Tag Title ! Title must be unique."
        });
    })
})

//Route to retrieve all tags
router.get("/retrieve", (req, res) =>{
    Tag.find().then((response) =>{
        res.send(response)
    }).catch((err) =>{
        res.send(err)
    })
})

//Route to delete Tag
router.delete('/delete/:id', function(req, res){
    Tag.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send("Deleted Tag successfully");
    });
})


module.exports = router;