const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/blogs-db")
    .then(() => {
        console.log("connection successful")
    }).catch((err) => {
        console.log("connection failed")
    })
