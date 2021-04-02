
const mongoose =require("mongoose")


let productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        max:100

    },
    price:{type:Number,required:true,min:20}
        
    

})

module.exports.Product =  mongoose.model("porduct",productSchema)