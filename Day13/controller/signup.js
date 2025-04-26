const express = require("express");
const mongoose = require("mongoose");
const user = require("../models/user");
const { v4: uuidv4 } = require("uuid");

async function handleSignup(req, res) {
  const body = req.body;
  try {
    const newUser = await user.create({
      userName: body.userName,
      email: body.email,
      password: body.password,
    });
    console.log(user);
    return res.redirect("/home");
  } catch (err) {
    console.error("Error creating short URL:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const userMatch = await user.findOne({ email, password });
  if (!userMatch)
    return res.render("login", { msg: "User not found with that id password" });

  const sessionId = uuidv4();
  setUser(sessionId, userMatch);
  res.cookie("uid", sessionId);
  return res.redirect("/");
}

module.exports = { handleSignup, handleLogin };
