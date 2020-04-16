const mongoose = require("mongoose");
const schema = mongoose.Schema;

const tagSchema = new schema ({
    Title:{
        type: String,
        unique: true
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date, 
        default: Date.now
    }
});

tagSchema.pre('save', function(next){
    now = new Date().getTime();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

const Tag = mongoose.model("tag", tagSchema);

module.exports =Tag;