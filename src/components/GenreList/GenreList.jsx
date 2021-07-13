import { useState, useEffect } from 'react';
import axios from 'axios';
import Genre from '../../components/Genre/Genre';
import './GenreList.scss';

function GenreList() {  
  const [genres, setGenres] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/genres`)
      .then(res => {
        console.log(res.data)
        setGenres(res.data)
      })
  }, [])

  document.title = "Welcome to Lauren's Bookstore"
  return (
      <main className="genre__container">
          {genres.map(genre => <Genre key={genre.id} genreName={genre.name} />)}
      </main>
  );
}

export default GenreList;
