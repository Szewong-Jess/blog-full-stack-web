import jwt from "jsonwebtoken";

const createToken = (payload) => {
  return jwt.sign(payload, process.env.PRIVATE_KEY, {
    expiresIn: "30d",
  });
};

export { createToken };
