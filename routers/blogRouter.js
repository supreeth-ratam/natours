const express = require('express');
const Blog = require('../models/blogModel');

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json({
            status: "success",
            data: blogs
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message:err
        })
    }
}

const addBlog = async(req, res) => {
    try {
        await Blog.create(req.body)
        res.status(200).json({
            status: "success",
            message: req.body
        })
    } catch (err) {
        res.status(404).json({
            status: "failed",
            message:err
        })
    }
}

const Router = express.Router()

Router.route('/').get(getAllBlogs).post(addBlog)



module.exports = Router;
