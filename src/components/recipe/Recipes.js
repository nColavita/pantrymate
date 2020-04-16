import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Recipe from './Recipe';

class Recipes extends Component {
    render() {
        const { recipes, getRecipe } = this.props;
        return recipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} getRecipe={getRecipe} />
        ));
    }
}

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    getRecipe: PropTypes.func.isRequired,
};

export default Recipes;
