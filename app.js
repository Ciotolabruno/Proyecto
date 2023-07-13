const express = require ('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use (express.static(publicPath)); 


app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./view/home.html"))
});

app.get("/register.html", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./view/register.html"))
});

app.get("/loguin.html", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./view/loguin.html"))
});
app.listen (3000, () => {
    console.log('servidor corriendo en el puerto 3000')
});