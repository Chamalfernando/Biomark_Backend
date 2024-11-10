require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors"); // Import cors
const bodyParser = require("body-parser");
const pacRoutes = require("./routes/pacRoutes");

// const userRoutes = require("./routes/userRoutes");
// const logger = require("./middlewares/logger");

const app = express();

// Middleware for logging requests
app.use(morgan("dev"));
// app.use(logger);

// Use CORS to allow requests from all origins
app.use(cors());

// app.use(express.json());

// Middleware
app.use(bodyParser.json());

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Use user routes
// app.use("/api/users", userRoutes);

// Use PAC routes
app.use("/api", pacRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.DB_STRING)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    // res.status(500).json({ message: "MongoDB connection error", error: err });
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
