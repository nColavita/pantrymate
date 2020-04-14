import React from 'react';

function Header() {
    return (
        <div>
            <h2 className="mt-4" style={setStyle.h2}>
                Pantrymate{' '}
                <span className="text-muted" style={setStyle.seperator}>
                    |
                </span>{' '}
                <span className="text-muted">lets get cooking!</span>
            </h2>
            <p className="text-muted">
                Find amazing recipes using the ingredients you already have.
            </p>
            <br></br>
        </div>
    );
}

const setStyle = {
    h2: {
        color: '#008B8B	',
        fontSize: '4em',
    },
    seperator: {
        fontWeight: '200',
    },
};

export default Header;
