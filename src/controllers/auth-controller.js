const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({
            username,
            email,
            password,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({
            msg: error,
        });
        console.log(error);
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
        return res.status(400).json({ msg: "User not found" });
    }
    const matchPassword = await User.comparePassword(password, user.password);
    if (!matchPassword) {
        return res.status(401).json({ token: null, msg: "Invalid password" });
    } else {
        const token = jwt.sign({ id: user._id }, process.env.SECRET_JWT, {
            expiresIn: 86400,
        });
        res.json({ token: token });
    }
};

module.exports = { Register, login };