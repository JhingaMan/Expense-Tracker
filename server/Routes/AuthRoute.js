import {Signup , Login}  from "../Controllers/AuthController.js";
import express from "express";

const authRoute = express.Router();

authRoute.post("/signup", Signup);
authRoute.post("/login", Login)

export default authRoute;
