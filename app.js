import express from "express"

const app = express();

app.get('/', (req, res) => {
    res.send("hii")
})

app.listen(3000, () => {
    console.log("Server is working on port number 3000");
})