import mongoose from 'mongoose'

//creating Schema(Table) for Hotel
const UserShema = new mongoose.Schema({
    username :{
       type : String,
       required : true,
       unique:true
    },
    email : {
        type : String,
        required : true,
        unique:true
    },
    country: {
        type : String,
        required : true
    },
    img: {
        type : String
    },
    city:{
        type : String,
        required : true
    },
    phone:{
       type : String,
       required : true,
    },
    password: {
        type : String,
        required : true
    },
    isAdmin : {
        type : Boolean,
        default : false
    }, 
},
{ timestamps : true}
);

export default mongoose.model("user", UserShema); //Hotel is model name and HotelSchema is schema name(Table)