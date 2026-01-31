const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/andromeda");

const LeadSchema = new mongoose.Schema({
  email: String,
  message: String,
  starred: { type: Boolean, default: false },
  status: { type: String, default: "new" },
  createdAt: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String
});

const Lead = mongoose.model("Lead", LeadSchema);
const User = mongoose.model("User", UserSchema);

const SECRET = "andromeda_secret";

/* ======================
   CREATE ADMIN ONCE
====================== */

(async () => {
  const exists = await User.findOne({ email: "admin@admin.com" });
  if (!exists) {
    const hash = await bcrypt.hash("admin123", 10);
    await User.create({
      email: "admin@admin.com",
      password: hash,
      role: "admin"
    });

    console.log("Admin created: admin@admin.com / admin123");
  }
})();

/* ======================
   AUTH MIDDLEWARE
====================== */

function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

/* ======================
   LOGIN
====================== */

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json("Invalid");

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json("Invalid");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token });
});

/* ======================
   CREATE LEAD (CONTACT FORM)
====================== */

app.post("/leads", async (req, res) => {
    const { email, message } = req.body;
  
    if (!email || !message)
      return res.status(400).json("Missing fields");
  
    await Lead.create({ email, message });
  
    res.json({ success: true });
  });
  

/* ======================
   PROTECTED LEADS
====================== */

app.get("/leads", auth, async (_, res) => {
  res.json(await Lead.find().sort({ createdAt: -1 }));
});

app.delete("/leads/:id", auth, async (req, res) => {
  await Lead.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

app.put("/leads/:id", auth, async (req, res) => {
  await Lead.findByIdAndUpdate(req.params.id, req.body);
  res.sendStatus(200);
});

/* ====================== */

app.listen(5000, () => console.log("Server running 5000"));
