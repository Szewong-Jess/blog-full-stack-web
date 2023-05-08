import { UserModel } from "../models/user.model.js";

//
const createUser = async (payload) => {
  // new User(payload)
  return await UserModel.create(payload);
};

// crud
const findUserByEmail = async (payload) => {
  return await UserModel.findOne({ email: payload });
};

const findUserById = async (id) => {
  return await UserModel.findById(id);
};

const updateUser = async (id, payload) => {
  return await UserModel.findByIdAndUpdate(id, payload, { new: true });
};

export { createUser, findUserByEmail, findUserById, updateUser };
