import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const sendEmail = async (options) => {
  try {
    return await transporter.sendMail(options);
  } catch (error) {
    console.log(error);
  }
};

export { sendEmail };
