import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div style={navStyle.container}>
            <div style={navStyle.logoContainer}>
                <Link to="/" style={navStyle.link}>
                    <h2 style={navStyle.logo}>Pntrym8</h2>
                </Link>
            </div>
            <div style={navStyle.navItems}>
                <Link to="/" style={navStyle.link}>
                    By Ingredient
                </Link>
                <Link to="/nutritionalsearch" style={navStyle.link}>
                    By Nutrition
                </Link>
            </div>
        </div>
    );
};

const navStyle = {
    container: {
        padding: '3px',
        width: '100%',
        backgroundColor: '#5f5b59',
    },
    logoContainer: {
        display: 'inline-block',
    },
    logo: {
        color: '#F2F2F2',
        borderLeft: '1px solid #65ce65',
        borderRight: '1px solid #65ce65',
        borderBottom: '1px solid #65ce65',
        padding: '5px',
    },
    link: {
        display: 'inline-block',
        margin: '0.5em',
        color: '#F2F2F2',
        textDecoration: 'none',
    },
    navItems: {
        display: 'inline-block',
    },
};

export default Nav;
