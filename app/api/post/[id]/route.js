import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const post = await Post.findById(params.id).populate('creator')
        if (!post) return new Response("Post not found !", { status: 404 })
        return new Response(JSON.stringify(post), {
            status: 200
        })
    } catch (error) {
        return new Response('Failed to fetch data', {
            status: 500
        })
    }
}

export const PATCH = async (request, { params }) => {
    // const { title, description, make, model, year, price, km, displacement, hp, color, image} = await request.json();
    const { title, description, make, model, year, price, km, displacement, hp, color, image} = await request.json();
    try {
        await connectToDB();
        const existingPost = await Post.findById(params.id);
        if (!existingPost) return new Response("Post not found !", { status: 404 })

        existingPost.title = title;
        existingPost.description = description;
        existingPost.make = make;
        existingPost.model = model;
        existingPost.year = year;
        existingPost.price = price;
        existingPost.km = km;
        existingPost.displacement = displacement;
        existingPost.hp = hp;
        existingPost.color = color;
        existingPost.image = image;

        await existingPost.save();
        return new Response(JSON.stringify(existingPost), {
            status: 200
        })
    } catch (error) {
        return new Response('Failed to update post !', {
            status: 500
        })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        await Post.findByIdAndRemove(params.id)

        return new Response("Post deleted successfully !", {
            status: 200
        })
    } catch (error) {
        return new Response('Failed to delete post !', {
            status: 500
        })
    }
}