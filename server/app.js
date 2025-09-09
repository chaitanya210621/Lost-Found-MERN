require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// -----------------------------
// Mongoose Setup
// -----------------------------
mongoose.set('strictQuery', true); // Suppress strictQuery warning

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/lostfound";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Stop server if DB connection fails
});

// -----------------------------
// Routes (Import your routes here)
// -----------------------------
const userRoutes = require('./routes/userRoutes'); // adjust path if needed
const itemRoutes = require('./routes/itemRoutes'); // example

app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

// -----------------------------
// Serve React Build (Production)
// -----------------------------
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// -----------------------------
// Start Server
// -----------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
