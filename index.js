const express  = require('express')
const app  = express()

const PORT = 3400

app.listen(PORT,(req,res)=>{
    console.log(`Listening on Port ${PORT}"`)
})
app.get('/',(req,res)=>{
res.send("I am at home");
})
app.get('/about',(req,res)=>{
res.send(`<h1>We are Binary Knights.. We are aspiring to build a HealthTech App</h1>`);
})
app.get('/contact',(req,res)=>{
res.send("Why you want to connect with me.. tell in the text box");
})