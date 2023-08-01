import express from "express"
import bcrypt from "bcrypt"
const app = express();
const users = [];
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/login', (req, res) => {
    res.render("login");
})
app.post('/login', (req, res) => {
    
})

app.get('/register', (req, res) => {
    res.render("register");
})

app.post('/register', async(req, res) => {
    const { name, email, password} = req.body;
    try{
        const hashedPassword = bcrypt.hashedPassword(password, 10);
        users.push({
            id: Date.now().toString(),
            name: name,
            email : email,
            password : password
        })
        res.redirect('/')
    }catch{
        res.redirect("/register");
    }
})

app.listen(3000, () => {
    console.log("Server is working on port number 3000");
})