import React, { Component } from 'react';

import Recipe from './Recipe';

class Recipes extends Component {
    render() {
        const { recipes, getRecipe } = this.props;
        return recipes.map((recipe) => (
            <div className="d-inline-flex mt-4">
                <Recipe key={recipe.id} recipe={recipe} getRecipe={getRecipe} />
            </div>
        ));
    }
}

export default Recipes;
