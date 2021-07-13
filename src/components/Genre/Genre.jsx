import { Link } from 'react-router-dom';
import bookCover from '../../images/book.png'
import './Genre.scss'

export default function Genre({genreName}) {
    return (
        <div className="genre__book-container">
                <Link className="genre" to={`/genre/${genreName.toLowerCase()}`}>
                    <img className="genre__book-cover" src={bookCover} alt="book cover" />
                    <h3 className="genre__title">{genreName}</h3>
                </Link>
            </div>
    )
}
