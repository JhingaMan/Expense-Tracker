import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () =>{
    console.log(`${process.env.DB_URI}`);
    mongoose.connection.on("connected" , () => { console.log('Database Connected')});

    mongoose.connect(`${process.env.DB_URI}`)
}


export {dbConnect};

