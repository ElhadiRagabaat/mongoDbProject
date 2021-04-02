const {Product} = require('../models/prodect.model')

exports.test = function(req,res){

    let product = Product.find({})
    
    

    res.send("connection");
}

exports.post_product = async(req,res)=>{

    let product = new Product(req.body)
    await product.save()
    res.json(product)
}

exports .product_test=  async(req,res)=>{
    let product = await  Product.find({})
    res.json(product)
}
exports.product_details = async(req,res)=>{
    let id = req.params.id

   let product = await  Product.findById({_id:id})
   res.json(product)

    
}

exports.product_update = async(req,res)=>{

    let idUpdate = req.params.idUpdate
    let product = await Product.updateOne({_id:idUpdate},req.body)
    res.json(product)

}

exports.product_delete =  async(req,res)=>{

let idDl = req.params.idDl

let product = await Product.deleteOne({_id:idDl})
res.json(product)
  
 
}