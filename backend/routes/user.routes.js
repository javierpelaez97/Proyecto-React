const express = require("express")
const router = express.Router()
const {login, singup} = require("../controllers/user.controller")

router.post('/singup', singup)
router.post("/login", login)

module.exports = router