import Password from "../model/password.model";
import { Request, Response } from "express";


export const GetAllPasswords = async (req: Request, res: Response) => {
   try {

  
     
    const passwords = await Password.find({}).sort({ createdAt: -1 });
    
    return res.status(200).json(passwords);
    
    
   } catch (error) {
        return res.status(500).json({ message: error.message });
    
   }

};

export const CreatePassword = async (req: Request, res: Response) => {
    try {
        const password = new Password(req.body);
        await password.save();
        return res.status(201).json(password);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const GetPassword = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const password = await Password.findById(id);
        if (!password) {
            return res.status(404).json({ message: "Password not found" });
        }
        return res.status(200).json(password);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}




