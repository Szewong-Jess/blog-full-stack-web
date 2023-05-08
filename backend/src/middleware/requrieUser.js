import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { UserModel } from "../models/user.model.js";

const protect = async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.PRIVATE_KEY);

      req.user = await UserModel.findById(
        mongoose.Types.ObjectId(decoded.id)
      ).select("-password");

      next();
    } catch (error) {
      return res.status(401).send(error);
    }
  }

  if (!token) {
    return res.status(401).send("Not Authorized, no token");
  }
};

export { protect };
