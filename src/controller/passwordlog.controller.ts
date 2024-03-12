import { Request, Response } from "express";
import PasswordLog from "../model/passwordlog.model";

export const CreatePasswordLog = async (res: Response, data) => {
  try {
    const { new_data, old_data, _id } = data;
    await PasswordLog.create({
      model: "CREATE",
      document_id: _id,
      old_data: old_data,
      new_data: new_data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const UpdatePasswordLog = async (res: Response, data) => {
  try {
    const { new_data, old_data, _id } = data;
    await PasswordLog.create({
      model: "UPDATE",
      document_id: _id,
      old_data: old_data,
      new_data: new_data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const DeletePasswordLog = async (res: Response, data) => {
  try {
    const { new_data, old_data, _id } = data;
    await PasswordLog.create({
      model: "DELETE",
      document_id: _id,
      old_data: old_data,
      new_data: new_data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
