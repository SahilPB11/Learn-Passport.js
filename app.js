import express from "express"

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index")
})

app.listen(3000, () => {
    console.log("Server is working on port number 3000");
})