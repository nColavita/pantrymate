import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header';
import IngredientSearch from './components/IngredientSearch';
import Recipes from './components/Recipes';
import RecipeInfo from './components/RecipeInfo';

import './App.css';

class App extends Component {
    state = {
        searchValue: '',
        recipes: [],
        recipe: [],
        viewRecipe: false,
    };

    handleChange = (e) => {
        if (e.target.value === '') {
            this.setState({ searchValue: '' });
        } else {
            this.setState({ searchValue: e.target.value });
        }
    };

    submitSearch = (e) => {
        e.preventDefault();
        // Gather searches from App State
        const searchTermsValidated = this.state.searchValue;
        // Hit the Spoonacular Find By Ingredient API
        const recipeAPI = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTermsValidated}&number=2&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`;
        axios
            .get(recipeAPI)
            .then((response) => this.setState({ recipes: response.data }))
            .catch((err) => console.log(err));
    };

    getRecipe = (id) => {
        // Hit the Spoonacular Get Recipe Information API
        const ingredientsAPI = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`;
        axios
            .get(ingredientsAPI)
            .then((response) =>
                this.setState({
                    recipe: response.data,
                    viewRecipe: true,
                })
            )
            .catch((err) => console.log(err));
    };

    closeModal = () => {
        this.setState({
            viewRecipe: false,
        });
    };

    render() {
        // render is the only required lifecycle method

        // Conditional Component Rendering of Modal
        let recipeModal = null;
        if (this.state.viewRecipe) {
            recipeModal = (
                <RecipeInfo
                    recipe={this.state.recipe}
                    viewRecipe={this.state.viewRecipe}
                    closeModal={this.closeModal}
                />
            );
        }

        return (
            <div className="container">
                <Header />
                <IngredientSearch
                    searchValue={this.state.searchValue}
                    handleChange={this.handleChange}
                    submitSearch={this.submitSearch}
                />
                <Recipes
                    recipes={this.state.recipes}
                    getRecipe={this.getRecipe}
                />
                {recipeModal}
            </div>
        );
    }
}

export default App;
