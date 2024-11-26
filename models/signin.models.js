import mongoose from 'mongoose'

const SignInSchema = new mongoose.Schema({
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"signup "
    },
    Password:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"signup"
    }

},{timestamps:true})

export const signin = mongoose.model("SignIn",SignInSchema);