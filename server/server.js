import express from "express";
import cors from "cors";
import { dbConnect } from "./dbConnect.js";
import dotenv from "dotenv";
import router from "./Routes/transaction.js";
import Authroute from "./Routes/AuthRoute.js";
import cookieParser from "cookie-parser";
dotenv.config();

//giving cors permission and setting up the app
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
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

app.use("/transaction", router);

app.use("/credentials", Authroute);

app.listen(port, () => {
  console.log(`App is listening to a port`);
});
