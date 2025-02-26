import userModel from "../Models/userModel.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) return res.json({ status: false });
    else {
      const user = await userModel.findById(data.id);
      if (user) return res.json({ status: true, user: user.username });
      else return res.json({ status: false });
    }
  });
};

//middleware to extract the user
const extractUser = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false, message: "cannot fetch data" });
  }
  try{
    const data = jwt.verify(token , process.env.TOKEN_KEY)
    req.user = await userModel.findById(data.id).select("-password");
    next();
  }catch(error){
    console.log(error)
  }
};

export {userVerification , extractUser};
