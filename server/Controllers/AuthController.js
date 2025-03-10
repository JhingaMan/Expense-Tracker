import userModel from "../Models/userModel.js";
import createSecretToken from "../utils/SecretToken.js";
import bcrypt from "bcryptjs";

const Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User Already Exists" });
    }
    const user = await userModel.create({
      email,
      password,
      username,
      createdAt,
    });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.log(error);
  }
};

const Login = async (req, res, next) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({message : "User logged in successfully" , success: true})
    next()
  } catch (error) {
    console.log(error);
  }
};

export  {Signup , Login};
