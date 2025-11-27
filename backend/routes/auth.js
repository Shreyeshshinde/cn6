const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Registration API
router.post("/register", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send({ message: "User Registered Successfully" });
});

// Login API
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) return res.status(400).send({ message: "Invalid Credentials" });
    res.send(user);
});

module.exports = router;
