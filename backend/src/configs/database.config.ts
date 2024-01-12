import { connect } from "mongoose";

export const dbConnect = () => {
  connect(process.env.MONGO_URI!).then(
    () => console.log("Connected successfully"),
    (error) => console.log(error)
  );
};
