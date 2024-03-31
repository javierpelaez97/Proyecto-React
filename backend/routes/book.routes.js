const express = require("express")
const { findAll, insert } = require("../controllers/book.controller")
const { deleteOne } = require("../models/book.model")
const router = express.Router()

router.get("/", findAll)
router.post("/", insert)
router.delete("/:id", deleteOne)

module.exports = router 
 