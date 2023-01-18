
/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Link,
} from "react-router-dom";

const Movies = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
          const res = await axios.get("http://localhost:8800/movies")
          setMovies(res.data);
          console.log(res)
      } catch (err) {
        console.log (err)
      }
    }
    fetchAllMovies();
  }, [])

  const handleDelete = async (id) => {
    try {
        await axios.delete("http://localhost:8800/movies/"+id)
        window.location.reload(); //osvezi window
    } catch (err) { 
      console.log(err)
    }
  }

  return (
    <div>
       <h1> Videoteka</h1>
       <h3>Seznam mojih priljubljenih filmov</h3>
       <div className='app__movies'>
        {movies.map(movie=> (
          <div className="app__movie" key={movie.id}>
            <img src = {movie.cover} alt= "" />
            <h2>{movie.title}</h2>
            <p>{movie.desc}</p>
            <button className='app__update-button'><Link to ={`/update/${movie.id}`}>Posodobi</Link></button>
            <button className='app__delete-button' onClick={() => handleDelete(movie.id)}>Odstrani</button>
          </div>
        ))}
       </div>
       <button className='app__add-button'><Link to="/add">Dodaj</Link></button>
       <div className="app__info">
        <h5>Nejc Drobnič</h5>
        <h6>ReactJS, MySQL CRUD</h6>
       </div>
    </div>
  )
}

export default Movies
