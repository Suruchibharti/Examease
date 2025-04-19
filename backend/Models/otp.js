
import mongoose from "mongoose";

const otpVerificationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 600, 
  },
});

const otpp = mongoose.model('OtpVerification', otpVerificationSchema);
export default otpp;
