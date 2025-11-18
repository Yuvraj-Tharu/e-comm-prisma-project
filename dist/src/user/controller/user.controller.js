"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_repository_1 = require("../repository/user.repository");
exports.UserController = {
    async createUser(req, res) {
        try {
            const user = await user_repository_1.UserRepository.createUser(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to create user" });
        }
    },
    async getAllUsers(req, res) {
        try {
            const users = await user_repository_1.UserRepository.getAllUsers();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ error: "Failed to fetch users" });
        }
    },
    async getUserById(req, res) {
        try {
            const user = await user_repository_1.UserRepository.getUserById(Number(req.params.id));
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: "Failed to fetch user" });
        }
    },
    async updateUser(req, res) {
        try {
            const user = await user_repository_1.UserRepository.updateUser(Number(req.params.id), req.body);
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: "Failed to update user" });
        }
    },
    async deleteUser(req, res) {
        try {
            await user_repository_1.UserRepository.deleteUser(Number(req.params.id));
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: "Failed to delete user" });
        }
    },
};
