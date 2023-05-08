import mongoose from "mongoose";
import * as argon2 from "argon2";

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: [true, "Please input email"],
      unique: true,
    },
    name: {
      type: String,
      require: [true, "Please input name"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please input a password"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const hash = await argon2.hash(this.password);
    this.password = hash;
    return next();
  } catch (error) {
    return next(error);
  }
});

export const UserModel = mongoose.model("User", userSchema);
