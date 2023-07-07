import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is connected already !');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "new_post",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected = true;
        console.log('Mongo connected');
    } catch (error) {
        console.log(error);
    }
}