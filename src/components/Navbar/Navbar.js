import React from 'react';
import logo from '../../res/League-of-Legends-Logo.png';
import { NavLink } from 'react-router-dom';
import '../../Base-Styling.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar row'>
            <NavLink to='/' exact={true} activeClassName='navbar__active' className='navbar__link-logo'>  
                <img src={logo} alt='logo' className='navbar__logo'/>
            </NavLink>

            <NavLink to='/spells' exact={true} activeClassName='navbar__active' className='navbar__link center rounded transition'>Spells</NavLink>

            <NavLink to='/items' exact={true} activeClassName='navbar__active' className='navbar__link center rounded transition'>Items</NavLink>

            <NavLink to='/champions' exact={true} activeClassName='navbar__active' className='navbar__link center rounded transition'>Champions</NavLink>

            <NavLink to='/ranks' exact={true} activeClassName='navbar__active' className='navbar__link center rounded transition'>Ranks</NavLink>

            <NavLink to='/tutorials' exact={true} activeClassName='navbar__active' className='navbar__link center rounded transition'>Tutorials</NavLink>
        </nav>
    )
}

export default Navbar;