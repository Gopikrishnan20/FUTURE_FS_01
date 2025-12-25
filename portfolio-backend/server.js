import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { adminAuth } from "./middleware/auth.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory message store (no DB)
const messages = [];

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Contact form route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "All fields are required",
    });
  }

  try {
    // 1️⃣ Store message in memory
    messages.push({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    // 2️⃣ Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message received and email sent",
    });
  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({
      error: "Failed to send message",
    });
  }
});

// 🔒 Protected admin route (NO DATABASE)
app.get("/messages", adminAuth, (req, res) => {
  res.json(messages);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
