import {connectToDB} from '@utils/database';
import Post from '@models/post';

export const POST = async (req) => {
    const { 
        userId, 
        title,
        description,
        make,
        model, 
        year,
        price,
        km,
        displacement,
        hp,
        color,
        image
    } = await req.json();
    try {
        await connectToDB();
        const newPost = new Post({
            creator: userId,
            title, 
            description,
            make,
            model,
            year,
            price,
            km,
            displacement,
            hp,
            color,
            image
        })

        await newPost.save();

        return new Response(JSON.stringify(newPost), {status: 201})
    } catch (error) {
        return new Response("Failed to create new post", {status: 500})
    }
}