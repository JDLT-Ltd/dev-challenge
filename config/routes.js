const router = require('express').Router()
const samples = require('../controllers/pages')

router.get('/samples', samples.index)

module.exports = router
