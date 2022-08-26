import UserModel from "../models/UserModel.js";

const addUser = async (req, res) => {
  try {
    const doc = new UserModel(req.body);
    const result = await doc.save();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const result = await UserModel.find();
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const getById = async (req, res) => {
  try {
    const result = await UserModel.findById(req.params.id);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await UserModel.findByIdAndUpdate(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await UserModel.findByIdAndDelete(req.params.id);
    res.status(204).json(result);
  } catch (error) {
    console.log(error);
  }
};

export { addUser, getAllUser,updateUser, getById, deleteUser };
