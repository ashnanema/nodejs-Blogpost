const express = require("express")
require("./db/conn")
const Blog = require("./models/blogs")
var cors = require("cors")

const app = express()
const port = process.env.PORT || 1111

app.use(express.json())
app.use(cors())

app.post("/blogs", async (req, res) => {
    try {
        const user = new Blog(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

app.get("/blogs", async (req, res) => {
    try {
        const allBlogs = await Blog.find()
        res.send(allBlogs)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

app.get("/blogs/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const singleBlog = await Blog.findById(_id)
        if (!singleBlog)
            return res.status(404).send()
        else
            res.send(singleBlog)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

app.delete("/blogs/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const blogToDel = await Blog.findByIdAndDelete(_id)
        if (!_id)
            return res.status(400).send()
        else
            res.send(blogToDel)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

app.patch("/blogs/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const blogToUpdate = await Blog.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(blogToUpdate)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

app.listen(port, () => {
    console.log(`connection successful at port ${port}`)
})