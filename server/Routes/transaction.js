import express from 'express'
const router = express.Router()

router.get('./add_income', (req,res) => {
    res.send('hello added income')
})

export default router

