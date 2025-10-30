const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoute");
const orderRoutes = require('./routes/orderRoutes');
const uploadRoutes = require("./routes/uploadRoutes");

// Load environment variables first
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
});

const PORT = process.env.PORT || 3000;

//Connect Mongodb
connectDB();

app.get("/", (req, res) => {
    res.send("Welcom to backend");
});

//API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
