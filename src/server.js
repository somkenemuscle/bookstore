import app from "./app.js"
import connectDb from "./config/db.js";

const PORT = process.env.PORT || 4000;

// Connect to the database
connectDb();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

