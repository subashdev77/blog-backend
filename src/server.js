const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const UserRoutes = require("./routes/userRoutes");
const BlogRoutes = require("./routes/Blog");
const uploadRouter = require("./routes/upload");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = parseInt(process.env.PORT) || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API Routes
app.use("/api/users", UserRoutes);
app.use("/api/blogs", BlogRoutes);
app.use("/api/upload", uploadRouter);

connectDB();

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Failed to start server: ${err.message}`);
    process.exit(1);
  }
  console.log(`Server is running on http://localhost:${PORT}`);
});
