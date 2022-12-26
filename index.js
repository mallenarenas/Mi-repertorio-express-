// Levantando el servidor
const express = require('express');
const app = express();
const fs = require('fs');

app.listen(3000, console.log("¡Servidor encendido!"));

app.use(express.json())

// Leyendo songs.json
app.get("/canciones", (req, res) => {
    const songs = JSON.parse(fs.readFileSync("songs.json"));
    res.json(songs);
  });

// Actualizando songs.json
app.post("/canciones", (req, res) => {
    const song = req.body;
    const songs = JSON.parse(fs.readFileSync("songs.json"));
    songs.push(song);
    fs.writeFileSync("songs.json", JSON.stringify(songs));
    res.send("Canción agregada con éxito!");
  });
