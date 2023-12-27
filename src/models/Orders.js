import mongoose from "mongoose";

const schema = new mongoose.Schema({
    items:[
        {
            productID:{
                type:mongoose.Schema.Types.ObjectId
            },
            quantity:{
                type:Number,
            },
            unitPrice:{
                type:Number
            }
        }
    ],
    customerDetail:{
        firstName:String,
        lastName:String,
        phone:String,
        email:String,
        city:String,
        address:String,
    },
    status:{
        type:String,
        default:"Pending",
        required:true,
        enum:[
            "Pending",
            "Shipped",
            "Delivered",
            "Cancelled",
        ]
    },
    remarks:String
},{timestamps:true})


export default mongoose.models?.orders || mongoose.model("orders",schema)