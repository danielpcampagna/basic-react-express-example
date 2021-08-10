import express from 'express';
import { UserController } from '../controllers/users.controller';

export const users = express.Router();

users.get("/users", (req, res) => {
    const promise = UserController.read();
    promise.then(data => res.status(200).json(data))
});