import Nav from '../Nav/Nav';
import './Header.scss';
import booksImage from '../../images/books.png'

function Header() {
    return (
        <header 
            className="header" 
            style={{
                background: `url(${booksImage}) center/cover no-repeat`
            }}>
            <div className="header__container">
                <h1 className="header__title">Lauren's Book Store</h1>
                <Nav />
            </div>
        </header>
    )
}

export default Header;