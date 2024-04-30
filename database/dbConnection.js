import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URL, { dbName: "MERN_STACK_EVENT_MESSAGE" }).then(() => {
        console.log("Connected to database!")
    }).catch((err) => {
        console.log("Some error occured while connecting the database: ", err)
    })
}