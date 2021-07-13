import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return (
        <li className="navbar__list-item">
            <NavLink 
                className="navbar__link" 
                activeClassName="navbar__link--active" 
                exact
                to={props.link}>
                    {props.text}
            </NavLink>
        </li>
    )

}

export default NavItem;