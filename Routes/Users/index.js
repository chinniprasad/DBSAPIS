const express = require('express')
const router = express.Router()

const getAllUsers = require('./getAllUsers')
const getByUserId = require('./getByUserId')
const login = require('./login')

router.get('/', getAllUsers)
router.get('/:id', getByUserId)
router.get('/login/:email/:password', login)

module.exports = router