const express = require('express');
const router = express.Router()
const Model = require('../models/model');
const users = require('../users.json').users

// POST
router.post('/post', async (req,res) => {
    // res.send('POST API')
    console.log(req.body.name)
    const name = req.body.name.toLowerCase()
    console.log(name)
    const data = new Model({
        name: name,
        weekdays: req.body.weekdays
    })

    const validate = () => {
        let valid = false
        // const name = req.body.name.toLowerCase()
        users.forEach(curr => {
            if(curr === name) {
                valid = true
            }
        })
        return valid
    }

    try {
        if(validate()) {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave)
        }
        else {
            res.status(401).json({message: 'No u'})
        }
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find()
        res.json(data)
    }
    catch(error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;