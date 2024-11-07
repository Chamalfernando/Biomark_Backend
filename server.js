const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
// const logger = require("./middlewares/logger");

const app = express();

// Middleware for logging requests
app.use(morgan("dev"));
// app.use(logger);

// Middleware for parsing JSON
app.use(express.json());

// Use user routes
app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/userDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
