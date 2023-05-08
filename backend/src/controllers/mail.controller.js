import { sendEmail } from "../utils/nodemailer.js";

const sendMailController = async (req, res) => {
  const { to, name, text } = req.body;

  if (!to || !name || !text) {
    return res.status(400).send("Information is not complete");
  }

  const mailData = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `${to} just drop you a message`,
    text: text,
    html: `<b>Hey there! </b><br>${name} just leave you a message !<br/>
    <p>${text}</p>
    `,
  };

  const isSend = await sendEmail(mailData);

  if (isSend) return res.status(200).send("Email sent");

  return res.status(400).send("Email sent failed");
};

const sendSubscribeEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send("Email is not defined");
  }

  const mailData = {
    from: process.env.EMAIL,
    to: email,
    subject: "Thanks for subscribe",
    text: "You're now subscribe to Jess blog",
    html: "<b>Thanks!</b><br>Your subscribe is my motivation to post!</br>",
  };

  const isSend = await sendEmail(mailData);

  if (isSend) return res.status(200).send("Subscribed");

  return res.status(400).send("SubScribe failed");
};

export { sendMailController, sendSubscribeEmail };
