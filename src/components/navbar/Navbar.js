import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-inverse">
                <a href="http://localhost:3000/" className="navbar-brand" > {props.title} </a>
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="http://localhost:3000/" >React</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

Navbar.defaultProps = {
    title: 'Formation React'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

export default Navbar
