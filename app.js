import express from "express"

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/login', (req, res) => {
    res.render("login");
})

app.get('/register', (req, res) => {
    res.render("register");
})

app.post('/register', (req, res) => {
    
})

app.listen(3000, () => {
    console.log("Server is working on port number 3000");
})