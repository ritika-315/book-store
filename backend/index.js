const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
require('dotenv').config();

const missingVariables = ['DB_URL', 'JWT_SECRET_KEY'].filter(
  (name) => !process.env[name] || !process.env[name].trim()
);
if (missingVariables.length > 0) {
  console.error(`Missing required environment variables: ${missingVariables.join(', ')}`);
  process.exit(1);
}

const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'https://book-store-eight-lac.vercel.app'],
    credentials: true
}))

// routes
const bookRoutes = require('./src/books/book.route');
const orderRoutes = require("./src/orders/order.route")
const userRoutes =  require("./src/users/user.route")
const adminRoutes = require("./src/stats/admin.stats")

app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
