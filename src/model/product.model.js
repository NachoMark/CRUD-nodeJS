const mongoose = require("mongoose")

const productSchema = mongoose.Schema ({
    name: String,
    quantity: Number,
    price: Number
})

const Product = mongoose.model("Product", productSchema) 

module.exports = Product
