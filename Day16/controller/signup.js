const express = require("express");
const mongoose = require("mongoose");
const user = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../service/auth");

async function handleSignup(req, res) {
  const body = req.body;
  try {
    const newUser = await user.create({
      userName: body.userName,
      email: body.email,
      password: body.password,
    });
    // console.log(user);
    return res.redirect("/login");
  } catch (err) {
    console.error("Error creating short URL:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function handleLogin(req, res) {
  const body = req.body;
  // console.log(body);
  const { email, password } = body;
  const userMatch = await user.findOne({ email, password });
  // console.log(userMatch);
  // if (userMatch) {
  //   req.session.user = userMatch;
  // }
  if (!userMatch)
    return res.render("login", { msg: "User not found with that id password" });

  // const sessionId = uuidv4();
  // console.log(req.cookie);
  // console.log(sessionId);
  const token = setUser(userMatch);
  res.cookie("token", token);
  return res.redirect("/");
}

module.exports = { handleSignup, handleLogin };
