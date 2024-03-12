
import mongoose from "mongoose";


const PasswordLogSchema = new mongoose.Schema({
    model:{
        type: String,
        required: true,
        enum: ["CREATE", "UPDATE", "DELETE",]
    },
    document_id: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Password"
    },
    // json object
    old_data: {
        type: String,
        required: false,
    },
    new_data: {
        type: String,
        required: false,
    },
},{
    timestamps: true
});

const PasswordLog = mongoose.model("PasswordLog", PasswordLogSchema);
export default PasswordLog;
