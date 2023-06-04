export const home = (req, res) => {
    let users = [
        {name: "mtz"},
        {name: "tt"}
    ]
    res.render('index', {users, isLike: false})
}

export const about = (req, res) => {
    res.render("about");
}