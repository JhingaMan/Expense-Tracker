import {Signup , Login}  from "../Controllers/AuthController.js";
import express from "express";
import userVerification from "../utils/AuthMiddleware.js";

const authRoute = express.Router();

authRoute.post("/signup", Signup);
authRoute.post("/login", Login)
authRoute.post("/", userVerification)

export default authRoute;
