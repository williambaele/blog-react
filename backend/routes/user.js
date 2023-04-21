const express = require('express')

// controller functions
const { loginUser, signupUser, getUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

//GET a single user
router.get('/:id', getUser)

// signup route
router.post('/signup', signupUser)

module.exports = router
