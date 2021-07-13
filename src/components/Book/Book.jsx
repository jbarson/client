import './Book.scss'

export default function Book({bookName, bookDescription, bookImage}) {
    return (
        <article className="book">
            <div className="book__container">
                <img className="book__cover" src="/book.png" alt="book cover" />
                <h3 className="book__title">{bookName}</h3>
            </div>
            <p className="book__description">{bookDescription}</p>
        </article>
    )
}
