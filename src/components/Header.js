import React from 'react';

function Header() {
    return (
        <div>
            <h2 className="mt-4">
                Pantrymate |{' '}
                <span className="text-muted">lets get cooking!</span>
            </h2>
            <p className="text-muted">
                Find amazing recipes using the ingredients you already have.
            </p>
            <br></br>
        </div>
    );
}

export default Header;
