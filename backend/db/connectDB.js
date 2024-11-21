import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        // console.log("MONGO_URL conne cting : ", process.env.MONGO_URL);
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log("Error Connection to Mongodb: ", error.message);
        process.exit(1); //1 is failure, 0 status code is success
    }
}