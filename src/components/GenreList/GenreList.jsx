import { useState, useEffect } from 'react';
import axios from 'axios';
import Genre from '../../components/Genre/Genre';
import './GenreList.scss';
const API_URL = process.env.API_URL

function GenreList() {  
  const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get(`https://sleepy-castle-07849.herokuapp.com/api/genres`)
      .then(res => {
        console.log(res.data)
        setGenres(res.data)
      })
  }, [])

  document.title = "Welcome to Lauren's Bookstore"
  console.log(API_URL)
  return (
      <main className="genre__container">
          {genres.map(genre => <Genre key={genre.id} genreName={genre.name} />)}
      </main>
  );
}

export default GenreList;
