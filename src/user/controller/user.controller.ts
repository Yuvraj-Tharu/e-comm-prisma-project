import { Request, Response } from "express";
import { UserRepository } from "../repository/user.repository";

export const UserController = {
  async createUser(req: Request, res: Response) {
    try {
      const user = await UserRepository.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to create user" });
    }
  },

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserRepository.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  },

  async getUserById(req: Request, res: Response) {
    try {
      const user = await UserRepository.getUserById(Number(req.params.id));
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch user" });
    }
  },

  async updateUser(req: Request, res: Response) {
    try {
      const user = await UserRepository.updateUser(
        Number(req.params.id),
        req.body
      );
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Failed to update user" });
    }
  },

  async deleteUser(req: Request, res: Response) {
    try {
      await UserRepository.deleteUser(Number(req.params.id));
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete user" });
    }
  },
};
