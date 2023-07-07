import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    make: {
        type: String,
        required: [true, 'Make is required']
    },
    model: {
        type: String,
        required: [true, 'Model is required']
    },
    year: {
        type: String,
        required: [true, 'Year is required']
    },
    price: {
        type: String,
        required: [true, 'Price is required']
    },
    km: {
        type: String,
        required: [true, 'Kilometers required']
    },
    displacement: {
        type: String,
        required: [true, 'Displacement is required']
    },
    hp: {
        type: String,
        required: [true, 'Horse Power is required']
    },
    color: {
        type: String,
        required: [true, 'Color is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    }
});

const Post = models.Post || model('Post', postSchema);

export default Post;