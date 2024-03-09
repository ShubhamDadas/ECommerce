const express = require("express")

const app = express()

const PORT = 3000 || Process.env.PORT

app.get("/", (req,res) => {
    res.send("Home")
})

app.listen(3000, () => {
    console.log(`Listening to Port ${PORT}`)
})

