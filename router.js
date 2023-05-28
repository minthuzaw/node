import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.send("hello about page")
})
export default router;
