const express = require('express')
const dataBase = require('../data/db-config.js')

const router = express.Router()

//GETs
router.get('/', (req, res) => {
     dataBase('recipes')
     .then(recipes => {
          res.json(recipes)
     })
     .catch(err => {
          res.status(500).json({
               message: 'Failed to retrieve recipes'
          })
     })
})

module.exports = router