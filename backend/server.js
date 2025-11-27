const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ===== MongoDB Connection =====
const URI = "mongodb+srv://vinitshirbhate_db_user:2Kc8WRYvDiCYjUlv@cluster0.vanfgbi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URI 
)
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.error("MongoDB Connection Error:", err));

// ===== User Schema =====
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

// ===== Register API =====
app.post("/auth/register", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.send({ message: "User Registered Successfully" });
    } catch (error) {
        res.status(400).send({ message: "Registration Failed", error });
    }
});

// ===== Login API =====
app.post("/auth/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password });

        if (!user) {
            return res.status(401).send({ message: "Invalid Credentials" });
        }

        res.send({ message: "Login Successful", user });
    } catch (error) {
        res.status(500).send({ message: "Login Error", error });
    }
});

// ===== Server =====
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
