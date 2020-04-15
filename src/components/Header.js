import React from 'react';

function Header() {
    return (
        <div>
            <h2 className="mt-4" style={setStyle.h2}>
                Pantrymate{' '}
                <span className="text-muted" style={setStyle.seperator}>
                    |
                </span>{' '}
                <span style={setStyle.tagline} className="text-muted">
                    lets get cooking!
                </span>
            </h2>
            <p className="text-muted">
                Find amazing recipes using the ingredients you already have.{' '}
                <br></br>You can also search for delicious recipes by
                nutritional or dietary restrictions!
            </p>
            <br></br>
        </div>
    );
}

const setStyle = {
    h2: {
        color: '#52b3a2',
        fontSize: '4em',
    },
    seperator: {
        fontWeight: '200',
    },
    tagline: {
        fontWeight: '200',
    },
};

export default Header;
