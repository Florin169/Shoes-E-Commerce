import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Florin:florin169@test.swa7g.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true }
    );

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

export default db;
