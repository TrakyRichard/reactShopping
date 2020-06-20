import mongoose from "mongoose";

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    // Use existing database Connexions
    return;
  }
  //use a new data base connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  connection.isConnected = db.connections[0].readyState;
}

export default connectDb;
