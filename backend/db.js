const mongoose = require('mongoose')
// const mongoURI = "mongodb://127.0.0.1:27017/IMS";
const mongoURI = "mongodb+srv://iftekharlikhan:hackerman321@cluster0.goisl2o.mongodb.net/?appName=Cluster0";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
