import mysql from "mysql";
import express from "express";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("hello backend je gor")
})

app.get("/movies", (req, res) => {
    const q ="SELECT * FROM test.movies"
    db.query(q, (err, data) => {
        if(err) return res.json("napaka pri nalaganju")
        return res.json(data)
    });
})

app.post("/movies", (req, res) => {
    const q = "INSERT INTO movies (`title`,`desc`,`cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
    ]
    db.query(q, [values], (err, data) => {
        if(err) return res.json("napaka pri vpisu podatkov")
        return res.json("Movie has been added ")
    })
})

app.delete("/movies/:id", (req,res) => {
    const movieId = req.params.id;
    const q = "DELETE FROM movies WHERE id = ?"

    db.query(q, [movieId], (err, data) => {
        if(err) return res.json(err);
        return res.json("Movie has been deleted.");
    })
})


app.put("/movies/:id", (req,res) => {
    const movieId = req.params.id;
    const q = "UPDATE movies SET `title` = ?,`desc` = ?,`cover` = ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
    ]

    db.query(q, [...values,movieId], (err, data) => {
        if(err) return res.json(err);
        return res.json("Movie has been updated.");
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})