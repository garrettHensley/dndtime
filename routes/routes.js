const express = require("express")
const router = express.Router()
const availability = require("../models/availability")
const session = require("../models/sessions")
const users = require("../users.json").users

// POST availability
router.post("/post", async (req, res) => {
  // res.send('POST API')
  console.log(req.body.name)
  const name = req.body.name.toLowerCase()
  const weekOfDate = req.body.weekOfDate
  const data = new availability({
    name: name,
    weekdays: req.body.weekdays,
    created: new Date(),
    weekOfDate: weekOfDate,
  })

  const validate = () => {
    let valid = false
    // const name = req.body.name.toLowerCase()
    users.forEach((curr) => {
      if (curr === name) {
        valid = true
      }
    })
    return valid
  }

  try {
    if (validate()) {
      let exists = await availability.find({ name: name, weekOfDate: weekOfDate })
      if (exists.length) {
        console.log('here')
        await availability.findOneAndUpdate({ name: name }, {
            weekdays: req.body.weekdays,
        })
        res.status(200).json("Success")
      } else {
        console.log('no here')
        const dataToSave = await data.save()
        let usersSubmitted = await session.find({ weekOfDate: weekOfDate })
        usersSubmitted = usersSubmitted[0].usersSubmitted
        console.log(usersSubmitted)
        await session.findOneAndUpdate(
          { weekOfDate: weekOfDate },
          { usersSubmitted: [name, ...usersSubmitted] }
        )
        res.status(200).json(dataToSave)
        // res.statusMessage('no')
      }
    } else {
      res.status(401).json({ message: "No u" })
    }
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// post upcoming session
router.post("/session", async (req, res) => {
  const data = new session({
    weekOfDate: req.body.weekOfDate,
    usersSubmitted: [],
  })

  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
    // console.log(await session.find({weekOfDate: 'Oct 31'})
    console.log("worked")
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// router.get("/availability/:weekOfDate", async (req, res) => {
//   try {
//     const data = await availability.find({ weekOfDate: req.params.weekOfDate.weekOfDate })
//     res.json(data)
//     console.log(req.params.weekOfDate)
//   } catch (error) {
//     res.status(500).json({ message: error.message })
//   }
// })

router.get("/availability/:weekOfDate", async (req, res) => {
    try {
      const data = await availability.find({"weekOfDate": req.params.weekOfDate})
      const arr = []
      data.forEach(i => {
        let obj = {
            Monday: false,
            Tuesday: false,
            Wednesday: false,
            Thursday: false,
            Friday: false,
        }
        i.weekdays.forEach(j => {
            if(j === 'Monday') obj.Monday = true
            if(j === 'Tuesday') obj.Tuesday = true
            if(j === 'Wednesday') obj.Wednesday = true
            if(j === 'Thursday') obj.Thursday = true
            if(j === 'Friday') obj.Friday = true
        })
        arr.push(obj)
      })
    //   console.log(arr)
      res.json(arr)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

router.get("/session", async (req, res) => {
  try {
    const data = await session.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await availability.find()
    res.json(data)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
