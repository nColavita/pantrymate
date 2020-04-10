import React, { Component } from 'react';

class Recipe extends Component {
    render() {
        const { recipe, getRecipe } = this.props;
        return (
            <div className="card shadow" style={style.cardStyle}>
                <img className="card-img-top" src={recipe.image} alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <ul className="list-group list-group-flush"></ul>
                    <button
                        className="btn btn-primary"
                        onClick={getRecipe.bind(this, recipe.id)}
                    >
                        View Recipe
                    </button>
                </div>
            </div>
        );
    }
}

const style = {
    cardStyle: {
        width: '18rem',
        margin: '0.25em',
    },
};

export default Recipe;
