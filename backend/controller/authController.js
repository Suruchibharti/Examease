import Userr from '../Models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import otpp from '../Models/otp.js';
import nodemailer from 'nodemailer';




const sendOTPEmail = async (email, otp) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'itsabhishek75230@gmail.com',
                pass: 'deoj wehu ubjq nusr',
            },
        });


        const mailOptions = {
            from: 'itsabhishek75230@gmail.com',
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP for email verification is: ${otp}`,
        };


        await transporter.sendMail(mailOptions);
        console.log('OTP email sent successfully');
    } catch (error) {
        console.error('Error sending OTP email:', error);
        throw error;
    }
};



const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};


export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name);
        const existingUser = await Userr.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new Userr({ name, email, password: hashedPassword });
        await newUser.save();

        const otp = generateOTP();

        const newOTP = new otpp({ email, otp });
        await newOTP.save();
        await sendOTPEmail(email, otp);

        const requiresOtp = true;

        if (requiresOtp) {
            return res.status(200).json({ requiresOtp: true, message: 'OTP verification required' });
        } else {
            return res.status(201).json({ requiresOtp: false, message: 'User created successfully' });
        }
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ error: 'Internal Server Errorrrrr' });
    }
};






export const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;
        const otpVerification = await otpp.findOneAndDelete({ email, otp });
        if (!otpVerification) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }
        const userrr = await Userr.findOne({ email });
        userrr.isemailVerified = true;
        await userrr.save();
        res.status(200).json({ message: 'Email verification successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};




export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Userr.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const userr = await Userr.findOne({ email });
        if (userr.isemailVerified == false) {
            return res.status(401).json({ message: 'Email Not Verified' });
        }
        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '7h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
