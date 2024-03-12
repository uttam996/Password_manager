import Password from "../model/password.model";
import { Request, Response } from "express";
import { Decrypt, Encrypt, paginationKey } from "../utlits";
import { CreatePasswordLog } from "./passwordlog.controller";

export const GetAllPasswords = async (req: Request, res: Response) => {
  try {
    // await Password.deleteMany({});

    // let passwordss = new Array(50).fill({
    //      copyCount: Math.floor(Math.random() * 100) + 1,
        
    //       userName: "test",
    //       webSiteName: "test",
    //       Url: "test",
    //       password: Encrypt("test"),

    // })

    // await Password.insertMany(passwordss)
   
    const { search, page, limit, skip } = paginationKey(req);
    const searchQuery =  {
        $or: [
            { userName: { $regex: search, $options: "i" } },
            { webSiteName: { $regex: search, $options: "i" } },
            { Url: { $regex: search, $options: "i" } },
        ],
    }
    const passwords = await Password.find(searchQuery).sort({ copyCount: -1 }).skip(skip).limit(limit);


    return res.status(200).json(passwords);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

export const CreatePassword = async (req: Request, res: Response) => {
  try {
    req.body.password = Encrypt(req.body.password);
    const password = await Password.create(req.body);
    await CreatePasswordLog(res, {
        new_data: password,
        old_data: "",
        _id: password._id,
    });

    return res.status(201).json(password);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const GetPassword = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const password = await Password.findById(id);
    password.copyCount += 1;
    password.save();


    if (!password) {
      return res.status(404).json({ message: "Password not found" });
    }
    return res.status(200).json(Decrypt(password.password));
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
