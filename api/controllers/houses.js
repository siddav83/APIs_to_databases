const express = require('express');
const router = express.Router();

const House = require('../models/house')

// owners show route
router.get('/:id', async (req, res) => {
    try {
        const house = await House.findById(parseInt(req.params.id))
        res.json(house)
    } catch (err) {
        res.status(400).send({err})
    }
})

// // owners dogs route
// router.get('/:id/dogs', async (req, res) => {
//     try {
//         const owner = await Owner.findById(parseInt(req.params.id))
//         console.log(owner)
//         const dogs = await owner.dogs
//         console.log(dogs)
//         res.json(dogs)
//     } catch(err) {
//         res.status(404).send({err}) 
//     }
// })

module.exports = router;
