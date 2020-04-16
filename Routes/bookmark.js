const express = require("express");
const router = express.Router();
const Bookmark = require("../Models/Bookmark");

//Route to create Bookmark
router.post("/create", (req, res) =>{
    Bookmark.create(req.body).then((response) =>{ 
         res.send("Bookmark Created!");
    }).catch((err) =>{
        res.json({
            error:"Duplicate Link! Link must be unique."
        });
    })
})

//Route to retrieve all bookmarks
router.get("/retrieve", (req, res) =>{
    Bookmark.find().populate("tag").then((response) =>{
        res.send(response)
    }).catch((err) =>{
        res.send(err)
    })
})

// Route to delete bookmark
router.delete('/delete/:id', function(req, res){
    Bookmark.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send("Deleted Bookmark successfully");
    });
})

module.exports = router;