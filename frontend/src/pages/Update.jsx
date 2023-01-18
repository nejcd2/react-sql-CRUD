/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {
  useNavigate, useLocation,
} from "react-router-dom";

const Update = () => {
  const [movie, setMovie] = useState({
    title:"",
    desc:"",
    cover:"",
  })

  const navigate = useNavigate()
  const location = useLocation()

  const movieId = location.pathname.split("/")[2];

  console.log(location.pathname.split("/"))

  const handleChange = (e) => {
    setMovie(prev=>({...prev, [e.target.name]: e.target.value}));
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
        await axios.put("http://localhost:8800/movies" + movieId, movie)
        navigate("/")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='app__update'>
      <h1>Posodobi</h1>
      <input type="text" placeholder='Naslov' onChange={handleChange} name="title" />
      <input type="text" placeholder='Opis' onChange={handleChange} name="desc"  />
      <input type="text" placeholder='IMDB Link slike'onChange={handleChange} name="cover"  />

      <button className='app__update-button' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update