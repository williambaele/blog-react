const User = require('../models/userModel')

// Login User
const loginUser = async (req,res) => {
  res.json({mssg:'login user'})
}

// Signup User
const signupUser = async (req,res) => {
  res.json({mssg:'signup user'})
}

module.exports = {signupUser, loginUser}
