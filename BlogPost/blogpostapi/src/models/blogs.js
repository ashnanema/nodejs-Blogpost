const mongoose = require("mongoose")
const validator = require("validator")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    likes: {
        type: Number,
        default: 0
    }
})

const Blog = new mongoose.model('Blog', blogSchema)
module.exports = Blog