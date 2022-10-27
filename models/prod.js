import mongoose from "mongoose";

// Defining Schema

const prodSchema = new mongoose.Schema({
    SHOP_TYPE:{type:String,trim:true},
    BOGIE_TYPE:{type:String,trim:true},
    COACH_TYPE:{type:String,trim:true},
    DATE_CREATED:{type:String,trim:true},
    ASSIGNED_TO_RITES_QCI:{type:Boolean,default:false},
    JOB_ASSIGNED_A:{type:Boolean,default:false},
    JOB_ASSIGNED_B:{type:Boolean,default:false},
    JOB_ASSIGNED_C:{type:Boolean,default:false},
    JOB_ASSIGNED_D:{type:Boolean,default:false},
    AC2_LINK: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "ac2t",

    }],
   

    



});

// Model
const ProdModel = mongoose.model("job", prodSchema);

export default ProdModel;


