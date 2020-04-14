import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <Link to="/" style={linkStyle}>
                    <strong>Pm</strong>
                </Link>
            </div>
            <div className="flex-grow-1 text-right">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" style={linkStyle}>
                            By Ingredient
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/nutritionalsearch" style={linkStyle}>
                            By Nutrition
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

const linkStyle = {
    color: '#3f3f3f',
    textDecoration: 'none',
    display: 'inline-block',
};

export default Nav;
