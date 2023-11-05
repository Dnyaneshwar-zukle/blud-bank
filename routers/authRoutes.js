const { registerController, loginController } = require("../controllers/authController")

const express = require('express')
const router = express.Router()

// router

// Register || POST
router.post('/register', registerController) 

// login || POST

router.post('/login', loginController)


module.exports = router