import argon2 from "argon2";
import { createToken } from "../utils/jwt.js";
import { createUser, findUserByEmail } from "../service/user.service.js";

const inforNotValid = "Information not valid";

const signupController = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) return res.status(400).send(inforNotValid);

  const isEmailExist = await findUserByEmail(email);

  if (isEmailExist) return res.status(400).send("User is existed");

  const user = await createUser({
    email: email,
    name: name,
    password: password,
  });

  if (!user) return res.status(401).send("User register failed");

  return res.status(202).send(user);
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).send(inforNotValid);

  const user = await findUserByEmail(email);

  if (!user) return res.status(404).send("User not found");

  const isMatch = await argon2.verify(user.password, password);

  if (!isMatch) return res.status(403).send("Password not match");

  return res.status(200).send({
    accessToken: createToken({ id: user._id, email: user.email }),
    user: {
      id: user._id,
      email: user.email,
      name: user.name,
    },
  });
};

export { signupController, loginController };
