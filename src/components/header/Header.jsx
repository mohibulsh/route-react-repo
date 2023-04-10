import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <nav className='header'>
            <ActiveLink to="/">home</ActiveLink>
            <ActiveLink to="/friends">friends</ActiveLink>
            <ActiveLink to="/about">about</ActiveLink>
            <ActiveLink to="/poster">post</ActiveLink>
            <ActiveLink to="/contract">contact</ActiveLink>
        </nav>
    );
};

export default Header;