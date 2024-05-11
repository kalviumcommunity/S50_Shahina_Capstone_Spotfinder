const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    UserName:{ type: String, required: true, unique: true },
    Spot:{ type: String, required: true },
    Location:{ type: String, required: true },
    Image:{ type: String, required: true },
    Description:{ type: String, required: true },
    // Like:{ type: Number, required: true },
    // Unlike:{ type: Number, required: true },
    // Comment:{ type: String, required: true }
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;