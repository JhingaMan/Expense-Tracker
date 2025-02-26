import express from "express";
import cors from "cors";
import { dbConnect } from "./dbConnect.js";
import dotenv from "dotenv";
import authRoute from "./Routes/AuthRoute.js"
import transactionRouter from "./Routes/transaction.js";
import cookieParser from "cookie-parser";
dotenv.config();

//giving cors permission and setting up the app
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true, 
  })
);
app.use(cookieParser());

//database connection establish
dbConnect();

//testing the process env file
const port = process.env.PORT;
console.log(port);

//testing the server
app.get("/", (req, res) => {
  res.send("API is working");
});

app.use("/transaction", transactionRouter);

app.use("/credentials", authRoute);

app.listen(port, () => {
  console.log(`App is listening to a port`);
});
