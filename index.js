require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const { protect } = require("./middleware/authMiddleware");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", protect, taskRoutes);

const PORT = process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

