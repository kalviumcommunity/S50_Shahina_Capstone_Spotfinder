const express = require('express');
const router = express.Router();
const postModel = require('../Schema/Post_Schema');
const Joi = require('joi');
const jsonWebToken = require('jsonwebtoken')
require('dotenv').config()


const PostValidationSchema = Joi.object({
    UserName: Joi.string().alphanum().min(4).max(15).required(),
    Spot: Joi.string().required(),
    Location: Joi.string().required(),
    Image: Joi.string().required(),
    Description: Joi.string().required(),
    Like: Joi.number().required(),
    Unlike: Joi.number().required()
    
    
})


function validatePostData(req, res, next) {
    const { error } = PostValidationSchema.validate(req.body)
    if (error) {
        return res.status(400).json({ error: error.details[0].message })
    }
    next();}


router.get("/", async (req, res) => {
    try {
        const users = await postModel.find();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred");
    }
});

router.get("/post/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await postModel.findById(postId);
        if (!post) {
            return res.status(404).send("Post not found");
        }
        res.json(post);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});


router.put("/update/:id",  async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await postModel.findByIdAndUpdate(postId, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(updatedPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while updating the post" });
    }
});

router.post("/",async (req, res) => {
    console.log("req-body",req.body)
    try {
        const newPost = await postModel.create(req.body);
        console.log(newPost)
        res.status(201).json(newPost);
    } catch (error) {
        console.log(error); // Log the full error object
        res.status(500).send("An error occurred: " + error.message); // Include error message in response
    }
    
});

router.delete("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedpost = await postModel.findByIdAndDelete(postId);
        res.json(deletedpost)
    } catch (error) {
        console.log(error);
    }
});


module.exports = router;

