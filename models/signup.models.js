import mongoose from 'mongoose'

const SignupSchema = new mongoose.Schema({
    UserId:{
        required:true,
        type:String,
        unique:true
    },
    Name:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    ConfirmPassword:{
        type:String,
        required:true,

    }

},
{
    timestamps:true
} );

export const signup  =mongoose.model('SignUp',SignupSchema);