import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/review'>Order Review</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>About</Link>
            
        </nav>
    );
};

export default Header;