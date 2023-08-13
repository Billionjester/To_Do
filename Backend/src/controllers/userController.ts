// src/controllers/userController.ts
import { Request, Response } from 'express';
import UserModel, { UserDocument } from '../models/userModel';

class UserController {
    public async getUsers(req: Request, res: Response): Promise<void> {
        const users: UserDocument[] = await UserModel.find();
        res.json(users);
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        const user: UserDocument | null = await UserModel.findById(req.params.id);
        res.json(user);
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        const { name, email, age } = req.body;
        const newUser: UserDocument = new UserModel({ name, email, age });
        await newUser.save();
        res.json(newUser);
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        const { name, email, age } = req.body;
        const updatedUser: UserDocument | null = await UserModel.findByIdAndUpdate(
            req.params.id,
            { name, email, age },
            { new: true }
        );
        res.json(updatedUser);
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        const deletedUser: UserDocument | null = await UserModel.findByIdAndRemove(req.params.id);
        res.json(deletedUser);
    }
}

export default new UserController();
