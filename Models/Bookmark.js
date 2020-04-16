const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookmarkSchema = new schema ({
    Link :{
        type: String,
        unique: true
    },
    Title:{
        type: String
    },
    Publisher:{
        type:String
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date, 
        default: Date.now
    },
    Tags: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
});

bookmarkSchema.path('Link').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

bookmarkSchema.pre('save', function(next){
    now = new Date().getTime();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

const Bookmark = mongoose.model("bookmark", bookmarkSchema);

module.exports = Bookmark;