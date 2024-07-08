import mongoose from "mongoose"

mongoose.set("strictQuery", false)

const connect_db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB.");
  } catch (error) {
    console.log("Error connecting to Database",error);
  }
};

export { connect_db }