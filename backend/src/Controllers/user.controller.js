import { User } from "../Models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registor = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    //check
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all feedles required",
      });
    }

    //  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // if(!emailRegex.text(email)){
    //     return res.status(400).json({
    //         success:false,
    //         message:"youname@gmail.com"
    //     })
    // }

    if (password < 6) {
      return res.status(400).json({
        success: false,
        message: "password must be 6",
      });
    }
    const alreadyExitedUser = await User.findOne({ email });

    if (alreadyExitedUser) {
      return res.status(400).json({
        success: false,
        message: "email already exist",
      });
    }

    const hashPassword = await newFunction(password);

    await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      success: true,
      message: "account create successfully",
    });
  } catch (error) {
    console.log(`error something in registor controller \n${error}`);
    return res.status(500).json({
      success: false,
      message: "faild to regisotr",
    });
  }

  async function newFunction(password) {
    return await bcrypt.hash(password, 10);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ✅ Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

  
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password credentials",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000, 
    });

    return res.status(200).json({
      success: true,
      message: `Welcome back ${user.firstName}`,
      user,
    });
  } catch (error) {
    console.error("❌ Error in login:", error);
    return res.status(500).json({
      success: false,
      message: "Error in login function",
    });
  }
};

export const logout = async(req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge: 0}).json({
            message:"logout successfully",
            success:false
        })
    } catch (error) {
        console.log(`some error in logout function error `)
    }
}