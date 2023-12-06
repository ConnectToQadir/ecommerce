import mongoose from "mongoose";

var schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    feturedImage:{
        url:String,
        altText:String
    },
    relatedImages:[
        {
            url:String,
            altText:String
        }
    ],
    category:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true,
        default:0
    }
},{timestamps:true})

export default mongoose.models.products || mongoose.model("products",schema)