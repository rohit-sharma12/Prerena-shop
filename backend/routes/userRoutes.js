const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        //Signup
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User is already exists" });

        user = new User({ name, email, password });
        await user.save();

        //JWT Payload
        const payload = { user: { id: user.id, role: user.role } };

        //Sign and return token a;ong with user data
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "20h" }, (err, token) => {
            if (err) throw err;

            res.status(201).json({
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token,
            })
        });

    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error")
    }
});

//login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid Credentials" });
        const isMatch = await user.matchPassword(password);

        if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

        //JWT Payload
        const payload = { user: { id: user.id, role: user.role } };

        //Sign and return token a;ong with user data
        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5h" }, (err, token) => {
            if (err) throw err;

            res.json({
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token,
            })
        });

    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error")
    }
});

//User Profile
router.get("/profile", protect, async (req, res) => {
    res.json(req.user);
})

module.exports = router;