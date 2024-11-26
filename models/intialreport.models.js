import mongoose from 'mongoose';

const InitialReportSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Gender: {
        type: String,
        enum: [
            "Male",
            "Female",
            "Other"
        ], default: 'Male'
    },
    // Physical Measurement
    Height: {
        type: Number,
        required: true
    },
    Weight: {
        type: Number,
        required: true
    },
    // Life Style Information
    PhysicalActivity: {
        type: String,
        enum: [
            'sedentary',
            'moderately active',
            'highly active'
        ],
        default: 'moderately active'
    },
    DietaryPreference: {
        type: String,
        enum: [
            'vegetarian',
            'non-vegetarian',
            'vegan'
        ],
        default: 'vegetarian'
    },
    SleepDuration: {
        type: Number,
        required: true
    },

    SmokingHabits: {
        type: Boolean,
        default: false
    },
    AlcoholConsumption:{
        type:Boolean,
        default:false
    },
    FamilyHistory:{
        type:String,
        enum:[
            "None",
            'Diabetes',
            'Hypertension',
            'Blood Pressure',
            'Others'
        ],default:'None'
    },
    WaistCircumference:{
        type:Number,
        required:true
    },
    StressLevel:{
        type:Number,
        enum:[
            0,
            1,
            2,
            3,
            4,
            5
        ],
        default:2
    },
    WaterIntake:{
        type:Number,
    },
    CurretAccomodation:{
        type:String,
        required:true
    }


}, { timestamps: true })