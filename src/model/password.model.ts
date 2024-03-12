import mongoose from "mongoose";

const { Schema } = mongoose;

const passwordSchema = new Schema(
  {
    password: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    Url: {
      type: String,
      required: true,
    },
    webSiteName: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    
    },
    copyCount: {
      type: Number,
      default: 0,
    
    },
  },
  {
    timestamps: true,
  }
);

const Password = mongoose.model("Password", passwordSchema);
export default Password;
