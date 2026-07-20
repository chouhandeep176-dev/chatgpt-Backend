import mongoose from "mongoose";

const connect_DB = async () => {
  try {
    await mongoose.connect(process.env.DB_connection_string);
    console.log("Connected  to DB :)");
  } catch (err) {
    console.log("Error connection to DB : ", err);
  }
};

export default connect_DB;
