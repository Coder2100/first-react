import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <h1>Daily Tasks</h1>
            <Link style={linkStyle} to="/">Work</Link> |  <Link style={linkStyle} to="/about">House Chores</Link> | <Link style={linkStyle} to="/services">Services</Link>
        </header>
    );
}
const headerStyle = {
    backgroundColor: 'MediumSeaGreen',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;