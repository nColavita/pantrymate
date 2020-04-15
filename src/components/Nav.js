import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="d-flex justify-content-start">
        //         <Link to="/" style={linkStyle}>
        //             <strong>Pm</strong>
        //         </Link>
        //     </div>
        //     <div className="d-flex justify-content-end">
        //         <ul className="navbar-nav">
        //             <li className="nav-item">
        //                 <Link to="/" style={linkStyle}>
        //                     By Ingredient
        //                 </Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to="/nutritionalsearch" style={linkStyle}>
        //                     By Nutrition
        //                 </Link>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>

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
