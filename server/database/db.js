import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
   const URL  = `mongodb://${USERNAME}:${PASSWORD}@ac-vxgy1yi-shard-00-00.zfzbhsx.mongodb.net:27017,ac-vxgy1yi-shard-00-01.zfzbhsx.mongodb.net:27017,ac-vxgy1yi-shard-00-02.zfzbhsx.mongodb.net:27017/?ssl=true&replicaSet=atlas-ngmuw8-shard-0&authSource=admin&retryWrites=true&w=majority`

  try {
    await mongoose.connect(URL, { useunifiedTopology: true });
    console.log("Database Connected Successfully")
  } catch (error) {
    console.log("Error While connnecting with the database", error.message);
  }
};

export default Connection;
