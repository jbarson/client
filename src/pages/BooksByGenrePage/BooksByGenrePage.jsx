import { useState, useEffect } from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Book from '../../components/Book/Book';
import { capitalize } from '../../utils/capitalize';
import './BooksByGenrePage.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const API_URL = process.env.API_URL

function BooksByGenrePage() {
    const [books, setBooks] = useState([])
    const { genreName } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/api/books/${genreName}`)
            .then(res => {
              console.log(res.data)
                setBooks(res.data)
            })
            .catch(err => setBooks([]))
    }, [genreName])

    document.title = "Browse Books by Genre";
    
    return (
        <div className="books-by-genre-page">
            <SectionTitle 
                title={`${capitalize(genreName)} Books`}
                description={`Here's a list of all the books we have for the ${genreName} genre`}
            />
            <div className="book__container">
                {books
                .map(book => {
                    return (
                        <Book 
                            key={book.id}
                            bookName={book.title} 
                            bookDescription={book.description} 
                            bookImage={book.bookImage}
                        />
                    )
                })
                }
                </div>
        </div>
    )
}

export default BooksByGenrePage;
