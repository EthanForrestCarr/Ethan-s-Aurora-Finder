import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'; // Adjust the import path as necessary
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Register User
router.post('/register', async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = await User.create({ name, email, password: hashedPassword });

        // Respond with success message
        res.status(201).json({ message: 'User registered successfully', user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
    return;
});

// Login User
router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create JWT payload
        const payload = {
            userId: user.id,
            name: user.name,
        };

        // Sign token
        const token = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });

        // Respond with token
        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
    return;
});

export default router;
