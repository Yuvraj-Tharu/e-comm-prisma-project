"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const prisma_cilent_1 = __importDefault(require("../../helper/prisma_cilent"));
exports.UserRepository = {
    async createUser(data) {
        return prisma_cilent_1.default.user.create({
            data,
        });
    },
    async getAllUsers() {
        return prisma_cilent_1.default.user.findMany();
    },
    async getUserById(id) {
        return prisma_cilent_1.default.user.findUnique({
            where: { id },
        });
    },
    async updateUser(id, data) {
        return prisma_cilent_1.default.user.update({
            where: { id },
            data,
        });
    },
    async deleteUser(id) {
        return prisma_cilent_1.default.user.delete({
            where: { id },
        });
    },
};
