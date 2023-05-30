import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    let users = [
        {name: "mtz"},
        {name: "tt"}
    ]
    res.render('index', {users, isLike: false})
})

router.get('/about', (req, res) => {
    res.render('about')
})
export default router;
