const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title: {type: String, required:true},
    year: {type: Number, required:true},
    autor: {type: String, required: true},
    description: {type: String, required: false},
    category: {type: String, required: false}
})

module.exports = mongoose.model("books", bookSchema)