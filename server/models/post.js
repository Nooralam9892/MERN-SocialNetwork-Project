import mongoose from "mongoose";
import {ObjectId} from "mongoose.Schema.types";

const postSchema = new mongoose.Schema({
title:{
    type:String,
    required:true
},
body:{
    type:String,
    required:true
},
photo:{
    type:String,
    required:true

},
postedBy:{
    type:ObjectId,
    ref:"users"
},

});


mongoose.model("Post",postSchema);
