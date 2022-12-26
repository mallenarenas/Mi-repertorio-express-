// Levantando el servidor
const express = require('express');
const app = express();
const fs = require('fs');
app.listen(3000, console.log("¡Servidor encendido!"));
app.get("/canciones", (req, res) => {
    const songs = JSON.parse(fs.readFileSync("songs.json"));
    res.json(songs);
  });