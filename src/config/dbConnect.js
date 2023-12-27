import mongoose from "mongoose";


function dbConnect(){
    if(mongoose.connection.readyState >= 1){
        return
    }
    mongoose.connect("mongodb+srv://qadir:qadir@edify.0i5koc5.mongodb.net/ecom?retryWrites=true&w=majority")
}


export default dbConnect