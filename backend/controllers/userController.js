const User = require('../models/user');
const { Op } = require('sequelize');

// Create a new user
exports.createUser = async (req, res) => {
    const { name, username, password } = req.body;
    try {
        const user = await User.create({
            name,
            username,
            password
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all users with pagination, sorting, and search
exports.getAllUsers = async (req, res) => {
    try {
        const { page = 1, size = 10, sortField = 'id', sortOrder = 'ASC', search = '' } = req.query; // Default values
        const limit = parseInt(size);
        const offset = (page - 1) * limit;

        // Create the where clause for search functionality
        const where = search
            ? {
                [Op.or]: [
                    { name: { [Op.like]: `%${search}%` } },
                    { username: { [Op.like]: `%${search}%` } }
                ]
            }
            : {};

        const { count, rows } = await User.findAndCountAll({
            limit,
            offset,
            order: [[sortField, sortOrder.toUpperCase()]],
            where
        });

        res.status(200).json({
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page),
            pageSize: limit,
            users: rows
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a user by ID
exports.updateUser = async (req, res) => {
    try {
        const [updated] = await User.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedUser = await User.findByPk(req.params.id);
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
