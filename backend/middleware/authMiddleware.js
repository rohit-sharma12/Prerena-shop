const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect routes
const protect = async (req, res, next) => {
    let token;

    try {
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Handle different token structures
            const userId = decoded.user?.id || decoded.id;
            if (!userId) {
                return res.status(401).json({ message: "Invalid token payload" });
            }

            // Fetch user from DB
            const user = await User.findById(userId).select("-password");
            if (!user) {
                return res.status(401).json({ message: "User not found" });
            }

            req.user = user;

            console.log("🧩 Incoming user in protect:", req.user._id, req.user.role);
            next();
        } else {
            return res.status(401).json({ message: "Not authorized, no token" });
        }
    } catch (error) {
        console.error("🛑 Protect middleware error:", error.message);
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
};

// Middleware to check if the user is admin
const admin = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        return res.status(403).json({ message: "Not authorized as an admin" });
    }
};

module.exports = { protect, admin };
