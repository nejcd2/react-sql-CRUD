/* eslint-disable no-unused-vars */
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {
  useNavigate
} from "react-router-dom";


const Add = () => {
  const [movie, setMovie] = useState({
    title:"",
    desc:"",
    cover:"",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setMovie(prev=>({...prev, [e.target.name]: e.target.value}));
  }

  const handleClick = async e => {
    e.preventDefault()
    try {
        await axios.post("http://localhost:8800/movies", movie)
        navigate("/")
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='app__add'>
      <h1>Dodaj nov film</h1>
      <input type="text" placeholder='Naslov' onChange={handleChange} name="title" />
      <input type="text" placeholder='Opis' onChange={handleChange} name="desc"  />
      <input type="text" placeholder='IMDB Link slike'onChange={handleChange} name="cover"  />

      <button className='app__add-button' onClick={handleClick}>Dodaj</button>
    </div>
  )
}

export default Add