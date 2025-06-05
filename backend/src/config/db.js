import mongoose from 'mongoose';

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected successfully!")
    }
    catch(error){
        console.log("Error connecting to the database!", error)
        process.exit(1); //1 means exit with failure
    }
}