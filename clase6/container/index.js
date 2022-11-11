const express = require('express')
const Container = require("./container.js")

const app = express();

const PORT = 8080

const archivo = new Container("./products.json")

app.get('/products', async (req, res) => {
    res.send(await archivo.getAll())
})

app.get('/productsRandom', async (req, res) => {
    res.send(await archivo.getRandom())
})

const server = app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})