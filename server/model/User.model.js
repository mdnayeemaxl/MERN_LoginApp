import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    username : {
        type: String,
        required : [true, " Please provide unique User Name"],
        unique :[true, "User Exist"]
    },
    password : {
        type :String,
        required :[true, "Please provide a Password"],
        unique : false,
    },
    email : {
        type : String,
        required :[true , "Please Provide Unique Email"],
        unique : true,
    },
    firstName: {type : String},
    lastName : {type : String},
    mobile : { type : String},
    address : {type: String},
    profile : { type : String},

});

export default mongoose.model.Users || mongoose.model('User', UserSchema);