const express = require("express");
const User = require("../models/User");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", protect, admin, async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" })
    }
})

//add new user (admin only)
router.post("/", protect, admin, async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        user = new User({
            name,
            email,
            password,
            role: role || "customer",
        });
        await user.save();
        res.status(201).json({ message: "User created successfullu", user })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" })
    }
})

//delete user

router.delete("/:id", protect, admin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (user) {
            await user.deleteOne();
            res.json({ message: "User deleted successfully" })
        } else {
            res.status(404).json({ message:"User not found" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" })
    }
})


module.exports = router;