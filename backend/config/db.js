import mongoose from "mongoose";

export const connectDB = async () =>{
    mongoose.connection.on('connected',()=> console.log("Database Connected"))
    await mongoose.connect(`${process.env.MONGOOB_URI}/food-del`)
}

export default connectDB