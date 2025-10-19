import { User } from "../Models/user.model.js";
import bcrypt from 'bcryptjs'

export const registor= async(req,res) => {
    try {
        const {firstName,lastName,email,password} = req.body;
        //check
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({
            success:false,
            message:"all feedles required"
        })
       

        }

        //  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // if(!emailRegex.text(email)){
        //     return res.status(400).json({
        //         success:false,
        //         message:"youname@gmail.com"
        //     })
        // }
        if(password <6){
            return res.status(400).json({
                success:false,
                message:"password must be 6"
            })
        }
        const alreadyExitedUser = await User.findOne({email})
        
        if(alreadyExitedUser){
            return res.status(400).json({
                success:false,
                message:"email already exist"
            })

        
        }

        const hashPassword = await bcrypt.hash(password,10)


        await User.create({
            firstName,
            lastName,
            email,
            password:hashPassword
        })

        return res.status(201).json({
            success:true,
            message:"account create successfully"
        })
    } catch (error) {
        console.log(`error something in registor controller \n${error}`)
        return res.status(500).json({
            success:false,
            message:"faild to regisotr"
        })
    }
}