import mongoose from "mongoose";
    
const connectToDb = async callback => {
    try {
        const connection = await mongoose.connect(process.env.DB_URL) /** what is the difference between mongoose.connect() and mongoose.createConnection()*/
        await callback(connection)
        mongoose.connection.close()
    } catch (error) {
        console.log(error);
    }
}

export default connectToDb