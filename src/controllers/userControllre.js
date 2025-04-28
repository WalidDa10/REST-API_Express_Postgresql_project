import { createUserService, getAllUsersService, getUserByIdService, updateUserService , deleteUserService } from "../models/userModel.js";

// Standardized response function 
const HandleResponse = (res , status , message, data = null) =>{
    res.status(status).json({
        status,
        message,
        data
    })
}


export const createUser = async (req, res, next) => {
    const {name , email} = req.body;
    try {
        const newUser = await createUserService(name , email);
        HandleResponse(res , 201 , 'User Created Successfully', newUser)
    } catch (err) {
        next(err)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const Users = await getAllUsersService();
        HandleResponse(res , 200 , 'User Fetched Successfully', Users)
    } catch (err) {
        next(err)
    }
}


export const getUserById = async (req, res, next) => {
    try {
        const UserById = await getUserByIdService(req.params.id);
        if (!UserById) { return HandleResponse(res, 404, 'User not found') }
        HandleResponse(res , 200 , 'User Fetched Successfully', UserById)
    } catch (err) {
        next(err)
    }
}


export const updateUser = async (req, res, next) => {
    const { name, email } = req.body;
    try {
      const updatedUser = await updateUserService(req.params.id, name, email);
      if (!updatedUser)  HandleResponse(res, 404, "User not found");
      HandleResponse(res, 200, "User updated successfully", updatedUser);
    } catch (err) {
      next(err);
    }
  };
  
  export const deleteUser = async (req, res, next) => {
    try {
      const deletedUser = await deleteUserService(req.params.id);
      if (!deletedUser) return HandleResponse(res, 404, "User not found");
      HandleResponse(res, 200, "User deleted successfully", deletedUser);
    } catch (err) {
      next(err);
    }
  };
  