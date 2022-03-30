import mongoose from "mongoose";
import { env } from 'process';

const connectToDb = async (callback:any) => {
    try {
        const connection = await mongoose.connect(env.DB_URL as string)
        await callback(connection)
    } catch (error) {
        console.log(error);
    }
}

export default connectToDb