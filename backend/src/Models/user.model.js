import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        uique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
        default:""
    },
    occupation:{
        type:String,
        default:""
    },
    photoUrl:{
        type:String,
        default:""
    },
    instagram:{
        type:String,
        default:""
    },
    linkdin:{
        type:String,
        default:""
    },
    github:{
        type:String,
        default:""
    },
    facebook:{
        type:String,
        default:""
    },

},{timestaps:true})

export const User = mongoose.model("User",userSchema)