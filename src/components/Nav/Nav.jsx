import {v4 as uuid} from 'uuid';
import NavItem from '../NavItem/NavItem'
import './Nav.scss';

const pages = [
    {
        id: uuid(),
        link: "/", 
        text: "Home", 
    },
    {
        id: uuid(),
        link: "/genre",
        text: "Genres",
    },
]

const Nav = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {
                    pages.map(page => {
                        return (
                            <NavItem 
                                key={page.id}
                                active={page.active}
                                link={page.link}
                                text={page.text}
                            />
                        )
                    }) 
                }
            </ul>
        </nav>
    )
}

export default Nav;