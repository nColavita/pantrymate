import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

class Recipes extends Component {
    render() {
        const { recipes, getRecipe } = this.props;
        return recipes.map((recipe) => (
            <div key={recipe.id} className="d-inline-flex mt-4">
                <Recipe recipe={recipe} getRecipe={getRecipe} />
            </div>
        ));
    }
}

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    getRecipe: PropTypes.func.isRequired,
};

export default Recipes;
