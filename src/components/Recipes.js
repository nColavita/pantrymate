import React, { Component } from 'react';

import Recipe from './Recipe';

class Recipes extends Component {
    render() {
        return this.props.recipes.map((recipe) => (
            <div className="d-inline-flex">
                <Recipe
                    key={recipe.id}
                    recipe={recipe}
                    getRecipe={this.props.getRecipe}
                />
            </div>
        ));
    }
}

export default Recipes;
