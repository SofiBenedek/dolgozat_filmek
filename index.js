// A feladat utolsó részét nem teljesítettem: A projekteben hozz létre routes és controllers mappákat melyek a megfelelő funkciókkal rendelkeznek.
import express from "express";

const app = express();
const PORT = 3000;

app.use(express);

const movies=[
    {id: 0, cim: "Harry_Potter", rendezo: "Joanne", megjelenes: 1997, koszkar: "igen" },
    {id: 1, cim: "Jurassic_Park", rendezo: "Antonio", megjelenes: 1993, koszkar: "nem" }
];
app.get('/movies', (req , res) =>{
    res.json(filmek);
});
app.get('/movies/:id', (req , res) =>{
    const { id } = req.param;
    res.json(movies[id]);
});
app.post('/movies', (req , res) =>{
    const film = req.body;
    film.id = movies.length +1;
    film.push(movies);
    res.status(201).json(filmek)
});
app.put('/filmek', (req , res) =>{
    const updatemovie = req.body;
    const {id}= req.param;
    const index = movies.findIndex(w => w.id == id);

    if (index !== -1) {
        filmek[index] = (movies[index],updatemovie[index]);
        res.json(filmek[index]);

    }else{
        res.status(404).json("Rosz bemenet");
    }
});
app.delete('/movies', (req , res) =>{
    res.json(movies);
    const {id} = req.param;
    const index = movies.findIndex(w => w.id == id);
    if (index !== -1) {
        movies.splice(index,1);
    }else{
        res.status(404).json("Rosz bemenet");
    }
});